import type {NextPage} from 'next'
import {useState} from 'react'
import Style from 'styles/object/component/imageBtn.module.sass'
import Animation from 'styles/foundation/animation.module.sass'
import {InView} from 'react-intersection-observer'
import ZoomImage from "@styles/object/component/zoomImage";
import clsx from 'clsx'

interface Text {
    main: string
}

interface Props {
    isBtn: boolean
    src: string
    children?: Text
    onClick?: (e: any) => void
}

const ImageBtn: NextPage<Props> = ({isBtn, src, children, onClick}: Props) => {
    const [intersect, setIntersect] = useState(false)

    const maskStyle = () => {
        if (isBtn) {
            return [Style.mask, Style.wh100, Style.gradient]
        } else {
            return [Style.mask, Style.wh100]
        }
    }

    const mainText = () => {
        if (children) {
            return (
                <div className={clsx(Style.textBlock)}>
                    <p className={Style.fSubHeadLine}>
                        {children.main.toUpperCase()}
                    </p>
                </div>
            )
        }
    }

    const content = <>
        <div className={Style.wh100}>
            <ZoomImage src={src}/>
            <span className={clsx(maskStyle())}></span>
        </div>
        {
            mainText()
        }
    </>


    const btn = () => {
        if (isBtn) {
            return (
                <button
                    className={Style.root}
                    onClick={(e) => {
                        if (onClick) {
                            onClick(e)
                        }
                    }}>
                    {content}
                </button>
            )
        } else {
            return (
                <div className={clsx(Style.wh100)}>
                    {content}
                </div>
            )
        }
    }

    return btn()
}

export default ImageBtn