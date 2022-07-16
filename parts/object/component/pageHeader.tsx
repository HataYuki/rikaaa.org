import type {NextPage} from 'next'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Autoplay} from 'swiper'
import Headline from "./headline";
import Style from 'styles/object/component/pageHeader.module.sass'
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

    SwiperCore.use([Autoplay])
    const activeSwiper = !!(srcList && srcList.length)

    const slider = () => {
        if (srcList && srcList.length) {
            return (
                <div className={Style.swiperBlock}>
                    <div className={Style.swiperWrapper}>
                        <Swiper className={Style.swiper}
                                spaceBetween={0}
                                loop={true}
                                speed={300}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                        >
                            {
                                srcList.map((src, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Image src={src} layout={'fill'} objectFit={'cover'}
                                                   loading={'eager'}></Image>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
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