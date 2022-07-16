import {NextPage} from "next"
import Style from "/styles/object/project/imageTextBtn.module.sass"
import clsx from 'clsx'
import ImageBtn from "../component/imageBtn";

interface Props {
    src: string,
    title: string,
    subText: string,
    onClick: (e: any) => void
}

const ImageTextBtn: NextPage<Props> = ({src, title, subText, onClick}: Props) => {
    return (
        <button className={Style.root} onClick={onClick}>
            <div className={Style.imgContainer}>
                <ImageBtn isBtn={false} src={src}/>
            </div>
            <p className={clsx(Style.title, Style.fSubHeadLine)}>
                {title.toUpperCase()}
            </p>
            <p className={clsx(Style.subText, Style.fDescription)}>
                {subText.toUpperCase()}
            </p>
        </button>
    )
}

export default ImageTextBtn