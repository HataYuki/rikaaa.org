import type {AppProps} from 'next/app'
import {useEffect} from 'react'
import Router from "next/router";
import 'destyle.css/destyle.css'
import '../styles/base.sass'
import '/node_modules/swiper/swiper-bundle.min.css'


function MyApp({Component, pageProps}: AppProps) {

    const tempFix = () => window.scrollTo(0,0);


    useEffect(() => {
        Router.events.on("routeChangeComplete", tempFix);
        Router.events.on("routeChangeStart", tempFix);
        return (): void => {
            Router.events.off("routeChangeComplete", tempFix);
            Router.events.off("routeChangeStart", tempFix);
        }
    })

    return (
        <Component {...pageProps} />
    )
}

export default MyApp
