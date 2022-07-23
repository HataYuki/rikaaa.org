import type React from 'react'
import Styles from '/styles/component/headline.module.sass'
import clsx from 'clsx'
import LineText from "./lineText"

interface Children {
    en: string
    ja?: string
}

interface Props {
    className?: string
    barStyle?: string
    level: number,
    children: Children
}

const Headline = ({level, className,barStyle, children}: Props) => {
    const createJaText = () => {
        if (children.ja) {
            return (
                <span className={clsx(Styles.block, Styles.fontLight, Styles.jaText)}>
                {
                    children.ja
                }
            </span>
            )
        }
    }

    const createHeadline = (child: React.ReactNode) => {
        if (level === 1) return (<h1 className={clsx(className, Styles.text_center)}>
            <>
                {
                    child
                }
                {
                    createJaText()
                }
            </>
        </h1>)
        if (level === 2) return (<h2 className={clsx(className, Styles.text_center)}>
            <>
                {
                    child
                }
                {
                    createJaText()
                }
            </>
        </h2>)
        if (level === 3) return (<h3 className={clsx(className, Styles.text_center)}>
            <>
                {
                    child
                }
                {
                    createJaText()
                }
            </>
        </h3>)
        if (level === 4) return (<h4 className={clsx(className, Styles.text_center)}>
            <>
                {
                    child
                }
                {
                    createJaText()
                }
            </>
        </h4>)
        if (level === 5) return (<h5 className={clsx(className, Styles.text_center)}>
            <>
                {
                    child
                }
                {
                    createJaText()
                }
            </>
        </h5>)
        if (level === 6) return (<h6 className={clsx(className, Styles.text_center)}>
            <>
                {
                    child
                }
                {
                    createJaText()
                }
            </>
        </h6>)
    }


    const createText = () => {
        return (
            <LineText
                fontStyle={Styles.fontBold}
                barStyle={clsx(
                    {[Styles.bgColor_black]:!(barStyle)},
                    barStyle
                )}
                align={'center'}
            >
                {
                    children.en.toUpperCase()
                }
            </LineText>
        )
    }

    return (
        <>
            {
                createHeadline(createText())
            }
        </>
    )
}

export default Headline