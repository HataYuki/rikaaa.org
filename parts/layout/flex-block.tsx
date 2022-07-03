import {NextPage} from "next"
import Style from "/styles/object/component/flex-block.module.sass"
import React from "react"
import Container from "./container";

interface Props {
    children: Array<React.ReactNode>,
}

const FlexBlock: NextPage<Props> = ({children}: Props) => {
    return (
        <div className={Style.root}>
            <ul>
                {
                    children.map((child,i) => {
                        return (
                            <li key={i}>
                                {child}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default FlexBlock;