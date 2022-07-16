import type {NextPage} from "next";
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Style from "/styles/object/component/mainVisual.module.sass";
import {InView} from 'react-intersection-observer'
import Container from "../../layout/container"
import TextBtn from "./textBtn";
import {AiOutlineArrowDown} from 'react-icons/ai'
import clsx from 'clsx'

interface Props {
    onIntersect?: (e: boolean) => void
}

const MainVisual: NextPage<Props> = ({onIntersect}: Props) => {
    const router = useRouter()
    const [winH, setWinH] = useState(0)
    useEffect(() => setWinH(innerHeight || document.documentElement.clientHeight))
    const maxHeightStyle = {
        maxHeight: (!winH) ? 'auto' : `${winH}px`
    }
    return (
        <InView
            className={Style.root}
            onChange={(inView, entry) => {
                const {isIntersecting} = entry;
                if (onIntersect) {
                    onIntersect(isIntersecting)
                }
            }}
        >
            <div className={Style.block} style={maxHeightStyle}>
                <iframe
                    src="https://player.vimeo.com/video/729215901?background=1&autoplay=1&loop=1&byline=0&title=0"
                    frameBorder="0"
                >
                </iframe>
                <Container>
                    <div className={Style.titleBlock}>
                        <ul className={clsx(
                            Style.fHeadLine,
                            Style.menu
                        )}>
                            <li>
                                <TextBtn showArrow={false} onClick={()=>router.push('/work/all/project')}>
                                    project
                                </TextBtn>
                            </li>
                            <li>
                                <TextBtn showArrow={false} onClick={()=>router.push('/work/all/project')}>
                                    my project
                                </TextBtn>
                            </li>
                            <li>
                                <TextBtn showArrow={false} onClick={()=>router.push('/work/all/project')}>
                                    about
                                </TextBtn>
                            </li>
                        </ul>
                        <div>
                            <h1>RIKAAA.ORG</h1>
                            <p>IS</p>
                            <p>HATA YUKI</p>
                            <p>PORTFOLIO SITE.</p>
                        </div>
                        <button className={Style.downBtn} onClick={()=>scrollTo({top:winH,behavior:'smooth'})}>
                            <AiOutlineArrowDown/>
                        </button>
                    </div>
                </Container>
            </div>
        </InView>
    );
}

export default MainVisual;