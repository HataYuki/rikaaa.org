import type {NextPage, GetStaticProps, GetStaticPaths} from 'next'
import Root from "../../../parts/object/project/root";
import PageHeadLine from "../../../parts/object/component/pageHeadLine";
import Project from "../../../parts/object/project/project";
import type {Post, PostIndexList} from "@lib/posts";
import {getPost, getPostIdSlugList, getPostIndexList} from "@lib/posts";
import Container from "../../../parts/layout/container";
import PageHeader from "../../../parts/object/component/pageHeader";

interface Props {
    post: Post
    posIndexList: PostIndexList
}

export const getStaticPaths: GetStaticPaths = async () => {
    const idSlugList = await getPostIdSlugList()
    const slugList = idSlugList.map(idSlug => `/work/${idSlug.slug}`)
    return {
        paths: slugList,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = (context.params && context.params.slug) ? context.params.slug : '';
    const idSlugList = await getPostIdSlugList()
    const postIndexList = await getPostIndexList()
    const aIdSlug = idSlugList.filter(idSlug => idSlug.slug === slug)
    let id: string = ''
    if (aIdSlug.length) {
        id = aIdSlug[0].id
    }

    const post = await getPost(id)
    return {
        props: {
            post: post,
            posIndexList: postIndexList
        }
    }
}

const Index: NextPage<Props> = ({post, posIndexList}: Props) => {
    return (
        <Root postList={posIndexList} headerColor={'light'} articleDark={true} showTitle={true}>
            <section>
                <PageHeader
                    onIntersect={() => {
                    }}
                    srcList={post.eyeCatch}
                >
                    {{
                        en: (post.headLine.en),
                        ja: (post.headLine.ja)
                    }}
                </PageHeader>
            </section>
            <Project post={post}/>
        </Root>
    )
}


export default Index