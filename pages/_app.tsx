import type {AppProps} from 'next/app'
import {AnimatePresence} from "framer-motion";
import Router from "next/router";
import 'destyle.css/destyle.css'
import '../styles/base.sass'
import '/node_modules/swiper/swiper-bundle.min.css'

const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
            elem.removeAttribute("media");
        });
    };
    tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );


function MyApp({Component, pageProps, router}: AppProps) {

    return (
        <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
            <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
    )
}

export default MyApp
