import type {NextPage, GetStaticProps, GetStaticPaths} from 'next'
import Root from "../../../parts/object/project/root";
import PageHeadLine from "../../../parts/object/component/pageHeadLine";
import Project from "../../../parts/object/project/project";
import type {Post} from "@lib/posts";
import {getPost, getPostIdSlugList} from "@lib/posts";

interface Props {
    post: Post
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
    const aIdSlug = idSlugList.filter(idSlug => idSlug.slug === slug)
    let id: string = ''
    if (aIdSlug.length) {
        id = aIdSlug[0].id
    }

    const post = await getPost(id)
    return {
        props: {
            post
        }
    }
}

const Index: NextPage<Props> = ({post}: Props) => {
    return (
        <Root headerColor={'light'} articleDark={true} showTitle={true}>
            <PageHeadLine
                title={post.headLine.en}
                subTitle={post.headLine.ja}
                imageUrl={post.eyeCatch[0]}
                overlay={true}
            />
            <Project post={post}/>
        </Root>
    )
}


export default Index