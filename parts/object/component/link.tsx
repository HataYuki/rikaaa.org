import type {NextPage} from 'next'
import {useState} from 'react'
import Style from "@styles/object/component/link.module.sass"
import Animation from 'styles/foundation/animation.module.sass'
import Headline from "./headline";
import {InView} from 'react-intersection-observer'
import Image from 'next/image'
import clsx from 'clsx'

const Link: NextPage = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={Style.root}>
            <Headline align={'center'}>
                {{
                    en: ('link')
                }}
            </Headline>
            <InView
                className={clsx(
                    Animation.fadeInUpAnimation,
                    {[Animation.isAnimated]: show}
                )}
                threshold={0.5}
                triggerOnce={true}
                onChange={(InView, entry) => setShow(entry.isIntersecting)}
            >
                <ul>
                    {
                        [
                            ['https://github.com/HataYuki/', '/github_logo.svg'],
                            ['https://vimeo.com/user18693731', '/vimeo_logo.svg']
                        ].map((link, i) => {
                            return (
                                <li key={i}>
                                    <a rel={'noreferrer'} href={link[0]} target={'_blank'}>
                                        <Image src={link[1]} width={80} height={21}></Image>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </InView>
        </div>
    )
}

export default Link