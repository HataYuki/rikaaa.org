import {NextPage} from "next"
import Styles from "/styles/object/project/image-text-btn.module.sass"
import FsStyle from "/styles/foundation/font.module.sass"
import ImageBtn from "../component/image-btn"

interface Props {
    src: string,
    title: string,
    subText: string,
    onClick?: (e: any) => void
}

const ImageTextBtn: NextPage<Props> = ({src, title, subText, onClick}: Props) => {
    return (
        <div className={Styles.root}>
            <div className={Styles.imgBtn}>
                <ImageBtn src={src} onClick={onClick}/>
            </div>
            <p className={FsStyle.fSubHeadLine}>{title.toUpperCase()}</p>
            <span className={FsStyle.fDescription}>{subText.toUpperCase()}</span>
        </div>
    )
}

export default ImageTextBtn