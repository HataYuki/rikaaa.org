import "normalize.css/normalize.css"
import "destyle.css/destyle.css"
import '../styles/foundation/base.sass'
import '/node_modules/swiper/swiper-bundle.min.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
