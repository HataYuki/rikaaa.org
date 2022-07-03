import type {NextPage} from 'next'
import React from 'react'
import Style from 'styles/object/component/definition.module.sass'
import SimpleReactValidator from 'simple-react-validator'
import {GoLinkExternal} from 'react-icons/go'

interface Items {
    items: Array<Array<string | number>>
}

interface Props {
    children: Items
}

const Definition: NextPage<Props> = ({children}: Props) => {
    const validator = new SimpleReactValidator();

    return (
        <dl className={Style.root}>
            {
                children.items.map((item, i) => {
                    return (
                        <React.Fragment key={i}>
                            <dt className={Style.fHeadLine}>
                                {
                                    item.filter((term,i) => i === 0)[0]
                                        .toString()
                                        .toUpperCase()
                                }
                            </dt>
                            <dd>
                                {
                                    item.filter((term,i)=> i >= 1).map((term,i)=>{
                                        let str;
                                        if(validator.check(term,'url')){
                                            str = <span key={i}>
                                                    <a rel={'noreferrer'}
                                                       target={'_blank'}
                                                       href={term.toString()}
                                                    >
                                                        {term}
                                                    </a>
                                                    <GoLinkExternal />
                                                </span>
                                        }else{
                                            str = <span key={i}>
                                                    {term}
                                                </span>
                                        }
                                        return str;
                                    })
                                }
                            </dd>
                        </React.Fragment>
                    )
                })
            }
        </dl>
    )
}

export default Definition
