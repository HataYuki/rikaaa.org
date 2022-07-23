import type {AppProps} from 'next/app'
import {AnimatePresence} from "framer-motion";
import 'destyle.css/destyle.css'
import '../styles/base.sass'
import '/node_modules/swiper/swiper-bundle.min.css'

import {getPostIndexList} from "../lib/posts";



function MyApp({Component, pageProps, router}: AppProps) {
    return (
        <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
            <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
    )
}

export default MyApp
