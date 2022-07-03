import {NextPage} from "next"
import {useRouter} from 'next/router'
import React from "react"
import Style from "styles/object/project/work.module.sass"
import HeadLine from "../component/headline"
import FlexBlock from "../../layout/flex-block"
import TextBtn from "../component/text-btn"
import Container from "../../layout/container"

interface Props {
    title: string,
    children: Array<React.ReactNode>
    btnSlug: string
}

const Work: NextPage<Props> = ({title, children, btnSlug}: Props) => {
    const router = useRouter();

    return (
        <React.Fragment>
            <HeadLine>
                {{
                    en:(title)
                }}
            </HeadLine>
            <div className={Style.flexCtn}>
                <FlexBlock>
                    {children}
                </FlexBlock>
            </div>
            <TextBtn
                onClick={e => {
                    e.preventDefault();
                    router.push(btnSlug)
                }}
            >
                view more
            </TextBtn>
        </React.Fragment>
    )
}

export default Work