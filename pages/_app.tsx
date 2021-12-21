import '../styles/globals.css'
import Head from 'next/head'

import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Head>
          <link
            rel="bookmark-icon"
            href="/icons/bookmark.png"
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="description" content="a web for saving notes" />
          <html lang="en" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
