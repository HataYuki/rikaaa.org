import '../styles/base.sass'
import 'destyle.css/destyle.css'
import 'normalize.css/normalize.css'
import '/node_modules/swiper/swiper-bundle.min.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
