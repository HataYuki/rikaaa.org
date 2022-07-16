import {NextPage} from 'next'
import Style from 'styles/object/component/skillList.module.sass'
import Image from 'next/image'

const SkillList: NextPage = () => {
    return (
        <ul className={Style.root}>
            <li className={Style.skill}>
                <dl className={Style.card}>
                    <dt>
                        <Image src="/skill_img_frontend.jpg" layout="fill" objectFit="cover"></Image>
                    </dt>
                    <dd>
                        <h3 className={Style.fSubHeadLine}>FRONTEND</h3>
                        <div className={Style.fText}>
                            <p>
                                HTML・CSS・JS・PHPなどの基本的な言語、Photoshop・Illustrator・XD、Premiere・AfterEffectsなどのデザインソフト、さらにNuxt.js・Next.jsなどモダンフレームワークの利用経験があります。
                            </p>
                            <p>
                                CMSはエンタープライズ向けの「WebRelease2」から一般的な「WordPress」の実務経験、「FlameLink」のようなヘッドレスCMSの利用経験があります。
                                また、Matterport SDKのような事例が少ないツールの実務経験もあります。
                            </p>
                        </div>
                    </dd>
                </dl>
            </li>
            <li className={Style.skill}>
                <dl className={Style.card}>
                    <dt>
                        <Image src="/skill_img_visual.jpg" layout="fill" objectFit="cover"></Image>
                    </dt>
                    <dd>
                        <h3 className={Style.fSubHeadLine}>VISUAL</h3>
                        <div className={Style.fText}>
                            <p>
                                JSなどの技術面の仕事を中心にしていた一方、小規模のコーポレートサイト・社内向けサイトのデザインも実務経験があります。
                            </p>
                            <p>
                                また、書籍向けにプログラミングを用いたグラフィックス制作なども経験しました。
                            </p>
                            <p>
                                学生時代は映像学科に属していたため、一般的なカメラの使用・レタッチなどの方法も概ね理解しています。
                            </p>
                        </div>
                    </dd>
                </dl>
            </li>
            <li className={Style.skill}>
                <dl className={Style.card}>
                    <dt>
                        <Image src="/skill_img_idea.jpg" layout="fill" objectFit="cover"></Image>
                    </dt>
                    <dd>
                        <h3 className={Style.fSubHeadLine}>IDEA</h3>
                        <div className={Style.fText}>
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
                    </dd>
                </dl>
            </li>
        </ul>
    )
}

export default SkillList