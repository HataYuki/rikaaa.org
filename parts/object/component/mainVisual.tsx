import type {NextPage} from "next";
import {useState, useEffect, useRef} from 'react'
import {useRouter} from 'next/router'
import Style from "/styles/object/component/mainVisual.module.sass"
import Animation from '/styles/foundation/animation.module.sass'
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
    const [vimeoReady, setVimeoReady] = useState(false)
    const vimeo = useRef(null)
    useEffect(() => {
        setWinH(innerHeight || document.documentElement.clientHeight)

        const Vimeo = (window as any).Vimeo
        if (Vimeo) {
            const player = new Vimeo.Player(vimeo.current)

            player.ready().then(() => setVimeoReady(true))
        }
    })
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
            <iframe
                className={clsx(
                    Style.vimeo,
                    Animation.fadeInAnimation,
                    {[Animation.isAnimated]: vimeoReady}
                )}
                src="https://player.vimeo.com/video/729215901?background=1&autoplay=1&loop=1&byline=0&title=0"
                frameBorder="0"
                ref={vimeo}
            >
            </iframe>
            <Container className={Style.overlay}>
                <div className={clsx(
                    Style.overlayItem,
                    Animation.fadeInFromLeftAnimation,
                    {[Animation.isAnimated]: vimeoReady}
                )}>
                    <ul className={clsx(
                        Style.fHeadLine,
                        Style.menu
                    )}>
                        {
                            [
                                ['project', '/work/all/project'],
                                ['my project', '/work/all/my_project'],
                                ['about me', '/about_me'],
                            ].map((link, i) => {
                                return (
                                    <li className={Style.menuItem} key={i}>
                                        <TextBtn showArrow={false}
                                                 onClick={() => router.push(link[1])}
                                        >
                                            {link[0]}
                                        </TextBtn>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={Style.title}>
                        <h1>RIKAAA.ORG</h1>
                        <p>IS</p>
                        <p>HATA YUKI</p>
                        <p>PORTFOLIO SITE.</p>
                    </div>
                    <button className={Style.downBtn}
                            onClick={() => scrollTo({top: winH, behavior: 'smooth'})}>
                        <AiOutlineArrowDown/>
                    </button>
                </div>
            </Container>
        </InView>
    );
}

export default MainVisual;