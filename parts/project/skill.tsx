import clsx from "clsx";
import React from 'react'
import Styles from "/styles/project/skill.module.sass";
import Column from "../layout/column";
import FadeIn from '../component/fadeIn'
import RoundImage from "../component/roundImage";
import {useIsDark} from "../../lib/useIsDark";
import {BREAKPOINTS} from "../../lib/breakpoints";
import useBreakpoint from "use-breakpoint";
import {min} from "lodash";

const Skill = () => {
    const isDark = useIsDark()
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'win_small')

    const contents = [
        {
            title: 'FRONTEND',
            article: [
                'HTML・CSS・JS・PHPなどの基本的な言語、さらにNuxt.js・Next.jsなどモダンフレームワークの利用経験があります。',
                'CMSはエンタープライズ向けの「WebRelease2」から一般的な「WordPress」の実務経験、「FlameLink」のようなヘッドレスCMSの利用経験があります。また、MatterportSDKのような事例が少ないツールの実務経験もあります。'
            ],
            images: ['/skill_img_frontend.png']
        },
        {
            title: 'VISUAL',
            article: [
                'Photoshop・Illustrator・XDデザインツールの実務経験、Premiere・AfterEffectsの使用経験があります。',
                'また、Processing・OpenframeWorksなどのアーティスト向けフレームワークを利用した、グラフィック制作等も経験し、書籍の表紙として利用されました。',
                '学生時代は映像学科に属していたため、一般的なカメラの使用・レタッチなどの方法も概ね理解しています。'
            ],
            images: ['/skill_img_visual.png', '/skill_img_visual_dark.png']
        },
        {
            title: 'IDEA',
            article: [
                'エンジニアの立場でディレクターと共に各案件の上流工程などにも関わってきました。',
                '自身の出したアイデアが担当した案件を超えて、クライアントが抱える多くのサイトに流用され経験などもしました。',
                '個人制作ではアイデア・コンセプト、ユニークさが目立つ作風を得意とし、テレビ出演や文化庁後援の展示へ招待、コンペや賞レースの入選経験があります。'
            ],
            images: ['/skill_img_idea.png']
        }
    ]

    const image = (images: Array<string>) => {
        const result: Array<React.ReactNode> = []
        if (images[0]) {
            result.push(
                <RoundImage
                    className={clsx(
                        Styles.h100,
                        {[Styles.none]: (isDark && images.length !== 1)}
                    )}
                    src={images[0]}
                    radius={6}
                />
            )
        }
        if (images[1]) {
            result.push(
                <RoundImage
                    className={clsx(
                        Styles.h100,
                        {[Styles.none]: !isDark}
                    )}
                    src={images[1]}
                    radius={6}
                />
            )
        }

        return result;
    }

    return (
        <div className={clsx(Styles.mw980)}>
            <div className={clsx(Styles.sideSpace_mg)}>
                {
                    contents.map((content, i) => {
                        return (
                            <FadeIn type={'fadeUp'} key={i}>
                                <Column
                                    className={clsx(
                                        Styles.skill,
                                        {[Styles.mb76]: i !== (contents.length - 1)}
                                    )}
                                    extendRightH={true}
                                    columnReverse={(i % 2 === 0 || minWidth !== 'win_small') ? true : false}
                                    reverse={(i % 2 !== 0) ? true : false}
                                >
                                    {{
                                        left: (
                                            <div
                                                className={clsx(
                                                    {[Styles.bgColor_gray]: !isDark},
                                                    {[Styles.bgColor_lightBlack]: isDark},
                                                    Styles.skill__text
                                                )}
                                            >
                                                <h3
                                                    className={clsx(
                                                        Styles.fontBold,
                                                        Styles.skill__title,
                                                        Styles.mb46,
                                                        {[Styles.fontColor_darkGray]: !isDark},
                                                        {[Styles.fontColor_gray]: isDark}
                                                    )}
                                                >
                                                    {
                                                        content.title.toUpperCase()
                                                    }
                                                </h3>
                                                <div className={clsx(Styles.skill__article)}>
                                                    {
                                                        content.article.map((text, i) => {
                                                            return (
                                                                <p key={i}>
                                                                    {
                                                                        text
                                                                    }
                                                                </p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        ),
                                        right: (
                                            <div className={Styles.skill__imgContainer}>
                                                {
                                                    image(content.images)
                                                }
                                            </div>
                                        )
                                    }}
                                </Column>
                            </FadeIn>
                        )
                    })
                }
                {/*<FadeIn type={'fadeUp'}>*/}
                {/*    <Column className={clsx(Styles.skill, Styles.mb76)} extendRightH={true} columnReverse={true}>*/}
                {/*        {{*/}
                {/*            left: (*/}
                {/*                <div className={clsx(Styles.bgColor_gray, Styles.skill__text)}>*/}
                {/*                    <h3 className={clsx(Styles.fontBold, Styles.skill__title, Styles.mb46)}>FRONTEND</h3>*/}
                {/*                    <div className={clsx(Styles.skill__article)}>*/}
                {/*                        <p>*/}
                {/*                            HTML・CSS・JS・PHPなどの基本的な言語、さらにNuxt.js・Next.jsなどモダンフレームワークの利用経験があります。*/}
                {/*                        </p>*/}
                {/*                        <p>*/}
                {/*                            CMSはエンタープライズ向けの「WebRelease2」から一般的な「WordPress」の実務経験、「FlameLink」のようなヘッドレスCMSの利用経験があります。また、Matterport*/}
                {/*                            SDKのような事例が少ないツールの実務経験もあります。*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            ),*/}
                {/*            right: (*/}
                {/*                <div className={Styles.skill__imgContainer}>*/}
                {/*                    <RoundImage src={'/skill_img_frontend.png'} radius={6}*/}
                {/*                                className={clsx(Styles.h100)}/>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        }}*/}
                {/*    </Column>*/}
                {/*</FadeIn>*/}
                {/*<FadeIn type={'fadeUp'}>*/}
                {/*    <Column className={clsx(Styles.skill, Styles.mb76)} extendRightH={true} reverse={true}*/}
                {/*            columnReverse={true}>*/}
                {/*        {{*/}
                {/*            left: (*/}
                {/*                <div className={clsx(Styles.bgColor_gray, Styles.skill__text)}>*/}
                {/*                    <h3 className={clsx(Styles.fontBold, Styles.skill__title, Styles.mb46)}>VISUAL</h3>*/}
                {/*                    <div className={clsx(Styles.skill__article)}>*/}
                {/*                        <p>*/}
                {/*                            Photoshop・Illustrator・XDデザインツールの実務経験、Premiere・AfterEffectsの使用経験があります。*/}
                {/*                        </p>*/}
                {/*                        <p>*/}
                {/*                            また、Processing・OpenframeWorksなどのアーティスト向けフレームワークを利用した、グラフィック制作等も経験し、書籍の表紙として利用されました。*/}
                {/*                        </p>*/}
                {/*                        <p>*/}
                {/*                            学生時代は映像学科に属していたため、一般的なカメラの使用・レタッチなどの方法も概ね理解しています。*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            ),*/}
                {/*            right: (*/}
                {/*                <div className={Styles.skill__imgContainer}>*/}
                {/*                    <RoundImage src={'/skill_img_visual.png'} radius={6}*/}
                {/*                                className={clsx(Styles.h100)}/>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        }}*/}
                {/*    </Column>*/}
                {/*</FadeIn>*/}
                {/*<FadeIn type={'fadeUp'}>*/}
                {/*    <Column className={clsx(Styles.skill)} extendRightH={true} columnReverse={true}>*/}
                {/*        {{*/}
                {/*            left: (*/}
                {/*                <div className={clsx(Styles.bgColor_gray, Styles.skill__text)}>*/}
                {/*                    <h3 className={clsx(Styles.fontBold, Styles.skill__title, Styles.mb46)}>IDEA</h3>*/}
                {/*                    <div className={clsx(Styles.skill__article)}>*/}
                {/*                        <p>*/}
                {/*                            エンジニアの立場でディレクターと共に各案件の上流工程などにも関わってきました。*/}
                {/*                        </p>*/}
                {/*                        <p>*/}
                {/*                            自身の出したアイデアが担当した案件を超えて、クライアントが抱える多くのサイトに流用され経験などもしました。*/}
                {/*                        </p>*/}
                {/*                        <p>*/}
                {/*                            個人制作ではアイデア・コンセプト、ユニークさが目立つ作風を得意とし、テレビ出演や文化庁後援の展示へ招待、コンペや賞レースの入選経験があります。*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            ),*/}
                {/*            right: (*/}
                {/*                <div className={Styles.skill__imgContainer}>*/}
                {/*                    <RoundImage src={'/skill_img_idea.png'} radius={6}*/}
                {/*                                className={clsx(Styles.h100)}/>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        }}*/}
                {/*    </Column>*/}
                {/*</FadeIn>*/}
            </div>
        </div>
    )
}

export default Skill