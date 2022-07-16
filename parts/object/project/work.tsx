import {NextPage} from "next"
import {useRouter} from 'next/router'
import React from "react"
import Style from "styles/object/project/work.module.sass"
import HeadLine from "../component/headline"
import TextBtn from "../component/textBtn"
import FlexLayout from "../../layout/flexLayout";
import StyleFlexType from 'styles/layout/flexLayout.module.sass'

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
                <div className={Style.firstItem}>
                    {children[0]}
                </div>
                <FlexLayout layoutType={[StyleFlexType.typeIndexPage]}>
                    {children.filter((child,i) => i >= 1)}
                </FlexLayout>
            </div>
            <TextBtn
                align={'right'}
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