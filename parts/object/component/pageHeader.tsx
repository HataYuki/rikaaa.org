import type {NextPage} from 'next'
import {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Autoplay, EffectFade, Pagination} from 'swiper'
import Headline from "./headline";
import Style from 'styles/object/component/pageHeader.module.sass'
import Animation from 'styles/foundation/animation.module.sass'
import {InView} from 'react-intersection-observer'
import Container from "../../layout/container";
import Image from 'next/image'
import clsx from 'clsx'

interface Obj {
    en: string
    ja?: string
}

interface Props {
    children: Obj
    onIntersect?: (e: any) => void
    srcList?: Array<string>
}

const PageHeader: NextPage<Props> = ({children, srcList, onIntersect}: Props) => {

    SwiperCore.use([Autoplay, EffectFade, Pagination])
    const activeSwiper = !!(srcList && srcList.length)

    const [showSwiper, setShowSwiper] = useState(false)
    const [swiperBullet, setSwiperBullet] = useState<boolean[]>((srcList && srcList.length) ? srcList.map(() => false) : [])

    const slider = () => {
        if (srcList && srcList.length) {
            return (
                <div className={Style.swiperBlock}>
                    <InView
                        className={clsx(
                            Style.swiperWrapper,
                            Animation.fadeInZoomOutAnimation,
                            {[Animation.isAnimated]: showSwiper}
                        )}
                        triggerOnce={true}
                        onChange={(InView, entry) => setShowSwiper(entry.isIntersecting)}
                    >
                        <Swiper className={Style.swiper}
                                spaceBetween={0}
                                loop={true}
                                speed={600}
                                effect={'fade'}
                                fadeEffect={{crossFade: true}}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                onSlideChange={({realIndex}) => {
                                    setSwiperBullet(swiperBullet.map((bool, i) => {
                                        return (realIndex === i) ? true : false
                                    }))
                                }}
                        >
                            {
                                srcList.map((src, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Image src={src} layout={'fill'} objectFit={'cover'}
                                                   loading={'eager'} priority={true}></Image>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <div className={Style.bulletList}>
                            {
                                swiperBullet.map((bool, i) => {
                                    return (
                                        <span
                                            key={i}
                                            className={clsx(
                                                Style.bullet,
                                                {[Style.current]: bool}
                                            )}
                                        >

                                        </span>
                                    )
                                })
                            }
                        </div>
                    </InView>
                </div>
            )
        }
    }

    return (
        <div className={clsx(
            Style.root,
            {[Style.noSwiper]: !activeSwiper}
        )}>
            <Container onIntersect={onIntersect}>
                <div className={Style.inner}>
                    <div className={Style.textBlock}>
                        <Headline className={Style.text}>
                            {{
                                en: (children.en),
                                ja: (children.ja)
                            }}
                        </Headline>
                    </div>
                    {slider()}
                </div>
            </Container>
        </div>
    )
}

export default PageHeader