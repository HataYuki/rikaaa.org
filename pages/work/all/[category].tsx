import {NextPage, GetStaticProps, GetStaticPaths} from 'next'
import {useRouter} from 'next/router'
import Root from "../../../parts/object/project/root";
import FlexLayout from "../../../parts/layout/flexLayout";
import Container from "../../../parts/layout/container";

import type {PostIndexList, PostList} from "@lib/posts";
import {getPostIndexList, getPostsByPType} from "@lib/posts";
import GoldenTile from "../../../parts/layout/goldenTile.";
import ImageBtn from "../../../parts/object/component/imageBtn";
import FlexStyle from 'styles/layout/flexLayout.module.sass'
import MediaHide from 'styles/foundation/hide.module.sass'

interface Props {
    posts: PostList
    postIndexList: PostIndexList
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
    const postIndexList = await getPostIndexList()
    return {
        props: {
            posts: posts,
            postIndexList: postIndexList
        }
    }
}


const Category: NextPage<Props> = ({posts, postIndexList}: Props) => {
    const router = useRouter()

    const goldenTileItems = posts.filter((post, i) => i < 3)
    const flexLayout = posts.filter((post, i) => i >= 3)

    return (
        <Root ha-sPadding={true} postList={postIndexList} showTitle={true} hasPadding={true}
              headerColor={'dark'}>
            <Container border={true} pb100={true}>
                <div className={MediaHide.mdHideLgShow}>
                    <GoldenTile>
                        {
                            goldenTileItems.map((post, i) => {
                                return (
                                    <ImageBtn isBtn={true} src={post.eyeCatch[0]} key={i}
                                              onClick={() => router.push(`/work/${post.slug}`)}>
                                        {{
                                            main: (post.headLine.en),
                                        }}
                                    </ImageBtn>
                                )
                            })
                        }
                    </GoldenTile>
                </div>

                <div className={MediaHide.mdHideLgShow}>
                    <FlexLayout layoutType={[FlexStyle.typeTile, FlexStyle.noGap, FlexStyle.golden]}>
                        {
                            flexLayout.map((post, i) => {
                                return (
                                    <ImageBtn isBtn={true} src={post.eyeCatch[0]} key={i}
                                              onClick={() => router.push(`/work/${post.slug}`)}>
                                        {{
                                            main: (post.headLine.en),
                                        }}
                                    </ImageBtn>
                                )
                            })
                        }
                    </FlexLayout>
                </div>

                <div className={MediaHide.mdShowLgHide}>
                    <FlexLayout layoutType={[FlexStyle.typeTile]}>
                        {
                            posts.map((post, i) => {
                                return (
                                    <ImageBtn isBtn={true} src={post.eyeCatch[0]} key={i}
                                              onClick={() => router.push(`/work/${post.slug}`)}>
                                        {{
                                            main: (post.headLine.en),
                                        }}
                                    </ImageBtn>
                                )
                            })
                        }
                    </FlexLayout>
                </div>
            </Container>
        </Root>
    )
}

export default Category