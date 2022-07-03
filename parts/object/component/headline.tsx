import {NextPage} from "next"
import clsx from "clsx"
import Style from "@styles/object/component/headline.module.sass"
import Container from "../../layout/container";

interface Obj {
    en: string
    ja?: string
}

interface Props {
    children: Obj
}

const headline: NextPage<Props> = ({children}: Props) => {
    return (
        <div className={Style.root}>
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