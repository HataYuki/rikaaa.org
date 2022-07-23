import type {NextPage, GetStaticPaths, GetStaticProps} from 'next'
import {getPostIndexList} from "lib/posts";
import type {PostIndexList} from "lib/posts";
import Doc from "../../../parts/layout/doc";
import FadeIn from "../../../parts/component/fadeIn";
import Styles from '/styles/pages/category.module.sass'
import clsx from 'clsx'
import Thumbnail from "../../../parts/component/thumbnail";
import {BREAKPOINTS} from "../../../lib/breakpoints";
import {useBreakpoint} from "use-breakpoint";

interface Props {
    thisCategoryIndexList: PostIndexList
    postIndexList: PostIndexList
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: ['/work/all/project', '/work/all/my_project'],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const category = (context.params && context.params.category) ? context.params.category : ''
    let type: string = '';
    if (category === 'project') {
        type = 'client'
    }
    if (category === 'my_project') {
        type = 'self'
    }
    const postIndexList = await getPostIndexList()
    return {
        props: {
            thisCategoryIndexList: postIndexList.filter(post => post.projectType === type),
            postIndexList: postIndexList
        }
    }
}

const Category: NextPage<Props> = ({thisCategoryIndexList,postIndexList}) => {

    const {minWidth} = useBreakpoint(BREAKPOINTS, 'win_small')

    return (
        <Doc postIndexList={postIndexList}>
            <section className={clsx(Styles.mb200, Styles.ptHeader)}>
                <div className={clsx(Styles.mw1380)}>
                    <div className={clsx(Styles.sideSpace_mg)}>
                        <ul
                            className={clsx(
                                {[Styles.flex]: (minWidth >= BREAKPOINTS.win_small)},
                                {[Styles.col2_mg17]: (minWidth >= BREAKPOINTS.win_small && minWidth < BREAKPOINTS.win_medium)},
                                {[Styles.col3_mg17]: (minWidth >= BREAKPOINTS.win_medium)}
                            )}
                        >
                            {
                                thisCategoryIndexList.map((post, i) => {
                                    return (
                                        <li key={i} className={clsx(Styles.mb123)}>
                                            <FadeIn type={'fadeUp'}>
                                                <Thumbnail
                                                    href={`/work/${post.slug}`}
                                                    label={`link to ${post.headLine.en}`}
                                                >
                                                    {{
                                                        src: (post.eyeCatch[0]),
                                                        title: (post.headLine.en),
                                                        subText: ((post.headLine.subTextEn.split(',').join(' / ')))
                                                    }}
                                                </Thumbnail>
                                            </FadeIn>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </Doc>
    )
}

export default Category