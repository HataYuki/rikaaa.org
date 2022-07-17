import type {NextPage} from 'next'

import FlexLayout from "../../layout/flexLayout";
import FlexStyle from 'styles/layout/flexLayout.module.sass'
import ImageTextCard from "./imageTextCard";

const SkillList: NextPage = () => {

    return (
        <FlexLayout layoutType={[FlexStyle.typeRow3]}>
            {
                [
                    {
                        image: '/skill_img_frontend.jpg',
                        title:'FRONTEND',
                        text: [
                            'HTML・CSS・JS・PHPなどの基本的な言語、Photoshop・Illustrator・XD、Premiere・AfterEffectsなどのデザインソフト、さらにNuxt.js・Next.jsなどモダンフレームワークの利用経験があります。',
                            'CMSはエンタープライズ向けの「WebRelease2」から一般的な「WordPress」の実務経験、「FlameLink」のようなヘッドレスCMSの利用経験があります。また、Matterport SDKのような事例が少ないツールの実務経験もあります。'
                        ]
                    },
                    {
                        image: '/skill_img_visual.jpg',
                        title: 'VISUAL',
                        text: [
                            'HTML・CSS・JS・PHPなどの基本的な言語、Photoshop・Illustrator・XD、Premiere・AfterEffectsなどのデザインソフト、さらにNuxt.js・Next.jsなどモダンフレームワークの利用経験があります。',
                            'また、書籍向けにプログラミングを用いたグラフィックス制作なども経験しました。',
                            '学生時代は映像学科に属していたため、一般的なカメラの使用・レタッチなどの方法も概ね理解しています。'
                        ]
                    },
                    {
                        image: '/skill_img_idea.jpg',
                        title: 'IDEA',
                        text: [
                            'エンジニアの立場でディレクターと共に各案件の上流工程などにも関わってきました。',
                            '自身の出したアイデアが担当した案件を超えて、クライアントが抱える多くのサイトに流用され経験などもしました。',
                            '個人制作ではアイデア・コンセプト、ユニークさが目立つ作風を得意とし、テレビ出演や文化庁後援の展示へ招待、コンペや賞レースの入選経験があります。'
                        ]
                    }
                ].map((term, i) => {
                    return (
                        <ImageTextCard key={i}>
                            {{
                                imgUrl: (term.image),
                                title: (term.title),
                                text: (term.text)
                            }}
                        </ImageTextCard>
                    )
                })
            }
        </FlexLayout>
    )
}

export default SkillList