import type {NextPage} from 'next'
import Doc from '../parts/layout/doc'
import Styles from 'styles/pages/aboutMe.module.sass'
import clsx from 'clsx'
import Headline from "../parts/component/headline";
import Column from "../parts/layout/column";
import FadeIn from "../parts/component/fadeIn";
import Image from 'next/image'
import {useBreakpoint} from "use-breakpoint";
import Definition from "../parts/component/definition";
import Skill from "../parts/project/skill";
import {BREAKPOINTS} from "../lib/breakpoints";
import type {PostIndexList} from "../lib/posts";
import {getPostIndexList} from "../lib/posts";
import {GetStaticProps} from "next";

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


const About_me: NextPage<Props> = ({postIndexList}: Props) => {
    const {minWidth} = useBreakpoint(BREAKPOINTS, 'win_small')

    return (
        <Doc postIndexList={postIndexList}>
            <div className={clsx(Styles.ptHeader)}>
                <div className={clsx(Styles.pt76)}>

                    <section className={clsx(Styles.mb200)}>
                        <div className={clsx(
                            Styles.mw300,
                            {[Styles.mb123]: (minWidth >= BREAKPOINTS.win_small)},
                            {[Styles.mb76]: !(minWidth >= BREAKPOINTS.win_small)}
                        )}>
                            <FadeIn type={'fadeUp'}>
                                <Headline level={1} className={Styles.headline_fs_size}>
                                    {{
                                        en: ('about me'),
                                        ja: ('わたしについて')
                                    }}
                                </Headline>
                            </FadeIn>
                        </div>

                        <div className={clsx(Styles.mw1380)}>
                            <div className={clsx(Styles.sideSpace_mg)}>
                                <Column className={clsx(Styles.aboutMe)} reverse={true} columnReverse={true}>
                                    {{
                                        right: (
                                            <div className={clsx(
                                                Styles.aboutMe__imgContainer,
                                                {[Styles.mb76]: !(minWidth >= BREAKPOINTS.win_small)}
                                            )}>
                                                <FadeIn type={'fade'} className={Styles.wh100}>
                                                    <Image
                                                        src={'/self.png'}
                                                        layout={'fill'}
                                                        objectFit={'contain'}
                                                    />
                                                </FadeIn>
                                            </div>
                                        ),
                                        left: (
                                            <div className={clsx(Styles.aboutMe__profile, Styles.bgColor_gray)}>
                                                <FadeIn type={'fade'}>
                                                    <h2 className={clsx(Styles.fontMedium, Styles.aboutMe__name, Styles.mb46)}>
                                                        畑雄樹
                                                        <span
                                                            className={clsx(Styles.display_block, Styles.fontLight, Styles.aboutMe__nameKana)}>はたゆうき</span>
                                                    </h2>
                                                    <div className={clsx(Styles.aboutMe__sentenceContainer)}>
                                                        <p className={clsx(Styles.aboutMe__sentence)}>
                                                            サイトをご覧いただきありがとうございます。
                                                        </p>
                                                        <p className={clsx(Styles.aboutMe__sentence)}>
                                                            WEB制作会社で5年間フロントエンドエンジニアとして実績を積んできました。
                                                        </p>
                                                        <p className={clsx(Styles.aboutMe__sentence)}>
                                                            バナーデザインやLPページの実装から初め、CMS構築、
                                                            モダンフレームワークによるSPAの実装、Canvas、Three.jsを使ったリッチコンテンツの実装などを経験してきました。また、コーポレートサイトのデザイン経験もあります。
                                                        </p>
                                                        <p className={clsx(Styles.aboutMe__sentence)}>
                                                            少人数かつ、毎回異なった条件下で、自走力を求められる現場を経験してきました。
                                                        </p>
                                                        <p className={clsx(Styles.aboutMe__sentence)}>
                                                            また、フロントエンドというデザイン面とロジックを両方兼ねる領域で、積極的に上流にコミットし、几帳面な性格から、保険会社や自動車メーカーなどの慎重かつ,
                                                            長期にわたり根気のいる仕事で本領を発揮してきました。
                                                        </p>
                                                        <p className={clsx(Styles.aboutMe__sentence)}>
                                                            今後もこの性格や、経験してきた場数、フロントエンドの知識を活かして、静謐かつ突き詰められた提案や作業を提供したいと考えております。
                                                        </p>
                                                    </div>
                                                </FadeIn>
                                            </div>
                                        )
                                    }}
                                </Column>
                            </div>
                        </div>
                    </section>

                    <section className={clsx(Styles.mb200)}>
                        <div className={clsx(Styles.mw980)}>
                            <div className={clsx(Styles.sideSpace_mg)}>
                                <div className={clsx(
                                    Styles.mw300,
                                    Styles.mb76,
                                )}>
                                    <FadeIn type={'fadeUp'}>
                                        <Headline level={1} className={Styles.headline_fs_size}>
                                            {{
                                                en: ('EDUCATIONAL'),
                                                ja: ('学歴')
                                            }}
                                        </Headline>
                                    </FadeIn>
                                </div>
                                <div>
                                    <Definition>
                                        {{
                                            items: ([
                                                [2008, '東京都立町田高等学校　入学'],
                                                [2011, '京都立町田高等学校　卒業'],
                                                [2012, '武蔵野美術大学造形学部（現 造形構想学部）映像学科 入学'],
                                                [2016, '武蔵野美術大学造形学部映像学科　卒業']
                                            ])
                                        }}
                                    </Definition>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={clsx(Styles.mb200)}>
                        <div className={clsx(Styles.mw980)}>
                            <div className={clsx(Styles.sideSpace_mg)}>
                                <div className={clsx(
                                    Styles.mw300,
                                    Styles.mb76,
                                )}>
                                    <FadeIn type={'fadeUp'}>
                                        <Headline level={1} className={Styles.headline_fs_size}>
                                            {{
                                                en: ('work'),
                                                ja: ('職歴')
                                            }}
                                        </Headline>
                                    </FadeIn>
                                </div>
                                <div>
                                    <Definition>
                                        {{
                                            items: ([
                                                ['2016.02', '株式会社ボール 入社（個人事業主として業務を請負）'],
                                                ['2018.07', '株式会社ボール 契約解除'],
                                                ['2019.11', '株式会社ボール 入社（同上）'],
                                                ['2022.3', '株式会社ボール 契約解除'],
                                                ['2022.4', '株式会社ブランセル 入社（正社員）'],
                                                ['2022.6', '株式会社ブランセル 退社'],
                                            ])
                                        }}
                                    </Definition>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={clsx(Styles.mb200)}>
                        <div className={clsx(Styles.mw980)}>
                            <div className={clsx(Styles.sideSpace_mg)}>
                                <div className={clsx(
                                    Styles.mw300,
                                    Styles.mb76,
                                )}>
                                    <FadeIn type={'fadeUp'}>
                                        <Headline level={1} className={Styles.headline_fs_size}>
                                            {{
                                                en: ('Award exhibition'),
                                                ja: ('賞歴 / 展示歴')
                                            }}
                                        </Headline>
                                    </FadeIn>
                                </div>
                                <div>
                                    <Definition>
                                        {{
                                            items: ([
                                                ['2013.12', '第19回学生CGコンテスト受賞者発表イベント＠MIRROR'],
                                                ['2014.05', '展示「僕の世界を数ルクス明るくする」@武蔵野美術大学'],
                                                ['2014.07', '展示「そこにある0」＠武蔵野美術大学'],
                                                ['2014.07', '東京デザイン 2020 オープンセッション Vol.03 at 武蔵野美術大学'],
                                                ['2014.08', 'おおすみ-かごしま芸術祭2014'],
                                                ['2014.10', '武蔵野美術大学映像学科 進級制作展 ＠武蔵野美術大学'],
                                                ['2014.10', '展示「NATURE OF CREATED BY DESIGN」＠ソウル芸術大学'],
                                                ['2014.12', 'NHK「TECNE -映像の教室-」ID 制作 / 出演'],
                                                ['2015.09', 'MAU-HfG 国際プロジェクト「GO PUBLIC」＠おぐぎんざ商店街'],
                                                ['2015.10', 'MAU-HfG 国際プロジェクト「GO PUBLIC」＠ドイツ・カールスルーエ'],
                                                ['2016.01', '平成27年度武蔵野美術大学 卒業・修了制作展 ＠武蔵野美術大学'],
                                                ['2016.02', 'ライブイベント「帰ってきた放課後メディアアート」出演・企画 ＠落合SOUP'],
                                                ['2016.08', '展示「ひかるどうぶつえん2016」@金沢動物園'],
                                                ['2016.10', 'インターネットヤミ市東京2016 ~買える力~ @3331体育館']
                                            ])
                                        }}
                                    </Definition>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={clsx(Styles.mb200)}>
                        <div className={clsx(
                            Styles.mw300,
                            Styles.mb76,
                        )}>
                            <FadeIn type={'fadeUp'}>
                                <Headline level={1} className={Styles.headline_fs_size}>
                                    {{
                                        en: ('skill'),
                                        ja: ('できること')
                                    }}
                                </Headline>
                            </FadeIn>
                        </div>
                        <Skill/>
                    </section>

                </div>
            </div>
        </Doc>
    )
}

export default About_me