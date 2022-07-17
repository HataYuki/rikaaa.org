import type {NextPage} from 'next'
import {useState} from 'react'
import Style from 'styles/object/project/vision.module.sass'
import Animation from 'styles/foundation/animation.module.sass'
import {InView} from 'react-intersection-observer'
import Image from 'next/image'
import clsx from 'clsx'

const Vision: NextPage = () => {
    const [showUpper, setShowUpper] = useState(false)
    const [showBottom, setShowBottom] = useState(false)

    return (
        <div className={Style.root}>
            <div className={Style.wrapper}>
                <InView
                    className={clsx(
                        Style.aVision,
                        Animation.fadeInUpAnimation,
                        {[Animation.isAnimated]: showUpper}
                    )}
                    threshold={0.5}
                    triggerOnce={true}
                    onChange={(InView, entry) => setShowUpper(entry.isIntersecting)}
                >
                    <div className={Style.imgBlock}>
                        <Image
                            src={'/vision_img_00.jpg'}
                            layout={'fill'}
                            objectFit={'cover'}
                            loading={'lazy'}
                        >
                        </Image>
                    </div>

                    <div className={Style.textBlock}>
                        <div
                            className={clsx(
                                Animation.fadeInFromLeftAnimation,
                                {[Animation.isAnimated]: showUpper}
                            )}
                        >
                            <h3 className={Style.fHeadLine}>WHAT I <span>DID</span></h3>
                            <p className={Style.fText}>
                                制作会社で５年間、フロントエンドを中心にデザインからCMS構築まで、WEB制作全般を経験してきました。バナーデザイン・LPのコーディングから初め、コーポレートのデザイン・CMS構築・APIとの接続を有するSPAサイト国内事例の少ない3DCGを用いたVRサイトの実績があります。
                            </p>
                            <p className={Style.fText}>
                                フロントエンドの影響範囲を武器に、積極的に上流へコミットしつつ、保険会社や自動車メーカなど几帳面な作業を求められる案件を経験しました。
                            </p>
                            <p className={Style.fText}>
                                また、少人数の環境で、時にワンオペレーションを求められる場面も多く、自走力を試される環境で、環境に依存しない実績を残してきました。
                            </p>
                        </div>
                    </div>

                </InView>
                <InView
                    className={clsx(
                        Style.aVision,
                        Animation.fadeInUpAnimation,
                        {[Animation.isAnimated]: showBottom}
                    )}
                    threshold={0.5}
                    triggerOnce={true}
                    onChange={(InView, entry) => setShowBottom(entry.isIntersecting)}
                >
                    <div className={Style.imgBlock}>
                        <Image
                            src={'/vision_img_01.jpg'}
                            layout={'fill'}
                            objectFit={'cover'}
                            loading={'lazy'}
                        ></Image>
                    </div>
                    <div className={Style.textBlock}>
                        <div
                            className={clsx(
                                Animation.fadeInFromLeftAnimation,
                                {[Animation.isAnimated]: showBottom}
                            )}
                        >
                            <h3 className={Style.fHeadLine}>
                                WHAT I <span>DO</span>
                            </h3>
                            <p>
                                保険会社や自動車メーカなどの慎重差が求められる案件や、長期に及ぶ作業で本領を発揮してきました。
                                正確さを求められるサイト制作実績を武器に、静謐かつ突き詰められた提案や作業を今後も提供していきたいと考えています。
                            </p>
                            <p className={Style.fText}>
                                また、フロントエンドは、見た目とロジックを兼ねるという特徴があると感じています。
                                その柔軟さを意識して、デザインや仕様書に則るだけでなく、その間を補っていくようにユーザビリティーを高めていくことを責務とし、積極的にプロジェクトにコミットしてきました。
                            </p>
                            <p className={Style.fText}>
                                今後はさらに、実装・デザイン両方の経験があるのを生かし、よりサイト制作のデザイン・上流工程への関わりを増やしていきたいと考えています。
                            </p>
                        </div>
                    </div>
                </InView>
            </div>
        </div>
    )
}

export default Vision