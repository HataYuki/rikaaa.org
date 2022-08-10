import Head from 'next/head'
import Script from 'next/script'
import React, {useEffect} from 'react'
import Header from "./header";
import Footer from "./footer";
import {useIsDark} from "../../lib/useIsDark";

interface Props {
    children: React.ReactNode
}


const Doc = ({children}: Props) => {
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
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;700&display=swap"
                      rel="stylesheet"/>
                <link rel={'preload'} as={'font'} href={'/fonts/ABCMonumentGrotesk-Bold-Trial.woff2'} />
                <link rel={'preload'} as={'font'} href={'/fonts/ABCMonumentGrotesk-Bold-Trial.woff'} />
                <link rel={'preload'} as={'font'} href={'/fonts/ABCMonumentGrotesk-Light-Trial.woff2'} />
                <link rel={'preload'} as={'font'} href={'/fonts/ABCMonumentGrotesk-Light-Trial.woff'} />
                <title>rikaaa.org</title>
            </Head>
            <Header />
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