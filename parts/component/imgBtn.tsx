import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import clsx from 'clsx'
import Styles from '/styles/component/imgBtn.module.sass'

interface Props {
    className?: string
    target?: boolean
    href: string
    label: string
    src: string
    children: string
    onClick?: (e: any) => void
}

const ImgBtn = ({className, target, href, label, src, children, onClick}: Props) => {
    const [isEnter, setIsEnter] = useState(false)

    return (
        <Link href={href} passHref={target}>
            <a
                aria-label={label}
                target={(target) ? '_blank' : ''}
                className={clsx(className, Styles.relative, Styles.w100, Styles.btn, Styles.display_inlineBlock)}
                onClick={(e) => onClick && onClick(e)}
                onMouseEnter={() => setIsEnter(true)}
                onMouseLeave={() => setIsEnter(false)}
            >
                <div
                    className={clsx(Styles.absolute, Styles.top0, Styles.wh100, Styles.anim_hoverZoomIn, Styles.add_before)}>
                    <Image
                        src={src}
                        layout={'fill'}
                        objectFit={'cover'}
                    />
                </div>

                <p className={clsx(
                    Styles.absolute_autoCenter,
                    Styles.w100,
                    Styles.fontBold,
                    Styles.fontColor_white,
                    Styles.anim__transition_color,
                    {[Styles.fontColor_blue]: isEnter},
                    Styles.text
                )}>
                    {
                        children
                    }
                </p>

            </a>
        </Link>
    )
}

export default ImgBtn