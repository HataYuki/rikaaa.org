import {useRef, useEffect, useState} from 'react'
import Styles from '/styles/component/lineText.module.sass'
import clsx from 'clsx'
import debounce from 'lodash/debounce'

interface Props {
    className?: string
    barStyle?: string
    fontStyle?: string
    align?: string
    children: string
    margin?: number
}

const LineText = ({className, fontStyle, barStyle, align, margin, children}: Props) => {
    const parent = useRef(null)
    const child = useRef(null)
    const mgn = (margin) ? margin : 17

    const [parentW, setParentW] = useState(0)
    const [parentX, setParentX] = useState(0)
    const [childW, setChildW] = useState(0)
    const [childX, setChildX] = useState(0)
    const getLeftBarW = () => Math.max((childX - parentX) - mgn, 0)
    const getRightBarW = () => Math.max((parentX + parentW) - (childX + childW) - mgn, 0)

    useEffect(() => {
        const ro = new ResizeObserver(debounce((entries) => {
            if (entries.length) {
                setParentW(entries[0].contentRect.width)
                setParentX((parent.current as any).getBoundingClientRect().x)
            }
            if (child.current) {
                const rect = (child.current as any).getBoundingClientRect()
                setChildW(rect.width)
                setChildX(rect.x)
            }

        }, 10))

        parent.current && ro.observe(parent.current)

        return (): void => {
            parent.current && ro.unobserve(parent.current)
            ro.disconnect()
        }
    })

    return (
        <span ref={parent}
              className={clsx(
                  className,
                  Styles.relative,
                  Styles.block,
                  {[Styles.text_left]: (align === 'left')},
                  {[Styles.text_center]: (align === 'center')},
                  {[Styles.text_right]: (align === 'right')},
              )}>
                 <span ref={child} className={clsx(Styles.inline, fontStyle)}>
                    <span
                        style={{width: `${getLeftBarW()}px`}}
                        className={clsx(Styles.absolute_autoCenter, barStyle, Styles.leftBar)}
                    >
                    </span>
                     {
                         children.toUpperCase()
                     }
                     <span
                         style={{width: `${getRightBarW()}px`}}
                         className={clsx(Styles.absolute_autoCenter, barStyle, Styles.rightBar)}
                     >
                     </span>
                </span>
            </span>


    )
}

export default LineText