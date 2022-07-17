import type {NextPage} from 'next'
import {useState} from 'react'
import Container from "../../layout/container";
import Style from 'styles/object/project/project.module.sass'
import Animation from 'styles/foundation/animation.module.sass'
import {useInView} from 'react-intersection-observer'
import Definition from "../component/definition";
import MediaList from "./mediaList";
import DevelopEv from "./developEv";
import type {Post} from "@lib/posts";
import clsx from 'clsx'


interface Props {
    post: Post
}

const Project: NextPage<Props> = ({post}: Props) => {
    const [showHeadLine, setShowHeadLine] = useState(false)

    const developEv = () => {
        if (post.environment.length) {
            return (
                <section>
                    <Container pb100={true}>
                        <DevelopEv>
                            {{
                                toolList: (
                                    post.environment
                                )
                            }}
                        </DevelopEv>
                    </Container>
                </section>
            )
        }
    }

    const {ref, inView, entry} = useInView({
        triggerOnce: true,
        threshold:0.1,
        onChange: (InView, entry) => setShowHeadLine(entry.isIntersecting)
    })

    return (
        <>
            <section
                ref={ref}
                className={clsx(
                    Style.headLine,
                    Animation.fadeInUpAnimation,
                    {[Animation.isAnimated]: showHeadLine}
                )}
            >
                <Container pb100={true}>
                    <div className={Style.text}>
                        <h3 className={Style.fHeadLine}>
                            {post.description.copy}
                        </h3>
                        <div className={Style.description}>
                            {
                                post
                                    .description
                                    .article
                                    .split('\n').map((paragraph, i) => {
                                    return (
                                        <p key={i}>
                                            {paragraph}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container pb100={true}>
                    <MediaList>
                        {{
                            media: (
                                post.media.map(media => {
                                    return {
                                        image: media.image,
                                        video: media.video
                                    }
                                })
                            )
                        }}
                    </MediaList>
                </Container>
            </section>

            {developEv()}

            <section className={Style.info}>
                <Container pb100={true}>
                    <Definition>
                        {{
                            items: (
                                post.overview.map(item => {
                                    return [
                                        item.term,
                                        ...item.description
                                    ]
                                })
                            )
                        }}
                    </Definition>
                </Container>
            </section>
        </>

    )
}

export default Project