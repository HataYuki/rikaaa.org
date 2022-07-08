import type {NextPage} from 'next'
import Container from "../../layout/container";
import Style from 'styles/object/project/project.module.sass'
import Definition from "../component/definition";
import MediaList from "./mediaList";
import DevelopEv from "./developEv";
import type {Post} from "@lib/posts";

interface Props {
    post: Post
}

const Project: NextPage<Props> = ({post}: Props) => {
    return (
        <>
            <section className={Style.headLine}>
                <Container pb100={true}>
                    <div>
                        <h3 className={Style.fHeadLine}>
                            {post.description.copy}
                        </h3>
                        <p>
                            {post.description.article}
                        </p>
                    </div>
                </Container>
            </section>
            <section>
                <Container pb100={true}>
                    <MediaList>
                        {{
                            media: (
                                post.media.map(media=>{
                                    return{
                                        image:media.image,
                                        video:media.video
                                    }
                                })
                            )
                        }}
                    </MediaList>
                </Container>
            </section>
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