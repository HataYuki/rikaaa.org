import type {NextPage} from 'next'
import React, {useState} from 'react'
import Style from 'styles/layout/header.module.sass'
import Container from './container'
import Navi from './navi';
import Link from 'next/link'
import clsx from 'clsx'
import type {PostIndexList} from "@lib/posts";

interface Props {
    onClick?: (e: any) => void
    title: boolean
    color: string
    postList: PostIndexList
}

const Header: NextPage<Props> = ({onClick, title, color, postList}: Props) => {

    const [naviVisible, setNaviVisible] = useState(false);
    const [swiper, setSwiper] = useState<any>(undefined)

    const handleClick = (e: any) => {
        setNaviVisible(!naviVisible);
        if (onClick) {
            onClick(e);
        }
        if (swiper) {
            swiper.slidePrev()
        }
    }

    return (
        <header className={clsx(
            Style.root,
            {[Style.dark]: (color === 'dark' && !naviVisible)},
            {[Style.light]: (color === 'light' || naviVisible)},
            {[Style.showTitle]: title}
        )}>
            <Container>
                <div className={Style.content}>
                    <h1 className={Style.fHeadLine}>
                        <Link href={'/'}>
                            <a href="">
                                RIKAAA.ORG
                            </a>
                        </Link>
                    </h1>
                    <div className={clsx(
                        Style.btnRoot,
                        {[Style.isOpen]: naviVisible}
                    )}>
                        <button onClick={handleClick}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </Container>
            <Navi addSwiper={setSwiper} visibility={naviVisible} postList={postList} onClick={() => {
                setNaviVisible(false)
            }}/>
        </header>
    );
}

export default Header;

