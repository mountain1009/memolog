import type { AppProps } from 'next/app'
import Header from "../components/Header";
import Head from "next/head"
import GlobalStyle from "../styles/global";


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" />
          </Head>
        <Header/>
          <GlobalStyle/>
        <Component {...pageProps} />
      </>
  )
}
export default MyApp
