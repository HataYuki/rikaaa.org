import type {NextPage,GetServerSideProps} from 'next'
import {useRouter} from 'next/router'
import {useState} from 'react'
import MainVisual from '../parts/object/component/main-visual'
import ImageTextBtn from '../parts/object/project/image-text-btn'
import Vision from "../parts/object/project/vision";

import Work from "../parts/object/project/work";
import Skill from "../parts/object/project/skill";
import Root from "../parts/object/project/root";
import Container from "../parts/layout/container";
import Link from "../parts/object/component/link";
import Ad from "../parts/object/component/ad";
import {getPosts} from '@lib/posts'
import type {PostList} from "@lib/posts";
import project from "../parts/object/project/project";

interface Props {
    posts: PostList
}

export const getServerSideProps:GetServerSideProps = async () => {
    const posts = await getPosts();
    return {
        props: {
            posts
        }
    }
}

const Index: NextPage<Props> = ({posts}: Props) => {
    const router = useRouter()
    const [headerColor, setHeaderColor] = useState('light')
    const [showTitle, setShowTitle] = useState(false)
    const projectList = posts.filter(post=>post.projectType === 'client')
    const myProjectList = posts.filter(posts => posts.projectType === 'self')

    console.log(posts)

    return (
        <Root headerColor={headerColor} showTitle={showTitle}>
            <MainVisual onIntersect={(isIntersect) => {
                if (isIntersect) {
                    setHeaderColor(() => 'light')
                    setShowTitle(false)
                } else {
                    setHeaderColor(() => 'dark')
                    setShowTitle(true)
                }
            }}/>
            <section>
                <Container mb100={true} pb100={true} border={true}>
                    <Work title='project' btnSlug={'/work/all/project'}>
                        {
                            projectList.map((project,i)=>{
                                return(
                                    <ImageTextBtn key={i}
                                        src={project.eyeCatch[0] ||project.media[0].image}
                                        title={project.headLine.en}
                                        subText={project.headLine.subTextEn}
                                        onClick={()=>router.push(`/work/${project.slug}`)}
                                    />
                                )
                            })
                        }
                    </Work>
                </Container>
            </section>

            <section>
                <Container mb100={true} pb100={true} border={true}>
                    <Work title='my project' btnSlug={'/work/all/my_project'}>
                        {
                            myProjectList.map((project,i)=>{
                                return(
                                    <ImageTextBtn key={i}
                                        src={project.eyeCatch[0] || project.media[0].image}
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
                <Container border={true} pb100={true}>
                    <Ad></Ad>
                </Container>
            </section>
        </Root>
    )
}

export default Index
