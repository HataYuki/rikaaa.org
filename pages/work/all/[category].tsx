import {NextPage, GetStaticProps, GetStaticPaths} from 'next'
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

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: ['/work/all/project', '/work/all/my_project'],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const category = (context.params && context.params.category) ? context.params.category : ''
    let type: string = '';
    if (category === 'project') {
        type = 'client'
    }
    if (category === 'my_project') {
        type = 'self'
    }
    const posts = await getPostsByPType(type)
    return {
        props: {
            posts
        }
    }
}


const Category: NextPage<Props> = ({posts}: Props) => {
    const router = useRouter()
    const category = router.query.category ? router.query.category.toString() : '';

    return (
        <Root showTitle={true} headerColor={'dark'} hasPadding={true}>
            <PageHeadLine title={category} imageUrl={'/dammy.jpeg'}/>
            <Container border={true} pb100={true}>
                <FlexBlock>
                    {
                        posts.map((post, i) => {
                            return (
                                <ImageTextBtn key={i}
                                              src={post.eyeCatch[0] || post.media[0].image}
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