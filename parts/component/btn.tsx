import type {NextPage} from 'next'
import Link from 'next/link'
import Styles from '/styles/component/btn.module.sass'
import clsx from 'clsx'
import {useIsDark} from "../../lib/useIsDark";

interface Props {
    className?: string
    href: string
    label: string
    children: string
}

const Btn: NextPage<Props> = ({className, href, label, children}: Props) => {
    const isDark = useIsDark()

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
                    Styles.w100,
                    Styles.link,
                    {[Styles.anim_hoverTurnBgBlack]:!isDark},
                    {[Styles.anim_hoverTurnBgWhite]:isDark},
                    Styles.pointerEventsNone,
                    {[Styles.dark]:isDark},
                    {[Styles.light]:!isDark},
                    {[Styles.bgColor_white]:!isDark},
                    {[Styles.bgColor_black]:isDark},
                    {[Styles.fontColor_black]:!isDark},
                    {[Styles.fontColor_white]:isDark},
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