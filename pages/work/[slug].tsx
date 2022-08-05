import type {NextPage, GetStaticPaths, GetStaticProps} from 'next'
import {useState} from "react"
import Styles from '/styles/pages/slug.module.sass'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Autoplay, EffectFade, Pagination} from 'swiper'
import Doc from "../../parts/layout/doc";
import Image from 'next/image'
import FadeIn from "../../parts/component/fadeIn";
import type {Post, PostIndexList} from 'lib/posts'
import {getPost, getPostIdSlugList, getPostIndexList} from "lib/posts";
import clsx from 'clsx'
import Headline from "../../parts/component/headline";
import LineText from "../../parts/component/lineText";
import LazyLoadVideo from "../../parts/component/lazyLoadVideo";
import Definition from "../../parts/component/definition";
import {useIsDark} from "../../lib/useIsDark";

interface Props {
    post: Post
    postIndexList: PostIndexList
}

export const getStaticPaths: GetStaticPaths = async () => {
    const idSlugList = await getPostIdSlugList()
    const slugList = idSlugList.map(idSlug => `/work/${idSlug.slug}`)
    return {
        paths: slugList,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = (context.params && context.params.slug) ? context.params.slug : '';
    const idSlugList = await getPostIdSlugList()
    const aIdSlug = idSlugList.filter(idSlug => idSlug.slug === slug)
    let id: string = ''
    if (aIdSlug.length) {
        id = aIdSlug[0].id
    }

    const post = await getPost(id)
    const postIndexList = await getPostIndexList()
    return {
        props: {
            post: post,
            postIndexList: postIndexList
        }
    }
}

const Slug: NextPage<Props> = ({post, postIndexList}) => {
    SwiperCore.use([Autoplay, EffectFade, Pagination])

    const eyeCatch = post.eyeCatch;
    const [swiperBullet, setSwiperBullet] = useState<boolean[]>((eyeCatch && eyeCatch.length) ? eyeCatch.map(() => false) : [])
    const isDark = useIsDark()

    const env = () => {
        if (post.environment.length > 1) {
            return (
                <section className={clsx(Styles.mb200)}>
                    <div className={clsx(Styles.mw980)}>
                        <div className={clsx(Styles.sideSpace_mg)}>
                            <FadeIn type={'fadeUp'}>
                                <Headline level={2}
                                          className={clsx(Styles.mw300, Styles.mb123, Styles.headline_fs_size)}
                                          barStyle={clsx({[Styles.bgColor_white]:isDark})}
                                >
                                    {{
                                        en: ('environment'),
                                        ja: ('つかったもの')
                                    }}
                                </Headline>
                            </FadeIn>

                            <FadeIn type={'fadeUp'}>
                                <ul className={clsx(Styles.flex, Styles.env)}>
                                    {
                                        post.environment.map((item, i) => {
                                            return (
                                                <li
                                                    className={clsx(
                                                        Styles.mb17,
                                                        Styles.env__item,
                                                        {[Styles.bgColor_gray]:!isDark},
                                                        {[Styles.bgColor_lightBlack]:isDark},
                                                    )}
                                                    key={i}>
                                                    {
                                                        item
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            )
        }

    }

    return (
        <Doc postIndexList={postIndexList}>
            <section
                className={clsx(
                    Styles.mb200,
                    Styles.headline,
                    {[Styles.bgColor_gray]: !isDark},
                    {[Styles.bgColor_lightBlack]: isDark},
                )}
            >
                <FadeIn type={'fadeUp'} className={clsx(Styles.h100)}>
                    <div className={clsx(Styles.mw1380, Styles.h100)}>
                        <div className={clsx(Styles.sideSpace_mg, Styles.h100)}>
                            <div className={clsx(Styles.relative, Styles.h100)}>

                                <div className={clsx(Styles.headline__eyeCatchContainer, Styles.absolute_centerCenter)}>
                                    <div
                                        className={clsx(
                                            Styles.headline__bulletList,
                                            Styles.flex,
                                            Styles.mb17
                                        )}
                                    >
                                        {
                                            swiperBullet.map((bool, i) => {
                                                return (
                                                    <span
                                                        key={i}
                                                        className={clsx(
                                                            Styles.headline__bullet,
                                                            {[Styles.headline__currentBullet]: bool},
                                                            {[Styles.dark]: isDark},
                                                            {[Styles.light]: !isDark},
                                                        )}
                                                    >

                                        </span>
                                                )
                                            })
                                        }
                                    </div>
                                    <Swiper
                                        className={clsx(Styles.mb46)}
                                        spaceBetween={0}
                                        loop={true}
                                        speed={600}
                                        effect={'fade'}
                                        fadeEffect={{crossFade: true}}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false
                                        }}
                                        onSlideChange={({realIndex}) => {
                                            setSwiperBullet(swiperBullet.map((bool, i) => (realIndex === i) ? true : false))
                                        }}
                                    >
                                        {
                                            post.eyeCatch.map((img, i) => {
                                                return (
                                                    <SwiperSlide key={i}>
                                                        <div
                                                            className={clsx(Styles.headline__eyeCatch, Styles.relative)}>
                                                            <Image
                                                                src={img}
                                                                layout={'responsive'}
                                                                loading={'eager'}
                                                                priority={true}
                                                                width={100}
                                                                height={100}
                                                                objectFit={'contain'}
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>

                                    <Headline
                                        level={1}
                                        className={clsx(
                                            Styles.headline__title,
                                            Styles.absolute_centerAuto,
                                            {[Styles.fontColor_darkGray]: !isDark},
                                        )}
                                        barStyle={clsx({[Styles.bgColor_white]: isDark})}
                                    >
                                        {{
                                            en: (post.headLine.en),
                                            ja: (post.headLine.ja)
                                        }}
                                    </Headline>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

            </section>

            <section className={clsx(Styles.mw980, Styles.mb123)}>
                <div className={clsx(Styles.sideSpace_mg)}>
                    <FadeIn type={'left'}>
                        <h2 className={clsx(Styles.copy, Styles.mb76)}>
                            <LineText
                                className={clsx(
                                    Styles.text_center,
                                    Styles.fontMedium,
                                    Styles.copy__text
                                )}
                                barStyle={clsx(
                                    {[Styles.bgColor_black]: !isDark},
                                    {[Styles.bgColor_white]: isDark},
                                )}>
                                {
                                    post.description.copy
                                }
                            </LineText>
                        </h2>
                    </FadeIn>
                    <FadeIn type={'left'}>
                        <div className={clsx(Styles.article)}>
                            {
                                post
                                    .description
                                    .article
                                    .split('\n')
                                    .filter(paragraph => (paragraph))
                                    .map((paragraph, i) => {
                                        return (
                                            <p key={i} className={clsx(Styles.article__paragraph)}>
                                                {
                                                    paragraph
                                                }
                                            </p>
                                        )
                                    })
                            }
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className={clsx(Styles.mb200)}>
                <div className={clsx(Styles.mw1380)}>
                    <FadeIn type={'fade'}>
                        <div className={clsx(Styles.sideSpace_mg)}>
                            {
                                post.media.map((media, i) => {
                                    if (media.image) {
                                        return (
                                            <div
                                                className={clsx(
                                                    Styles.media,
                                                    Styles.mb17,
                                                    {[Styles.bgColor_gray]: !isDark},
                                                    {[Styles.bgColor_lightBlack]: isDark},
                                                )}
                                                key={i}
                                            >
                                                <div
                                                    className={clsx(Styles.sideSpace_pd, Styles.media__container, Styles.pt17, Styles.pb17)}>
                                                    <Image
                                                        src={media.image}
                                                        layout={'responsive'}
                                                        objectFit={'contain'}
                                                        width={100}
                                                        height={media.imageSize[1] / media.imageSize[0] * 100}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                    if (media.video.length) {
                                        return (
                                            <div
                                                className={clsx(
                                                    Styles.media,
                                                    Styles.mb17,
                                                    {[Styles.bgColor_gray]: !isDark},
                                                    {[Styles.bgColor_lightBlack]: isDark},
                                                )}
                                                key={i}
                                            >
                                                <div
                                                    className={clsx(Styles.sideSpace_pd, Styles.media__container, Styles.pt17, Styles.pb17)}>
                                                    <LazyLoadVideo
                                                        className={Styles.media__video}
                                                        srcList={media.video}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </FadeIn>
                </div>
            </section>

            {
                env()
            }

            <section className={clsx(Styles.mb200)}>
                <div className={clsx(Styles.mw980)}>
                    <div className={clsx(Styles.sideSpace_mg)}>
                        <Definition>
                            {{
                                items: (
                                    post.overview.map(item => {
                                        return [
                                            item.term,
                                            ...item.description
                                        ]
                                    })
                                )
                            }}
                        </Definition>
                    </div>
                </div>
            </section>
        </Doc>
    )
}

export default Slug