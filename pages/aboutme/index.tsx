import type {NextPage, GetStaticProps} from 'next'
import {useState} from 'react'
import Root from "../../parts/object/project/root";
import Profile from "../../parts/object/project/profile";
import {getPostIndexList, PostIndexList} from "@lib/posts";
import PageHeader from "../../parts/object/component/pageHeader";

interface Props {
    postIndexList: PostIndexList
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const postIndexList = await getPostIndexList()
    return {
        props: {
            postIndexList
        }
    }
}

const Index: NextPage<Props> = ({postIndexList}: Props) => {
    const [passPHeader, setPassPHeader] = useState(true)

    return (
        <Root postList={postIndexList} headerColor={(passPHeader) ? 'dark' : 'light'} showTitle={true}>
            <section>
                <PageHeader onIntersect={(intersect) => setPassPHeader(!intersect)}>
                    {{
                        en: ('about me'),
                        ja: ('自己紹介')
                    }}
                </PageHeader>
            </section>
            <Profile/>
        </Root>
    )
}

export default Index