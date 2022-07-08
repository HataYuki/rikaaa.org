import app from "@lib/db";

export interface Post {
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

export type PostList = Array<Post>

export const getPosts = async (): Promise<PostList> => {
    const data = await app.content.get({
        schemaKey: 'article',
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
                                fields: ['url']
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

    if (!data) {
        return []
    }

    return Object.values(data).map((obj: any) => {
        return {
            order: obj.orderNumber,
            projectType: obj.projectType,
            slug: obj.slug,
            eyeCatch: (!obj.eyeCatch) ? [] : obj.eyeCatch.map((image: any) => {
                return image.url
            }),
            headLine: obj.headLine,
            media: (!obj.images) ? [] : obj.images.map((image: any) => {
                return {
                    image: (image.image.image.length) ? image.image.image[0].url : '',
                    video: (image.image.video.length) ? image.image.video.map((v: any) => v.url) : [],
                    caption: (image.image.caption) ? image.image.caption : '',
                    embedUrl: (image.image.embedUrl) ? image.image.embedUrl : '',
                }
            }),
            description: obj.description,
            environment: obj.environment.split(','),
            overview: obj.overview.map((item: any) => {
                return {
                    term: item.item.term,
                    description: (!item.item.description.length) ? [] : item.item.description.map((desc: any) => {
                        return desc.text
                    })
                }
            })
        }
    }).sort((a: Post, b: Post) => {
        return a.order - b.order
    })
}

export const getAPostBySlug = async (slug: string | string[]): Promise<Post | object> => {
    const postList = await getPosts()
    const result = postList.filter(post => post.slug === slug)

    if (result.length) {
        return result[0]
    } else {
        return {}
    }
}

export const getPostsByPType = async (projectType: string | string[]): Promise<PostList> => {
    const postList = await getPosts()
    const result = postList.filter(post => post.projectType === projectType)

    return result
}



