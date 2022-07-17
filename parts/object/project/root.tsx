import {NextPage} from 'next'
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import Style from 'styles/object/project/root.module.sass'
import Animation from 'styles/foundation/animation.module.sass'
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import clsx from 'clsx'
import type {PostIndexList} from "@lib/posts";

interface Props {
    children: React.ReactNode
    headerColor: string
    articleDark?: boolean
    showTitle: boolean
    hasPadding?: boolean
    postList: PostIndexList
}

const Root: NextPage<Props> = ({children, headerColor, articleDark, showTitle, hasPadding, postList}: Props) => {
    const [fontActive, setFontActive] = useState(false);
    const [changeStart, setChangeStart] = useState(false)
    const [clearChildren, setClearChildren] = useState(false)
    const router = useRouter()

    const pageChangeStart = () => {
        setChangeStart(true)
    }
    const pageChangeComplete = () => {
        setChangeStart(false)
        setClearChildren(false)
    }
    const historyChange = () =>{
        setClearChildren(true)
        setFontActive(false)
    }

    useEffect(() => {
        const ts = (window as any).Ts;

        if (ts) {
            ts.onFontLoaded(() => {
                setFontActive(true)
            })
            ts.loadFont()
        }

        router.events.on('routeChangeStart', pageChangeStart)
        router.events.on('routeChangeComplete', pageChangeComplete)
        router.events.on('beforeHistoryChange', historyChange)


        return () => {
            // setClearChildren(false)
            router.events.off('routeChangeStart', pageChangeStart)
            router.events.off('routeChangeComplete', pageChangeComplete)
            router.events.off('beforeHistoryChange', historyChange)
        }
    })

    const mainContent = () => {
        if (!clearChildren) {
            return children
        }
    }


    return (
        <div className={clsx(
            Style.root,
            {[Style.hasPadding]: hasPadding},
            {[Animation.fadeInAnimation]: !changeStart},
            {[Animation.fadeOutAnimation]: changeStart},
            {[Animation.isAnimated]: fontActive}
        )}>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css"/>
                <title>rikaaa.org</title>
            </Head>
            <Script
                id="typesquare"
                type="text/javascript"
                src="//typesquare.com/3/tsst/script/ja/typesquare.js?62a9709b11cc48549c2a5d10ac1e02e5&auto_load_font=false&onload=false"
                charSet="utf-8"
                strategy={'beforeInteractive'}
            >
            </Script>
            <Script
                id={'vimeo_api'}
                src={'https://player.vimeo.com/api/player.js'}
                strategy={'beforeInteractive'}
            >
            </Script>
            <Header postList={postList} color={headerColor} title={showTitle}/>
            <article className={clsx(
                {[Style.dark]: articleDark},
            )}>
                <main>
                    {mainContent()}
                </main>
            </article>
            <Footer/>
        </div>
    )
}

export default Root