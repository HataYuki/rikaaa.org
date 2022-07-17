import {NextPage} from "next"
import {useState} from 'react'
import Style from "/styles/object/project/imageTextBtn.module.sass"
import Animation from 'styles/foundation/animation.module.sass'
import {InView} from 'react-intersection-observer'
import clsx from 'clsx'
import ImageBtn from "../component/imageBtn";

interface Props {
    src: string,
    title: string,
    subText: string,
    onClick: (e: any) => void
}

const ImageTextBtn: NextPage<Props> = ({src, title, subText, onClick}: Props) => {
    const [showImage, setShowImage] = useState(false)
    const [showText, setShowText] = useState(false)

    return (
        <button
            className={clsx(
                Style.root,
                Animation.fadeInUpAnimation,
                {[Animation.isAnimated]: showImage}
            )}
            onClick={onClick}
        >
            <InView
                className={Style.imgContainer}
                threshold={0.5}
                triggerOnce={true}
                onChange={(InView, entry) => setShowImage(entry.isIntersecting)}
            >
                <ImageBtn isBtn={false} src={src}/>
            </InView>
            <InView
                className={clsx(
                    Style.w100,
                    Animation.fadeInFromLeftAnimation,
                    {[Animation.isAnimated]: showText}
                )}
                threshold={0.5}
                triggerOnce={true}
                onChange={(InView, entry) => setShowText(entry.isIntersecting)}
            >
                <p className={clsx(Style.title, Style.fSubHeadLine)}>
                    {title.toUpperCase()}
                </p>
                <p className={clsx(Style.subText, Style.fDescription)}>
                    {subText.toUpperCase()}
                </p>
            </InView>

        </button>
    )
}

export default ImageTextBtn