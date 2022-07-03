import {NextPage, GetServerSideProps} from 'next'
import {useRouter} from 'next/router'
import Root from "../../../parts/object/project/root";
import PageHeadLine from "../../../parts/object/component/pageHeadLine";
import ImageTextBtn from "../../../parts/object/project/image-text-btn";
import FlexBlock from "../../../parts/layout/flex-block";
import Container from "../../../parts/layout/container";

import type {PostList} from "@lib/posts";
import {getPostsByPType} from "@lib/posts";

interface Props {
    posts: PostList
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const category = (context.params && context.params.category) ? context.params.category : ''
    let type = '';
    if (category === 'project') {
        type = 'client'
    }
    if (category === 'my_project') {
        type = 'self'
    }
    const posts = await getPostsByPType(type)
    return {
        props:{
            posts
        }
    }
}


const Category: NextPage<Props> = ({posts}: Props) => {
    const router = useRouter()
    const category = router.query.category ? router.query.category.toString() : '';

    return (
        <Root showTitle={true} headerColor={'dark'} hasPadding={true}>
            <PageHeadLine title={category} imageUrl={posts[0].images[0].url}/>
            <Container border={true} pb100={true}>
                <FlexBlock>
                    {
                        posts.map((post,i)=>{
                            return(
                                <ImageTextBtn key={i}
                                    src={post.images[0].url}
                                    title={post.headLine.en}
                                    subText={post.headLine.subTextEn}
                                    onClick={() => router.push(`/work/${post.slug}`)}
                                />
                            )
                        })
                    }
                </FlexBlock>
            </Container>
        </Root>
    )
}

export default Category