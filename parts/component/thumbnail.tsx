import Link from "next/link"
import {useState} from 'react'
import RoundImage from "./roundImage"
import Styles from '/styles/component/thumbnail.module.sass'
import clsx from 'clsx'

interface Children {
    src: string
    title: string
    subText?: string
}

interface Props {
    href: string
    label: string
    children: Children,
    className?: string
    onClick?: (e: any) => void
}


const Thumbnail = ({className, href, label, children, onClick}: Props) => {
    const [isHover, setHover] = useState(false)

    const handleOver = () => setHover(true)
    const handleLeave = () => setHover(false)

    return (
        <Link href={href} scroll={false}>
            <a
                aria-label={label}
                className={clsx(
                    className,
                    Styles.display_block,
                    Styles.w100
                )}
                onMouseOver={handleOver}
                onMouseLeave={handleLeave}
                onClick={(e: any) => (onClick) ? onClick(e) : null}
            >
            <span
                className={clsx(Styles.heading, Styles.display_block, Styles.mb28, Styles.anim__transition_transform, {[Styles.anim__zoomIn]: isHover})}>
                <RoundImage className={clsx(Styles.image)} radius={6} src={children.src}></RoundImage>
            </span>
                <span className={clsx(Styles.transition_color)}>
                <h3 className={clsx(Styles.title, Styles.fontBold, Styles.display_block, {[Styles.fontColor_blue]: isHover})}>
                    {
                        children.title.toUpperCase()
                    }
                </h3>
                <span className={clsx(Styles.text, Styles.fontLight, Styles.display_block)}>
                    {
                        children.subText?.toUpperCase()
                    }
                </span>
            </span>
            </a>
        </Link>

    )
}

export default Thumbnail