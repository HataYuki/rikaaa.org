import {NextPage} from 'next'
import React from 'react'
import Style from 'styles/object/component/textBtn.module.sass'
import clsx from 'clsx'

interface Props {
    children: string
    align?: string | number
    showArrow?: boolean
    onClick: (e: any) => void
}

const textBtn: NextPage<Props> = ({children, onClick, align,showArrow}: Props) => {
    const textAlign = {
        justifyContent: (align) ? align : 'left'
    } as React.CSSProperties
    return (
        <div className={clsx(Style.root,{[Style.hideArrow]:showArrow === false})} style={textAlign}>
            <button
                className={clsx(Style.fHeadLine)}
                onClick={onClick}
            >
               <span>{children.toUpperCase()}</span>
                <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35.542px"
                     height="7.802px" viewBox="0 0 35.542 7.802">
                    <g id="コンポーネント_5_1" transform="translate(0 0.707)" fill={'currentColor'}>
                        <g>
                            <path id="パス_7_00000033364625720945162490000003460746138018078105_" className="st0"
                                  d="M0,6.389h34.835"/>
                            <rect y="5.889" className="st1" width="34.835" height="1"/>
                        </g>
                        <path className="st1" d="M34.835,6.889c-0.133,0-0.267-0.053-0.365-0.158L28.48,0.342c-0.188-0.201-0.178-0.518,0.023-0.707
		c0.201-0.188,0.517-0.18,0.707,0.023L35.2,6.047c0.188,0.201,0.178,0.518-0.023,0.707C35.08,6.844,34.958,6.889,34.835,6.889z"/>
                    </g>
                </svg>

            </button>
        </div>

    )
}

export default textBtn