import type {NextPage} from 'next'
import React, {useState} from 'react'
import Style from 'styles/layout/header.module.sass'
import Container from './container'
import Navi from './navi';
import Link from 'next/link'
import clsx from 'clsx'

interface Props {
    onClick?: (e: any) => void
    title: boolean
    color: string
}

const Header: NextPage<Props> = ({onClick, title, color}: Props) => {

    const [naviVisible, setNaviVisible] = useState(false);

    const handleClick = (e: any) => {
        setNaviVisible(!naviVisible);
        if (onClick) {
            onClick(e);
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
                {naviVisible}
                <div className={Style.content}>
                    <h1 className={Style.fHeadLine}>
                        <Link href={'/'}>
                            <a href="">
                                RIKAAA.ORG
                            </a>
                        </Link>
                    </h1>
                    <div className={Style.btnRoot}>
                        <button onClick={handleClick}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </Container>
            <Navi visibility={naviVisible} onClick={()=>{
                setNaviVisible(false)
            }}/>
        </header>
    );
}

export default Header;

