import Head from 'next/head'
import Script from 'next/script'
import React, {useEffect} from 'react'
import Header from "./header";
import Footer from "./footer";
import type {PostIndexList} from "../../lib/posts";
import {useIsDark} from "../../lib/useIsDark";

interface Props {
    children: React.ReactNode
    postIndexList: PostIndexList
}


const Doc = ({children, postIndexList}: Props) => {
    const isDark = useIsDark()
    const addBodyClass = (className: string) => document.body.classList.add(className)
    const removeBodyClass = (className: string) => document.body.classList.remove(className)

    useEffect(() => {
        if(isDark){
            removeBodyClass('light')
            addBodyClass('dark')
        }else{
            removeBodyClass('dark')
            addBodyClass('light')
        }
    })

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
                      rel="stylesheet"/>
                <title>rikaaa.org</title>
            </Head>
            <Script
                id="typesquare"
                type="text/javascript"
                src="//typesquare.com/3/tsst/script/ja/typesquare.js?62a9709b11cc48549c2a5d10ac1e02e5&onload=true&fadein=-1"
                charSet="utf-8"
                async={true}
                strategy={'beforeInteractive'}
            >
            </Script>
            <Header postIndexList={postIndexList}/>
            <article>
                <main>
                    {
                        children
                    }
                </main>
            </article>
            <Footer/>
        </>
    )
}

export default Doc