import type {NextPage} from 'next'
import Style from 'styles/object/component/imageBtn.module.sass'
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
        {mainText()}
    </>

    const btn = () => {
        if (isBtn) {
            return (
                <button className={Style.root} onClick={(e) => {
                    if (onClick) {
                        onClick(e)
                    }
                }}>
                    {content}
                </button>
            )
        } else {
            return (
                <div className={Style.root}>
                    {content}
                </div>
            )
        }
    }

    return btn()
}

export default ImageBtn