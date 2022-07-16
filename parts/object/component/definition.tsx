import type {NextPage} from 'next'
import React, {useEffect, useState} from 'react'
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
    const [baseBgColor, setBaseBgColor] = useState('')
    const [dtColor, setDtColor] = useState('')

    useEffect(() => {
        const article = document.getElementsByTagName('article')[0]
        const body = document.body
        const targetPropName = 'background-color'
        const targetFsPropName = 'color'
        const articleProp = getComputedStyle(article)
        const bodyProp = getComputedStyle(body)
        const bodyBgcVal = bodyProp.getPropertyValue(targetPropName)
        const articleBgcVal = articleProp.getPropertyValue(targetPropName)
        const bodyFontColor = bodyProp.getPropertyValue(targetFsPropName)
        const articleFontColor = articleProp.getPropertyValue(targetFsPropName)

        if (bodyBgcVal !== 'rgba(0, 0, 0, 0)') {
            setBaseBgColor(bodyBgcVal)
        }
        if (articleBgcVal !== 'rgba(0, 0, 0, 0)') {
            setBaseBgColor(articleBgcVal)
        }
        if(bodyFontColor !== 'rgb(0, 0, 0)'){
            setDtColor(bodyFontColor)
        }
        if(articleFontColor !== 'rgb(0, 0, 0)'){
            setDtColor(articleFontColor)
        }
    })

    return (
        <ul className={Style.root}>
            {
                children.items.map((item, i) => {
                    return (
                        <li key={i}>
                            <dl>
                                <dt className={Style.fHeadLine} style={{backgroundColor: baseBgColor}}>
                                    <span className={Style.bar} style={{backgroundColor:dtColor}}></span>
                                    <span className={Style.text}>
                                        {
                                            item.filter((term, i) => i === 0)[0]
                                                .toString()
                                                .toUpperCase()
                                        }
                                    </span>
                                </dt>
                                <dd>
                                    {
                                        item.filter((term, i) => i >= 1).map((term, i) => {
                                            let str;
                                            if (validator.check(term, 'url')) {
                                                str = <p key={i}>
                                                    <a rel={'noreferrer'}
                                                       target={'_blank'}
                                                       href={term.toString()}
                                                    >
                                                        {term}
                                                    </a>
                                                    <GoLinkExternal/>
                                                </p>
                                            } else {
                                                str = <p key={i}>
                                                    <span>
                                                        {term}
                                                    </span>
                                                </p>
                                            }
                                            return str;
                                        })
                                    }
                                </dd>
                            </dl>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Definition
