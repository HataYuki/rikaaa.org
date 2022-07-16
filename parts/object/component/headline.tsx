import {NextPage} from "next"
import Style from "@styles/object/component/headline.module.sass"
import clsx from "clsx"

interface Obj {
    en: string
    ja?: string

}

interface Props {
    children: Obj
    className?: string
    align?: string
}

const headline: NextPage<Props> = ({children, align, className}: Props) => {
    return (
        <div className={clsx(
            Style.root,
            className,
            {[Style.alignCenter]: align === 'center'},
            {[Style.alignRight]: align === 'right'},
        )}>
            <h2 className={Style.fHeadLine}>
                {children.en.toUpperCase()}
            </h2>
            <span className={Style.fText}>
                    {children.ja}
            </span>
        </div>
    )
}

export default headline