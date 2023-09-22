import '/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Robotic Systems Enterprise</title>
        <meta name='author' content='Zayne Pepin'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <meta name='description' content='Informational Site for Robotic Systems Enterprise at Michigan Technological University'/>
        <meta name='keywords' content='Robotics, Systems, Enterprise, Michigan Tech'/>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}