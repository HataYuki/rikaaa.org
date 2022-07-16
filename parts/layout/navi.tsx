import type {NextPage} from 'next'
import React, {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Style from 'styles/layout/navi.module.sass'
import clsx from 'clsx'
import Link from "next/link";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import type {PostIndexList} from "@lib/posts";

interface Props {
    addSwiper: any
    visibility: boolean
    onClick?: (e: any) => void
    postList: PostIndexList
}

const Navi: NextPage<Props> = ({visibility, onClick, addSwiper, postList}: Props) => {
    const [swiper, setSwiper] = useState<any>(undefined)
    const [activeSwiper, setActiveSwiper] = useState(false)
    const [isMenu, setIsMenu] = useState('project')
    const [imgBg, setImgBg] = useState<string>('')
    const [posts, setPosts] = useState<PostIndexList>([])

    const slideNext = (isMenu: string) => {
        setIsMenu(isMenu)
        if (activeSwiper) {
            swiper.slideNext()
        }

        let list: PostIndexList;
        if (isMenu === 'project') {
            list = postList.filter(post => post.projectType === 'client')
        } else {
            list = postList.filter(post => post.projectType === 'self')
        }

        if (list.length) {
            setImgBg(list[0].eyeCatch[0])
        }

        setPosts(list)
    }
    const slidePrev = () => {
        if (activeSwiper) {
            swiper.slidePrev()
        }

        setImgBg('')
    }
    const handleClick = (e: any) => {
        if (onClick) {
            onClick(swiper)
        }
    }


    return (
        <nav className={
            clsx(
                Style.root,
                {[Style.inVisible]: !visibility},
                {[Style.visible]: visibility}
            )
        }>

            <div>
                <div className={Style.bg} style={{backgroundImage: `url(${imgBg})`}}/>
                <div>
                    <Swiper
                        allowTouchMove={false}
                        onSwiper={(swiper) => {
                            setSwiper(swiper)
                            addSwiper(swiper)
                            setActiveSwiper(true)
                        }}
                    >
                        <SwiperSlide>
                            <ul>
                                <li>
                                    <button className={Style.fSubHeadLine} onClick={() => slideNext('project')}>
                                        PROJECT
                                    </button>
                                </li>
                                <li>
                                    <button className={Style.fSubHeadLine} onClick={() => slideNext('my_project')}>
                                        MY PROJECT
                                    </button>
                                </li>
                                <li>
                                    <Link href={'/aboutme'}>
                                        <a className={Style.fSubHeadLine} href="" onClick={handleClick}>
                                            ABOUT ME
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Style.workList}>
                                <div>
                                    <button onClick={slidePrev}>
                                        <AiOutlineArrowLeft/>
                                    </button>
                                    <ul>
                                        {
                                            [
                                                <li key={0}>
                                                    <Link href={`/work/all/${isMenu}`}>
                                                        <a href="" onClick={handleClick}>
                                                            ALL
                                                        </a>
                                                    </Link>
                                                </li>,
                                                ...posts.map((post, i) => {
                                                    return (
                                                        <li key={i + 1} onMouseEnter={() => setImgBg(post.eyeCatch[0])}>
                                                            <Link href={`/work/${post.slug}`}>
                                                                <a href="" onClick={handleClick}>
                                                                    {post.headLine.en.toUpperCase()}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            ]
                                        }
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </nav>
    )
}

export default Navi