import type {NextPage} from "next"
import React from 'react'
import Style from 'styles/layout/goldenTile.module.sass'

interface Props {
    children: Array<React.ReactNode>
}

const GoldenTile: NextPage<Props> = ({children}: Props) => {
    return (
        <div className={Style.root}>
            <div className={Style.item}>
                <div className={Style.firstContainer}>
                    {children[0]}
                </div>
            </div>
            <div className={Style.item}>
                {children[1]}
            </div>
            <div className={Style.item}>
                {children[2]}
            </div>
        </div>
    )
}

export default GoldenTile