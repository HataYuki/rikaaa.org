import app from "./db";
import imageSize from "@coderosh/image-size"


export interface PostIdSlug {
    id: string
    slug: string
}

export interface PostIndex {
    id: string
    order: number
    projectType: string
    slug: string
    eyeCatch: Array<string>,
    headLine: {
        en: string
        ja: string
        subTextEn: string
    },
    description: {
        article: string
        copy: string
    }
}

export interface Post {
    id: string
    order: number
    projectType: string
    slug: string
    eyeCatch: Array<string>,
    headLine: {
        en: string
        ja: string
        subTextEn: string
    }
    description: {
        article: string
        copy: string
    }
    media: Array<{
        image: string
        imageSize: Array<number>
        video: Array<string>
        embedUrl: string
        caption: string
    }>
    environment: Array<string>
    overview: Array<{
        term: string
        description: Array<string>
    }>
}


export type PostIndexList = Array<PostIndex>
export type PostIdSlugList = Array<PostIdSlug>

export const getPostIdSlugList = async (): Promise<PostIdSlugList> => {
    const data = await app.content.get({
        schemaKey: 'article',
        fields: [
            'slug',
        ],
    })

    if (!data) {
        return []
    }

    const idList = Object.keys(data)

    return Object.values(data).map((obj: any, i) => {
        return {
            id: idList[i],
            slug: obj.slug,
        }
    })
}

export const getPostIndexList = async (): Promise<PostIndexList> => {
    const data = await app.content.get({
        schemaKey: 'article',
        fields: [
            'orderNumber',
            'projectType',
            'slug',
            'eyeCatch',
            'headLine',
            'description',
        ],
        populate: [
            {
                field: 'eyeCatch',
                fields: ['url']
            },
        ]
    })

    if (!data) {
        return []
    }

    const idList = Object.keys(data)

    return Object.values(data).map((obj: any, i) => {
        return {
            id: idList[i],
            order: obj.orderNumber,
            projectType: obj.projectType,
            slug: obj.slug,
            eyeCatch: (!obj.eyeCatch) ? [] : obj.eyeCatch.map((image: any) => {
                return image.url
            }),
            headLine: obj.headLine,
            description: obj.description,
        }
    }).sort((a: PostIndex, b: PostIndex) => {
        return a.order - b.order
    })
}

export const getPost = async (id: string): Promise<Post> => {
    const data = await app.content.get({
        schemaKey: 'article',
        entryId: id,
        fields: [
            'orderNumber',
            'projectType',
            'slug',
            'eyeCatch',
            'headLine',
            'description',
            'images',
            'environment',
            'overview',
        ],
        populate: [
            {
                field: 'eyeCatch',
                fields: ['url']
            },
            {
                field: 'images',
                fields: ['image', 'video'],
                populate: [
                    {
                        field: 'image',
                        populate: [
                            {
                                field: 'image',
                                fields: ['url', 'size']
                            },
                            {
                                field: 'video',
                                fields: ['url']
                            },
                        ]
                    },

                ]
            },
            {
                field: 'overview',
                fields: ['item'],
                populate: [
                    {
                        field: 'item',
                        populate: [
                            {
                                field: 'description',
                                fields: ['text'],
                                populate: true
                            }
                        ]
                    }
                ]
            }
        ]
    })


    const imageSizeList: Array<number> = await Promise.all(data.images.map(async (image: any) => {
        if (image.image.image.length) {
            const size: any = await imageSize(image.image.image[0].url)
            return [Number(size.width), Number(size.height)]
        } else {
            return [-1, -1]
        }
    }))

    return {
        id: id,
        order: data.orderNumber,
        projectType: data.projectType,
        slug: data.slug,
        eyeCatch: (!data.eyeCatch) ? [] : data.eyeCatch.map((image: any) => {
            return image.url
        }),
        headLine: data.headLine,
        media: (!data.images) ? [] : data.images.map((image: any, i: number) => {
            return {
                image: (image.image.image.length) ? image.image.image[0].url : '',
                imageSize: (image.image.image.length) ? imageSizeList[i] : [-1, -1],
                video: (image.image.video.length) ? image.image.video.map((v: any) => v.url) : [],
                caption: (image.image.caption) ? image.image.caption : '',
                embedUrl: (image.image.embedUrl) ? image.image.embedUrl : '',
            }
        }),
        description: data.description,
        environment: data.environment.split(','),
        overview: data.overview.map((item: any) => {
            return {
                term: item.item.term,
                description: (!item.item.description.length) ? [] : item.item.description.map((desc: any) => {
                    return desc.text
                })
            }
        })
    }
}

export const getPostsByPType = async (projectType: string | string[]): Promise<PostIndexList> => {
    const postList = await getPostIndexList()
    const result = postList.filter(post => post.projectType === projectType)

    return result
}