import type {NextPage} from 'next'
import React from 'react'
import Headline from "../component/headline";
import Style from 'styles/object/project/developEv.module.sass'

interface ToolList {
    toolList: Array<string>
}

interface Props {
    children: ToolList
}

const DevelopEv: NextPage<Props> = ({children}: Props) => {
    return (
        <React.Fragment>
            <Headline>
                {{
                    en: ('Development environment'),
                    ja: ('開発環境')
                }}
            </Headline>
            <ul className={Style.root}>
                {
                    children.toolList.map((tool,i)=>{
                        return(
                            <li key={i}>
                                <span>
                                    {tool}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default DevelopEv