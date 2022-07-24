import type {AppProps} from 'next/app'
import {useEffect} from 'react'
import {AnimatePresence} from "framer-motion";
import Router from "next/router";
import 'destyle.css/destyle.css'
import '../styles/base.sass'
import '/node_modules/swiper/swiper-bundle.min.css'


function MyApp({Component, pageProps, router}: AppProps) {

    const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
            elem.removeAttribute("media");
        });
    };


    useEffect(() => {
        Router.events.on("routeChangeComplete", tempFix);
        Router.events.on("routeChangeStart", tempFix);
        return (): void => {
            Router.events.off("routeChangeComplete", tempFix);
            Router.events.off("routeChangeStart", tempFix);
        }
    })

    return (
        <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
            <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
    )
}

export default MyApp
