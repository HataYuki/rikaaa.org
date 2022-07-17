import type {NextPage} from 'next'
import {useState} from 'react'
import Animation from "@styles/foundation/animation.module.sass"
import Style from "@styles/object/component/imageTextCard.module.sass"
import {InView} from 'react-intersection-observer'
import clsx from 'clsx'
import Image from 'next/image'

interface Content {
    imgUrl: string
    title: string
    text: Array<string>
}

interface Props {
    className?: string
    children: Content
}

const ImageTextCard: NextPage<Props> = ({children, className}: Props) => {
    const [showImage, setShowImage] = useState(false)
    const [showText, setShowText] = useState(false)


    return (
        <div
            className={clsx(
                Style.root,
                className
            )}
        >
            <dl className={Style.content}>
                <InView
                    className={clsx(
                        Style.imageBlock,
                        Animation.fadeInUpAnimation,
                        {[Animation.isAnimated]: showImage}
                    )}
                    threshold={0.5}
                    triggerOnce={true}
                    onChange={(InView, entry) => setShowImage(entry.isIntersecting)}
                >
                    <Image src={children.imgUrl} layout="fill" objectFit="cover"></Image>
                </InView>
                <dd className={Style.textBlock}>
                    <InView
                        className={clsx(
                            Animation.fadeInFromLeftAnimation,
                            {[Animation.isAnimated]: showText}
                        )}
                        threshold={0.5}
                        triggerOnce={true}
                        onChange={(InView, entry) => setShowText(entry.isIntersecting)}
                    >
                        <h3
                            className={clsx(
                                Style.fSubHeadLine,
                                Style.title
                            )}
                        >
                            {children.title}
                        </h3>
                        <div className={Style.fText}>
                            {
                                children.text.map((p, i) => {
                                    return (
                                        <p className={Style.text} key={i}>
                                            {p}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </InView>
                </dd>
            </dl>
        </div>
    )
}

export default ImageTextCard