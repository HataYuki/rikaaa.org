import {useState, useRef, useEffect} from 'react'
import VimeoBg from "./vimeoBg";
import Styles from '/styles/component/coverVimeo.module.sass'
import clsx from 'clsx'
import throttle from 'lodash/throttle'

interface Props {
    className?: string
}

const CoverVimeo = ({className}: Props) => {
    const container = useRef(null)
    const [vimeoSize, setVimeoSize] = useState<number[]>([0, 0])
    const [containerSize, setContainerSize] = useState<number[]>([0, 0])
    const ratio = Math.max(1, (containerSize[1] / vimeoSize[1])) || 1

    useEffect(() => {
        const ro = new ResizeObserver(throttle((entries) => {
            if (entries.length) {
                const {width, height} = entries[0].contentRect
                setContainerSize([width, height])
            }
        }, 100))

        container.current && ro.observe(container.current)

        return (): void => {
            container.current && ro.unobserve(container.current)
            ro.disconnect()
        }
    })


    return (
        <div ref={container} className={clsx(className, Styles.block)}>
            <div className={clsx(Styles.absolute_centerCenter, Styles.w100)}>
                <VimeoBg style={{transform: `scale(${ratio})`}}
                         onResize={({width, height}) => setVimeoSize([width, height])}/>
            </div>
        </div>
    )
}

export default CoverVimeo