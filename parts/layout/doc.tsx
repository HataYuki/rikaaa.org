import {motion} from "framer-motion";
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Header from "./header";
import Footer from "./footer";
import type {PostIndexList} from "../../lib/posts";

interface Props {
    children: React.ReactNode
    postIndexList: PostIndexList
}


const Doc = ({children, postIndexList}: Props) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"/>
                <link rel="prefetch" as={'style'}
                      href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css"/>
                <link rel="prefetch stylesheet" as={'style'}
                      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

                {/*<link rel="prefetch" as={'style'} href="https://use.typekit.net/lpe1hvk.css"/>*/}
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
            <Header postIndexList={postIndexList}/>
            <article>
                <main>
                    <motion.div
                        variants={{
                            hidden: {opacity: 0, x: 0, y: -50},
                            enter: {opacity: 1, x: 0, y: 0},
                            exit: {opacity: 0, x: 0, y: -50},
                        }}
                        initial={'hidden'}
                        animate={'enter'}
                        exit={'exit'}
                        transition={{
                            duration: 0.6,
                            ease: [0, 1.03, .8, .99]
                        }}
                    >
                        <div>
                            {
                                children
                            }
                        </div>
                    </motion.div>
                </main>
            </article>
            <Footer/>
        </>
    )
}

export default Doc