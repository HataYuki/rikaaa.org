import React from 'react'
import clsx from 'clsx'
import useBreakpoint from 'use-breakpoint';
import Styles from '/styles/layout/column.module.sass'
import variables from '/styles/variables.module.sass'

interface Children {
    left: React.ReactNode
    right: React.ReactNode
}

interface Props {
    className?: string
    reverse?: boolean
    columnReverse?: boolean
    extendRightH?: boolean
    extendLeftH?: boolean
    children: Children
}

const BREAKPOINTS: any = {}

for (const [key, value] of Object.entries(variables)) {
    BREAKPOINTS[key] = Number(value)
}

const Column = ({className, reverse, columnReverse, extendRightH, extendLeftH, children}: Props) => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'win_small')

    return (
        <div className={clsx(
            className,
            Styles.block,
            {[Styles.flex_gRow2]: minWidth >= BREAKPOINTS.win_small},
            {[Styles.reverse]: reverse},
            {[Styles.columnReverse]: columnReverse && !(minWidth >= BREAKPOINTS.win_small)}
        )}>
            <div className={clsx(
                Styles.left,
                {[Styles.reverse]: reverse},
                Styles.relative,
                Styles.text_center,
                {[Styles.w100]: !(minWidth >= BREAKPOINTS.win_small)},
                {[Styles.h100]: extendLeftH},
            )}>
                {
                    children.left
                }
            </div>
            <div className={clsx(
                Styles.right,
                {[Styles.reverse]: reverse},
                Styles.relative,
                Styles.text_center,
                {[Styles.w100]: !(minWidth >= BREAKPOINTS.win_small)},
                {[Styles.h100]: extendRightH},
            )}>
                {
                    children.right
                }
            </div>
        </div>

    )
}

export default Column