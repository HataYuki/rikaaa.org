import type {NextPage, GetStaticProps} from 'next'
import Styles from '/styles/pages/index.module.sass'
import clsx from 'clsx'
import Doc from "../parts/layout/doc";
import CoverVimeo from "../parts/component/coverVimeo";
import Btn from "../parts/component/btn";
import useBreakpoint from 'use-breakpoint';
import RoundImage from "../parts/component/roundImage"
import Column from "../parts/layout/column"
import Thumbnail from "parts/component/thumbnail"
import Headline from "../parts/component/headline";
import Links from "../parts/project/links";
import ImgBtn from "../parts/component/imgBtn";
import Skill from "../parts/project/skill";
import FadeIn from "../parts/component/fadeIn";
import {BREAKPOINTS} from "../lib/breakpoints";
import type {PostIndexList} from "../lib/posts";
import {getPostIndexList} from "../lib/posts";
import {useIsDark} from "../lib/useIsDark";

interface Props {
    postIndexList: PostIndexList
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const postIndexList = await getPostIndexList();
    return {
        props: {
            postIndexList
        }
    }
}

const Index: NextPage<Props> = ({postIndexList}) => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'win_small')
    const projectList4 = postIndexList.filter(post => post.projectType === 'client').filter((post, i) => i < 4)
    const projectList3 = postIndexList.filter(post => post.projectType === 'client').filter((post, i) => i < 3)
    const myProjectList = postIndexList.filter(post => post.projectType === 'self').filter((post, i) => i < 3)
    const isDark = useIsDark()

    return (
        <Doc postIndexList={postIndexList}>
            <section
                className={clsx(
                    Styles.mainVisual,
                    {[Styles.bgColor_gray]: !isDark},
                    {[Styles.bgColor_lightBlack]: isDark},
                    Styles.mb200
                )}
            >
                <div className={clsx(Styles.mw1380, Styles.wh100)}>
                    <div className={clsx(Styles.relative, Styles.sideSpace_mg, Styles.h100)}>


                        <FadeIn type={'fade'}>
                            <div className={clsx(Styles.mainVisual__video, Styles.absolute_autoCenter, Styles.br6)}>
                                <CoverVimeo className={Styles.h100}/>
                            </div>
                        </FadeIn>


                        <div className={clsx(Styles.mw980, Styles.h100)}>
                            <div className={clsx(Styles.relative, Styles.sideSpace_mg, Styles.h100)}>
                                <div className={clsx(Styles.mainVisual__title, Styles.absolute_autoCenter)}>
                                    <FadeIn type={'left'}>
                                        <h1 className={clsx(Styles.fontBold)}>rikaaa.org</h1>
                                        <div className={clsx(Styles.fontMiddle)}>
                                            <p>IS</p>
                                            <p>HATA YUKI</p>
                                            <p>PORTFOLIO SITE.</p>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>


                        <div className={clsx(Styles.mainVisual__links, Styles.absolute, Styles.flex)}>
                            <Btn href={'/work/all/project'} label={'link to index page of project'}
                                 className={Styles.mainVisual__link}>
                                project
                            </Btn>
                            <Btn href={'/work/all/my_project'} label={'link to index page of my project'}
                                 className={Styles.mainVisual__link}>
                                my project
                            </Btn>
                            <Btn href={'/about_me'} label={'link to about me page'} className={Styles.mainVisual__link}>
                                about me
                            </Btn>
                        </div>


                    </div>
                </div>

            </section>


            <section className={clsx(Styles.mb200)}>
                <div className={clsx(Styles.mw1380)}>

                    <FadeIn type={'fadeUp'}>
                        <Headline
                            level={2}
                            className={clsx(Styles.headline_fs_size, Styles.mw300, Styles.mb123)}
                            barStyle={clsx({[Styles.bgColor_white]:isDark})}
                        >
                            {{
                                en: ('project'),
                                ja: ('したこと')
                            }}
                        </Headline>
                    </FadeIn>

                    <div
                        className={clsx(Styles.sideSpace_mg, Styles.mb76, {[Styles.none]: !(minWidth >= BREAKPOINTS.win_small)})}>
                        <FadeIn type={'fade'} className={clsx(Styles.wh100)}>

                            <Column
                                className={clsx(
                                    Styles.firstWork,
                                    Styles.mb76,
                                    {[Styles.bgColor_gray]:!isDark},
                                    {[Styles.bgColor_lightBlack]:isDark}
                                )}
                                extendLeftH={true}>
                                {{
                                    left: (
                                        <RoundImage
                                            radius={6}
                                            className={
                                                clsx(Styles.h100)}
                                            src={projectList4[0].eyeCatch[0]}
                                        />
                                    ),
                                    right: (
                                        <div className={clsx(Styles.text_left)}>
                                            <FadeIn type={'left'}>
                                                <h3 className={clsx(Styles.firstWork__title, Styles.fontBold)}>
                                                    {
                                                        projectList4[0].headLine.en.toUpperCase()
                                                    }
                                                </h3>
                                                <p className={clsx(Styles.firstWork__article, Styles.textOverflow_c2, Styles.mb17)}>
                                                    {
                                                        projectList4[0].description.article
                                                    }
                                                </p>
                                                <Btn href={`/work/${postIndexList[0].slug}`}
                                                     label={`link to ${projectList4[0].headLine.en}`}>
                                                    DETAIL
                                                </Btn>
                                            </FadeIn>
                                        </div>
                                    )
                                }}
                            </Column>
                        </FadeIn>

                        <FadeIn type={'fadeUp'}>

                            <div
                                className={clsx(
                                    Styles.flex,
                                    {[Styles.col2_mg17]: (minWidth >= BREAKPOINTS.win_small && minWidth < BREAKPOINTS.win_medium)},
                                    {[Styles.col3_mg17]: (minWidth >= BREAKPOINTS.win_medium)},
                                )}
                            >
                                <Thumbnail
                                    href={`/work/${projectList4[1].slug}`}
                                    label={`link to ${projectList4[1].headLine.en}`}
                                    className={clsx(Styles.display_block)}>
                                    {{
                                        src: (projectList4[1].eyeCatch[0]),
                                        title: (projectList4[1].headLine.en),
                                        subText: (projectList4[1].headLine.subTextEn.split(',').join(' / '))
                                    }}
                                </Thumbnail>
                                <Thumbnail
                                    href={`/work/${projectList4[2].slug}`}
                                    label={`link to ${projectList4[2].headLine.en}`}
                                    className={clsx(Styles.display_block)}>
                                    {{
                                        src: (projectList4[2].eyeCatch[0]),
                                        title: (projectList4[2].headLine.en),
                                        subText: (projectList4[2].headLine.subTextEn.split(',').join(' / '))
                                    }}
                                </Thumbnail>
                                <Thumbnail
                                    href={`/work/${projectList4[3].slug}`}
                                    label={`link to ${projectList4[3].headLine.en}`}
                                    className={clsx(
                                        Styles.display_block,
                                        {[Styles.none]: (minWidth >= BREAKPOINTS.win_small && minWidth < BREAKPOINTS.win_medium)}
                                    )}>
                                    {{
                                        src: (projectList4[3].eyeCatch[0]),
                                        title: (projectList4[3].headLine.en),
                                        subText: (projectList4[3].headLine.subTextEn.split(',').join(' / '))
                                    }}
                                </Thumbnail>
                            </div>
                        </FadeIn>

                    </div>


                    <div className={clsx(Styles.sideSpace_mg, {[Styles.none]: (minWidth >= BREAKPOINTS.win_small)})}>
                        {
                            projectList3.map((post, i) => {
                                return (
                                    <FadeIn type={'fadeUp'} key={i}>
                                        <Thumbnail
                                            href={`/work/${post.slug}`}
                                            label={`link to ${post.headLine.en}`}
                                            className={clsx(Styles.mb123)}>
                                            {{
                                                src: (post.eyeCatch[0]),
                                                title: (post.headLine.en),
                                                subText: (post.headLine.subTextEn.split(',').join(' / '))
                                            }}
                                        </Thumbnail>
                                    </FadeIn>
                                )
                            })
                        }
                    </div>


                </div>

            </section>

            <section
                className={clsx(
                    Styles.mb200,
                    Styles.pb200,
                    Styles.pt200,
                    {[Styles.bgColor_gray]:!isDark},
                    {[Styles.bgColor_lightBlack]:isDark},
                )}
            >
                <FadeIn type={'fadeUp'}>
                    <Headline
                        level={2}
                        className={clsx(Styles.mw300, Styles.mb123, Styles.headline_fs_size)}
                        barStyle={clsx({[Styles.bgColor_white]:isDark})}
                    >
                        {{
                            en: ('vision'),
                            ja: ('これまで・これから')
                        }}
                    </Headline>
                </FadeIn>

                <div className={clsx(Styles.mw1440)}>
                    <div className={clsx(Styles.sideSpace_mg)}>
                        <div className={clsx(
                            Styles.visions,
                            {[Styles.flex]: (minWidth >= BREAKPOINTS.win_small)},
                            {[Styles.col2_mg17]: (minWidth >= BREAKPOINTS.win_small)})}>


                            <div
                                className={clsx(Styles.visionItem, {[Styles.mb200]: !(minWidth >= BREAKPOINTS.win_small)})}>
                                <FadeIn type={'fadeUp'}>
                                    <h2
                                        className={clsx(
                                            Styles.mb76,
                                            Styles.mb128,
                                            Styles.fontBold,
                                            Styles.text_center,
                                            Styles.visionTitle,
                                            {[Styles.fontColor_darkGray]:!isDark},
                                            {[Styles.fontColor_gray]:isDark}
                                        )}
                                    >
                                        WHAT I <span className={clsx(Styles.fontColor_blue)}>DID</span>
                                    </h2>
                                    <div className={clsx(Styles.visionArticle)}>
                                        <p>
                                            制作会社で５年間、フロントエンドを中心にデザインからCMS構築まで、WEB制作全般を経験してきました。バナーデザイン・LPのコーディングから初め、コーポレートのデザイン・CMS構築・APIとの接続を有するSPAサイト国内事例の少ない3DCGを用いたVRサイトの実績があります。
                                        </p>
                                        <p>
                                            フロントエンドの影響範囲を武器に、積極的に上流へコミットしつつ、保険会社や自動車メーカなど几帳面な作業を求められる案件を経験しました。
                                        </p>
                                        <p>
                                            また、少人数の環境で、時にワンオペレーションを求められる場面も多く、自走力を試される環境で、環境に依存しない実績を残してきました。
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>


                            <div className={clsx(Styles.visionItem)}>
                                <FadeIn type={'fadeUp'}>
                                    <h2
                                        className={clsx(
                                            Styles.mb76,
                                            Styles.mb128,
                                            Styles.fontBold,
                                            Styles.text_center,
                                            Styles.visionTitle,
                                            {[Styles.fontColor_darkGray]:!isDark},
                                            {[Styles.fontColor_gray]:isDark}
                                        )}>
                                        WHAT I <span className={clsx(Styles.fontColor_blue)}>DO</span>
                                    </h2>
                                    <div className={clsx(Styles.visionArticle)}>
                                        <p>
                                            保険会社や自動車メーカなどの慎重差が求められる案件や、長期に及ぶ作業で本領を発揮してきました。
                                            正確さを求められるサイト制作実績を武器に、静謐かつ突き詰められた提案や作業を今後も提供していきたいと考えています。
                                        </p>
                                        <p>
                                            また、フロントエンドは、見た目とロジックを兼ねるという特徴があると感じています。
                                            その柔軟さを意識して、デザインや仕様書に則るだけでなく、その間を補っていくようにユーザビリティーを高めていくことを責務とし、積極的にプロジェクトにコミットしてきました。
                                        </p>
                                        <p>
                                            今後はさらに、実装・デザイン両方の経験があるのを生かし、よりサイト制作のデザイン・上流工程への関わりを増やしていきたいと考えています。
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className={clsx(Styles.mb200)}>
                <FadeIn type={'fadeUp'}>
                    <Headline
                        level={2}
                        className={clsx(Styles.mw300, Styles.mb123, Styles.headline_fs_size)}
                        barStyle={clsx({[Styles.bgColor_white]:isDark})}
                    >
                        {{
                            en: ('skill'),
                            ja: ('できること')
                        }}
                    </Headline>
                </FadeIn>
                <Skill/>
            </section>

            <section className={clsx(Styles.mb200)}>
                <FadeIn type={'fadeUp'}>
                    <Headline
                        level={2}
                        className={clsx(Styles.mw300, Styles.mb123, Styles.headline_fs_size)}
                        barStyle={clsx({[Styles.bgColor_white]:isDark})}
                    >
                        {{
                            en: ('my project'),
                            ja: ('つくったもの')
                        }}
                    </Headline>
                </FadeIn>

                <div className={clsx(Styles.mw1440)}>
                    <div className={clsx(Styles.sideSpace_mg)}>

                        <div className={clsx(Styles.mw980)}>
                            <FadeIn type={'fadeUp'}>
                                <Thumbnail
                                    href={`/work/${myProjectList[0].slug}`}
                                    label={`link to ${myProjectList[0].headLine.en}`}
                                    className={clsx(Styles.mb123)}
                                >
                                    {{
                                        src: (myProjectList[0].eyeCatch[0]),
                                        title: (myProjectList[0].headLine.en.toUpperCase()),
                                        subText: (myProjectList[0].headLine.subTextEn.split(',').join(' / '))
                                    }}
                                </Thumbnail>
                            </FadeIn>
                        </div>

                        <div
                            className={clsx(
                                {[Styles.flex]: (minWidth >= BREAKPOINTS.win_small)},
                                {[Styles.col2_mg17]: (minWidth >= BREAKPOINTS.win_small)},
                            )}>
                            <FadeIn type={'fadeUp'}>
                                <Thumbnail
                                    href={`/work/${myProjectList[1].slug}`}
                                    label={`link to ${myProjectList[1].headLine.en}`}
                                    className={clsx(
                                        {[Styles.mb123]: !(minWidth >= BREAKPOINTS.win_small)}
                                    )}>
                                    {{
                                        src: (myProjectList[1].eyeCatch[0]),
                                        title: (myProjectList[1].headLine.en.toUpperCase()),
                                        subText: (myProjectList[1].headLine.subTextEn.split(',').join(' / '))
                                    }}
                                </Thumbnail>
                            </FadeIn>
                            <FadeIn type={'fadeUp'}>
                                <Thumbnail
                                    href={`/work/${myProjectList[2].slug}`}
                                    label={`link to ${myProjectList[2].headLine.en}`}
                                >
                                    {{
                                        src: (myProjectList[2].eyeCatch[0]),
                                        title: (myProjectList[2].headLine.en.toUpperCase()),
                                        subText: (myProjectList[2].headLine.subTextEn.split(',').join(' / '))
                                    }}
                                </Thumbnail>
                            </FadeIn>
                        </div>


                    </div>
                </div>
            </section>


            <section
                className={clsx(
                    Styles.pb200,
                    Styles.pt200,
                    {[Styles.bgColor_gray]:!isDark},
                    {[Styles.bgColor_lightBlack]:isDark},
                )}>
                <FadeIn type={'fadeUp'}>
                    <Headline
                        level={2}
                        className={clsx(Styles.mw300, Styles.mb123, Styles.headline_fs_size)}
                        barStyle={clsx({[Styles.bgColor_white]:isDark})}
                    >
                        {{
                            en: ('link'),
                            ja: ('そのほか')
                        }}
                    </Headline>
                </FadeIn>
                <div className={clsx(Styles.mw980)}>
                    <div className={clsx(Styles.mb200)}>
                        <FadeIn type={'fadeUp'}>
                            <Links/>
                        </FadeIn>
                    </div>
                    <div className={clsx(Styles.sideSpace_mg)}>
                        <div className={clsx(
                            {[Styles.flex]: minWidth >= BREAKPOINTS.win_small},
                            {[Styles.col3_mg17]: minWidth >= BREAKPOINTS.win_small},
                            Styles.advertise,
                        )}>
                            <div className={clsx(
                                {[Styles.mb123]: !(minWidth >= BREAKPOINTS.win_small)}
                            )}>
                                <FadeIn type={'fadeUp'}>
                                    <div className={clsx(Styles.advertise__item)}>
                                        <ImgBtn
                                            href={'https://www.cgarts.or.jp/scg/2013/prizes/nominate/entry/74.html'}
                                            label={'link to campus genius site'}
                                            target={true}
                                            src={'/ad_cg.jpg'}
                                        >
                                            19th CAMPUS GENIUS AWARD
                                        </ImgBtn>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className={clsx(
                                {[Styles.mb123]: !(minWidth >= BREAKPOINTS.win_small)}
                            )}>
                                <FadeIn type={'fadeUp'}>
                                    <div className={clsx(Styles.advertise__item)}>
                                        <ImgBtn
                                            href={'https://www.nhk.or.jp/techne/id/content.html#programming'}
                                            label={'link to tecne site'}
                                            target={true}
                                            src={'/ad_tecne.jpg'}
                                        >
                                            TECNE
                                        </ImgBtn>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className={clsx()}>
                                <FadeIn type={'fadeUp'}>
                                    <div className={clsx(Styles.advertise__item)}>
                                        <ImgBtn
                                            href={'http://tokyo-design2020.jp/vol3/ias.html'}
                                            label={'link to tokyo design 2020 open session'}
                                            target={true}
                                            src={'/ad_tokyoDesign.jpg'}>
                                            TOKYO DESIGN 2020 OPEN SESSION
                                        </ImgBtn>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </Doc>
    )
}

export default Index
