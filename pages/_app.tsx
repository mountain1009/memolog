import type { AppProps } from 'next/app'
import Header from "../components/Header";
import Head from "next/head"
import GlobalStyle from "../styles/global";
import { ThemeProvider } from 'styled-components';
import {theme} from "../styles/theme";
import styled from 'styled-components'

const Main = styled.main`
  background: ${({ theme }) => theme.colors.base};
  height: calc(100vh - ${({ theme }) => theme.header.height});
  margin: 0 auto;
  ${theme.media.sp`
    width: 100vw;
  `}
  ${theme.media.tab`
    width: 90vw;
  `}
  ${theme.media.pc`
    width: 90vw;
  `}
`;


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" />
          </Head>
          <ThemeProvider theme={theme}>
              <Header />
              <GlobalStyle/>
              <Main>
                <Component {...pageProps} />
              </Main>
          </ThemeProvider>
      </>
  )
}
export default MyApp
