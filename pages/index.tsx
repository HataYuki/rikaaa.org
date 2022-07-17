import type {NextPage, GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import MainVisual from '../parts/object/component/mainVisual'
import Vision from "../parts/object/project/vision"

import Work from "../parts/object/project/work"
import Skill from "../parts/object/project/skill"
import Root from "../parts/object/project/root"
import Container from "../parts/layout/container"
import Link from "../parts/object/component/link"
import Ad from "../parts/object/component/ad"
import {getPostIndexList} from '@lib/posts'
import type {PostIndexList} from "@lib/posts"
import ImageTextBtn from "../parts/object/project/imageTextBtn";

interface Props {
    postIndexList: PostIndexList
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const postIndexList = await getPostIndexList();
    return {
        props: {
            postIndexList
        }
    }
}

const Index: NextPage<Props> = ({postIndexList}: Props) => {
    const router = useRouter()
    const [headerColor, setHeaderColor] = useState('light')
    const projectList = postIndexList.filter(post => post.projectType === 'client').filter((post, i) => i < 7)
    const myProjectList = postIndexList.filter(post => post.projectType === 'self').filter((post, i) => i < 7)
    const style: { [key: string]: React.CSSProperties } = {
        mainVisualSection: {
            marginBottom: '100px'
        }
    }


    return (
        <Root postList={postIndexList} headerColor={headerColor} showTitle={false}>
            <section style={style.mainVisualSection}>
                <Container>
                    <MainVisual onIntersect={(isIntersect) => {
                        if (isIntersect) {
                            setHeaderColor(() => 'light')
                        } else {
                            setHeaderColor(() => 'dark')
                        }
                    }}/>
                </Container>
            </section>
            <section>
                <Container mb100={true} pb100={true} border={true}>
                    <Work title='project' btnSlug={'/work/all/project'}>
                        {
                            projectList.map((project, i) => {
                                return (
                                    <ImageTextBtn key={i}
                                                  src={project.eyeCatch[0]}
                                                  title={project.headLine.en}
                                                  subText={project.headLine.subTextEn}
                                                  onClick={() => router.push(`/work/${project.slug}`)}
                                    />
                                )
                            })
                        }
                    </Work>
                </Container>
            </section>

            <section>
                <Container mb100={true} pb100={true} border={false}>
                    <Work title='my project' btnSlug={'/work/all/my_project'}>
                        {
                            myProjectList.map((project, i) => {
                                return (
                                    <ImageTextBtn key={i}
                                                  src={project.eyeCatch[0]}
                                                  title={project.headLine.en}
                                                  subText={project.headLine.subTextEn}
                                                  onClick={() => router.push(`/work/${project.slug}`)}
                                    />
                                )
                            })
                        }
                    </Work>
                </Container>
            </section>


            <section>
                <Container mb100={true} bgColor={'#eaeaea'}>
                    <Vision/>
                </Container>
            </section>

            <section>
                <Container mb100={true}>
                    <Skill/>
                </Container>
            </section>

            <section>
                <Container bgColor={'#eaeaea'}>
                    <Link></Link>
                </Container>
                <Container pb100={true}>
                    <Ad></Ad>
                </Container>
            </section>
        </Root>
    )
}

export default Index
