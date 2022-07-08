import type {NextPage} from 'next'
import Style from 'styles/object/project/mediaList.module.sass'
import FullImage from "../component/fullImage";
import FullVideo from "../component/fullVideo";

interface Src {
    image: string
    video: Array<string>
}

interface Medias {
    media: Array<Src>
}

interface Props {
    children: Medias
}

const MediaList: NextPage<Props> = ({children}: Props) => {
    return (
        <div className={Style.root}>
            {
                children.media.map((media, i) => {
                    return (
                        <div className={Style.imgCtn} key={i}>
                            {media.image
                                ? <FullImage src={media.image}></FullImage>
                                : <FullVideo srcList={media.video}></FullVideo>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MediaList