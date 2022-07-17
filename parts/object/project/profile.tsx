import type {NextPage} from 'next'
import {useState} from 'react'
import Style from 'styles/object/project/profile.module.sass'
import Animation from 'styles/foundation/animation.module.sass'
import Container from "../../layout/container";
import Headline from "../component/headline";
import SkillList from "../component/skillList";
import Definition from "../component/definition";
import Image from 'next/image'
import clsx from 'clsx'


const Profile: NextPage = () => {
    const [show, setShow] = useState(true)

    return (
        <section
            className={clsx(
                Style.root,
                Animation.fadeInUpAnimation,
                {[Animation.isAnimated]: show}
            )}
        >
            <Container mb100={true} pb100={true} border={true} onIntersect={(isIntersecting) => {
                if (isIntersecting) {
                    setShow(isIntersecting)
                }
            }}>
                <div className={Style.aboutMe}>
                    <div className={Style.selfImage}>
                        <Image layout={'fill'}
                               objectFit={'cover'}
                               loading={'lazy'}
                               src={'/self.jpg'}
                        />
                    </div>
                    <div className={Style.selfText}>
                        <div className={Style.name}>
                            <h2 className={Style.fText}>畑雄樹</h2>
                            <span className={Style.fText}>hata yuki</span>
                        </div>
                        <div className={Style.pr}>
                            <p>
                                サイトをご覧いただきありがとうございます。
                            </p>
                            <p>
                                WEB制作会社で5年間フロントエンドエンジニアとして実績を積んできました。
                            </p>
                            <p>
                                バナーデザインやLPページの実装から初め、CMS構築、 モダンフレームワークによるSPAの実装、
                                Canvas、Three.jsを使ったリッチコンテンツの実装などを経験してきました。また、コーポレートサイトのデザイン経験もあります。
                            </p>
                            <p>
                                少人数かつ、毎回異なった条件下で、自走力を求められる現場を経験してきました。
                            </p>
                            <p>
                                また、フロントエンドというデザイン面とロジックを両方兼ねる領域で、積極的に上流にコミットし、几帳面な
                                性格から、保険会社や自動車メーカーなどの慎重かつ, 長期にわたり根気のいる仕事で本領を発揮してきました。
                            </p>
                            <p>
                                今後もこの性格や、経験してきた場数、フロントエンドの知識を活かして、静謐かつ突き詰められた提案や作業を提供したいと考えております。
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
            <Container mb100={true}>
                <div className={Style.cv}>
                    <Headline>
                        {{
                            en: ('educational'),
                            ja: ('学歴')
                        }}
                    </Headline>
                    <Definition>
                        {{
                            items: [
                                [2008, '東京都立町田高等学校　入学'],
                                [2011, '京都立町田高等学校　卒業'],
                                [2012, '武蔵野美術大学造形学部（現 造形構想学部）映像学科 入学'],
                                [2016, '武蔵野美術大学造形学部映像学科　卒業']
                            ]
                        }}
                    </Definition>
                </div>
            </Container>
            <Container mb100={true}>
                <div className={Style.cv}>
                    <Headline>
                        {{
                            en: ('work'),
                            ja: ('職歴')
                        }}
                    </Headline>
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
            </Container>
            <Container mb100={true}>
                <div className={Style.cv}>
                    <Headline>
                        {{
                            en: ('Award / exhibition'),
                            ja: ('賞歴 / 展示歴')
                        }}
                    </Headline>
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
            </Container>
            <div>
                <Container mb70={true}>
                    <Headline align={'center'}>
                        {{
                            en: ('skill')
                        }}
                    </Headline>
                    <SkillList/>
                </Container>
            </div>
        </section>
    )
}

export default Profile