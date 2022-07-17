import type {NextPage} from "next"
import {useState} from 'react'
import Style from "@styles/object/component/headline.module.sass"
import Animation from 'styles/foundation/animation.module.sass'
import {InView} from 'react-intersection-observer'
import clsx from "clsx"

interface Obj {
    en: string
    ja?: string

}

interface Props {
    children: Obj
    className?: string
    align?: string
}

const Headline: NextPage<Props> = ({children, align, className}: Props) => {
    const [show, setShow] = useState(false)

    return (
        <div
            className={clsx(
                Style.root,
                className,
                {[Style.alignCenter]: align === 'center'},
                {[Style.alignRight]: align === 'right'},
            )}
        >
            <InView
                className={clsx(
                    Animation.fadeInFromLeftAnimation,
                    {[Animation.isAnimated]: show}
                )}
                threshold={0.5}
                triggerOnce={true}
                onChange={(InView, entry) => setShow(entry.isIntersecting)}
            >
                <h2 className={Style.fHeadLine}>
                    {children.en.toUpperCase()}
                </h2>
                <span className={Style.fText}>
                    {children.ja}
            </span>
            </InView>
        </div>

    )
}

export default Headline