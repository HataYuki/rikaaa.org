import type {NextPage} from 'next'
import Link from 'next/link'
import Styles from '/styles/component/btn.module.sass'
import clsx from 'clsx'

interface Props {
    className?: string
    href: string
    label: string
    children: string
}

const Btn: NextPage<Props> = ({className, href, label, children}: Props) => {
    return (
        <Link href={href} scroll={false}>
            <a
                href={''}
                aria-label={label}
                className={clsx(
                    className,
                    Styles.display_inlineBlock
                )}>
                <span className={clsx(
                    Styles.link,
                    Styles.bgColor_white,
                    Styles.anim_HoverTurnBgBlack,
                    Styles.pointerEventsNone,
                    Styles.w100,
                    Styles.fontColor_black
                )}>
                    <span
                        className={clsx(
                            Styles.anim_HoverZoom,
                            Styles.wh100,
                            Styles.wrapper)}
                    >
                        <span
                            className={clsx(
                                Styles.text,
                                Styles.fontMedium,
                                Styles.absolute_centerCenter,
                                Styles.w100)}
                            >
                            {
                                children.toUpperCase()
                            }
                        </span>
                    </span>
                </span>
            </a>
        </Link>
    )
}

export default Btn