import type {NextPage, GetServerSideProps} from 'next'
import Root from "../../../parts/object/project/root";
import PageHeadLine from "../../../parts/object/component/pageHeadLine";
import Project from "../../../parts/object/project/project";
import type {Post} from "@lib/posts";
import {getAPostBySlug} from "@lib/posts";

interface Props {
    post: Post
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const projectName = (context.params && context.params.aProject) ? context.params.aProject : '';
    const post = await getAPostBySlug(projectName)
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
                imageUrl={post.images[0].url}
                overlay={true}
            />
            <Project post={post}/>
        </Root>
    )
}


export default Index