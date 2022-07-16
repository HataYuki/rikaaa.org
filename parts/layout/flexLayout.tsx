import {NextPage} from "next"
import Style from "/styles/layout/flexLayout.module.sass"
import React from "react"
import clsx from 'clsx'

interface Props {
    children: Array<React.ReactNode>,
    layoutType?: Array<string>
}

const FlexLayout: NextPage<Props> = ({children, layoutType}: Props) => {
    const rootStyle = () => {
        if (layoutType) {
            return [Style.root, ...layoutType]
        } else {
            return [Style.root]
        }
    }
    return (
        <div className={clsx(...rootStyle())}>
            {
                children.map((child, i) => {
                    return (
                        <div className={Style.item} key={i}>
                            <div className={Style.itemInner}>
                                {child}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FlexLayout;