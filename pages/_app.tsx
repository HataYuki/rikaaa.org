import "normalize.css/normalize.css"
import "destyle.css/destyle.css"
import '../styles/foundation/base.sass'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
