import type {NextPage} from "next"
import React from "react"
import Style from "styles/layout/container.module.sass"
import {InView} from 'react-intersection-observer'
import clsx from "clsx"

interface Props {
    children: React.ReactNode,
    mb70?: boolean
    pd70?: boolean
    mb100?: boolean
    pb100?: boolean
    border?: boolean
    bgColor?: string
    onIntersect?: (e: any) => void
}

const Container: NextPage<Props> = ({
                                        children,
                                        mb70,
                                        pd70,
                                        mb100,
                                        pb100,
                                        border,
                                        bgColor,
                                        onIntersect
                                    }: Props) => {
    return (
        <InView onChange={(inView, entry) => {
            const {isIntersecting} = entry
            if (onIntersect) {
                onIntersect(isIntersecting)
            }
        }}>
            <div
                className={
                    clsx(
                        Style.root,
                        {[Style.mb70]: mb70},
                        {[Style.pd70]: pd70},
                        {[Style.mb100]: mb100},
                        {[Style.pd100]: pb100},
                    )}
                style={{backgroundColor: bgColor}}
            >
                {children}
                <span className={
                    clsx(
                        {[Style.border]: border}
                    )
                }></span>
            </div>
        </InView>
    )
}

export default Container