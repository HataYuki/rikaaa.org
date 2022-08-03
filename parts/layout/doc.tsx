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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""} />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css" />
                <title>rikaaa.org</title>
            </Head>
            <Script
                id="typesquare"
                type="text/javascript"
                src="//typesquare.com/3/tsst/script/ja/typesquare.js?62a9709b11cc48549c2a5d10ac1e02e5&onload=true&fadein=-1"
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
                        {
                            children
                        }
                    </motion.div>
                </main>
            </article>
            <Footer/>
        </>
    )
}

export default Doc