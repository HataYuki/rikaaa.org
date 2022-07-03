import {NextPage} from 'next'
import Style from 'styles/object/component/text-btn.module.sass'
import clsx from 'clsx'

interface Props {
    children: string,
    onClick: (e: any) => void
}

const textBtn: NextPage<Props> = ({children, onClick}: Props) => {
    return (
        <div className={Style.root}>
            <button
                className={Style.fHeadLine}
                onClick={onClick}
                >
                <span>
                    {children.toUpperCase()}
                </span>
                <img className={Style.arrow} src="/arrow.svg" alt={children}/>
            </button>
        </div>
    )
}

export default textBtn