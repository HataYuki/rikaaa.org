import {InView} from 'react-intersection-observer'
import {useState} from "react";
import type React from "react";
import Styles from '/styles/component/fadeIn.module.sass'
import clsx from 'clsx'

interface Props {
    type: string
    children: React.ReactNode,
    className?: string
}

const FadeIn = ({type, className, children}: Props) => {
    const [intersect, setIntersect] = useState(false)

    return (
        <div className={clsx(className)}>
            <InView
                className={clsx(
                    Styles.wh100,
                    {[Styles.anim_fadeInLeft]: type === 'left'},
                    {[Styles.anim_fade]: type === 'fade'},
                    {[Styles.anim_fadeInUp]: type === 'fadeUp'},
                    {[Styles.isAnimated]: intersect}
                )}
                triggerOnce={true}
                onChange={inView => setIntersect(inView)}
            >
                {
                    children
                }
            </InView>
        </div>

    )
}

export default FadeIn