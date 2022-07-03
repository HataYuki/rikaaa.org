import type {NextPage} from 'next'
import Style from 'styles/object/project/imageList.module.sass'
import FullImage from "../component/fullImage";
import Container from "../../layout/container";

interface Img {
    src: string
}

interface Images {
    images: Array<Img>
}

interface Props {
    children: Images
}

const ImageList: NextPage<Props> = ({children}: Props) => {
    return (
        <div className={Style.root}>
            {
                children.images.map((img, i) => {
                    return (
                        <div className={Style.imgCtn} key={i}>
                            <FullImage src={img.src}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageList