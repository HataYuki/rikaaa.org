import clsx from "clsx";
import Styles from "/styles/project/skill.module.sass";
import Column from "../layout/column";
import FadeIn from '../component/fadeIn'
import RoundImage from "../component/roundImage";

const Skill = () => {
    return (
        <div className={clsx(Styles.mw980)}>
            <div className={clsx(Styles.sideSpace_mg)}>
                <FadeIn type={'fadeUp'}>
                    <Column className={clsx(Styles.skill, Styles.mb76)} extendRightH={true} columnReverse={true}>
                        {{
                            left: (
                                <div className={clsx(Styles.bgColor_gray, Styles.skill__text)}>
                                    <h3 className={clsx(Styles.fontBold, Styles.skill__title, Styles.mb46)}>FRONTEND</h3>
                                    <div className={clsx(Styles.skill__article)}>
                                        <p>
                                            HTML・CSS・JS・PHPなどの基本的な言語、さらにNuxt.js・Next.jsなどモダンフレームワークの利用経験があります。
                                        </p>
                                        <p>
                                            CMSはエンタープライズ向けの「WebRelease2」から一般的な「WordPress」の実務経験、「FlameLink」のようなヘッドレスCMSの利用経験があります。また、Matterport
                                            SDKのような事例が少ないツールの実務経験もあります。
                                        </p>
                                    </div>
                                </div>
                            ),
                            right: (
                                <div className={Styles.skill__imgContainer}>
                                    <RoundImage src={'/skill_img_frontend.png'} radius={6}
                                                className={clsx(Styles.h100)}/>
                                </div>
                            )
                        }}
                    </Column>
                </FadeIn>
                <FadeIn type={'fadeUp'}>
                    <Column className={clsx(Styles.skill, Styles.mb76)} extendRightH={true} reverse={true}
                            columnReverse={true}>
                        {{
                            left: (
                                <div className={clsx(Styles.bgColor_gray, Styles.skill__text)}>
                                    <h3 className={clsx(Styles.fontBold, Styles.skill__title, Styles.mb46)}>VISUAL</h3>
                                    <div className={clsx(Styles.skill__article)}>
                                        <p>
                                            Photoshop・Illustrator・XDデザインツールの実務経験、Premiere・AfterEffectsの使用経験があります。
                                        </p>
                                        <p>
                                            また、Processing・OpenframeWorksなどのアーティスト向けフレームワークを利用した、グラフィック制作等も経験し、書籍の表紙として利用されました。
                                        </p>
                                        <p>
                                            学生時代は映像学科に属していたため、一般的なカメラの使用・レタッチなどの方法も概ね理解しています。
                                        </p>
                                    </div>
                                </div>
                            ),
                            right: (
                                <div className={Styles.skill__imgContainer}>
                                    <RoundImage src={'/skill_img_visual.png'} radius={6}
                                                className={clsx(Styles.h100)}/>
                                </div>
                            )
                        }}
                    </Column>
                </FadeIn>
                <FadeIn type={'fadeUp'}>
                    <Column className={clsx(Styles.skill)} extendRightH={true} columnReverse={true}>
                        {{
                            left: (
                                <div className={clsx(Styles.bgColor_gray, Styles.skill__text)}>
                                    <h3 className={clsx(Styles.fontBold, Styles.skill__title, Styles.mb46)}>IDEA</h3>
                                    <div className={clsx(Styles.skill__article)}>
                                        <p>
                                            エンジニアの立場でディレクターと共に各案件の上流工程などにも関わってきました。
                                        </p>
                                        <p>
                                            自身の出したアイデアが担当した案件を超えて、クライアントが抱える多くのサイトに流用され経験などもしました。
                                        </p>
                                        <p>
                                            個人制作ではアイデア・コンセプト、ユニークさが目立つ作風を得意とし、テレビ出演や文化庁後援の展示へ招待、コンペや賞レースの入選経験があります。
                                        </p>
                                    </div>
                                </div>
                            ),
                            right: (
                                <div className={Styles.skill__imgContainer}>
                                    <RoundImage src={'/skill_img_idea.png'} radius={6}
                                                className={clsx(Styles.h100)}/>
                                </div>
                            )
                        }}
                    </Column>
                </FadeIn>
            </div>
        </div>
    )
}

export default Skill