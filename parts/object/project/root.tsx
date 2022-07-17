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
    // const [showPage, setShowPage] = useState(false);
    const [pageChanging, setPageChanging] = useState(false)
    const router = useRouter()

    // const handleFontLoad = () => {
    //     const ts = (window as any).Ts;
    //     if (ts) {
    //         ts.onFontLoaded(() =>  setShowPage(true))
    //         ts.loadFont()
    //     }
    // }

    const handleChange = () => {
        setPageChanging(true)
        // setShowPage(false)
    }
    const handleComplete = () => {
        setPageChanging(false)
        // setShowPage(true)
    }

    useEffect(() => {
        router.events.on('routeChangeStart', handleChange)
        router.events.on('routeChangeComplete', handleComplete)
        return () => {
            router.events.off('routeChangeStart', handleChange)
            router.events.off('routeChangeComplete', handleComplete)
        }
    })

    return (
        <div className={clsx(
            Style.root,
            {[Style.hasPadding]: hasPadding},
            {[Animation.pageOut]:pageChanging},
            {[Animation.pageIn]:!pageChanging}
            // Animation.fadeInAnimation,
            // {[Animation.isAnimated]: showPage}
        )}>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>
                <link rel="prefetch" as={'style'}
                      href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css"/>
                <title>rikaaa.org</title>
            </Head>
            <Script
                id="typesquare"
                type="text/javascript"
                src="//typesquare.com/3/tsst/script/ja/typesquare.js?62a9709b11cc48549c2a5d10ac1e02e5&auto_load_font=true&onload=true&fadein=-1"
                charSet="utf-8"
                async={true}
                strategy={'lazyOnload'}
            >
            </Script>

            <Header postList={postList} color={headerColor} title={showTitle}/>
            <article
                className={clsx(
                    {[Style.dark]: articleDark}
                )}>
                <main>
                    {children}
                </main>
            </article>
            <Footer/>
        </div>
    )
}

export default Root