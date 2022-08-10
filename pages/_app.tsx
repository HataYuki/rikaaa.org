import type {AppProps} from 'next/app'
import {useEffect, createContext} from 'react'
import Router from "next/router";
import 'yakuhanjp'
import 'destyle.css/destyle.css'
import '../styles/base.sass'
import '/node_modules/swiper/swiper-bundle.min.css'
import data from 'data.json'
import type {PostIndexList} from "../lib/posts";

interface Context {
    postIndexList: PostIndexList
}

export const AppContext = createContext<Context>({postIndexList:data})

function MyApp({Component, pageProps}: AppProps) {
    const tempFix = () => window.scrollTo(0, 0);


    useEffect(() => {
        Router.events.on("routeChangeComplete", tempFix);
        Router.events.on("routeChangeStart", tempFix);
        return (): void => {
            Router.events.off("routeChangeComplete", tempFix);
            Router.events.off("routeChangeStart", tempFix);
        }
    })

    return (
        <AppContext.Provider value={{postIndexList:data}}>
            <Component {...pageProps} />
        </AppContext.Provider>
    )
}

export default MyApp
