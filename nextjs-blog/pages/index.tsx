import Head from 'next/head';
import * as React from 'react';
import NavBar from '../components/NavBar'
import {
  ChakraProvider,
  extendBaseTheme,
  Box,
} from '@chakra-ui/react';
import "@fontsource/blinker"

const theme = extendBaseTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: '#f6f6f6'
      }
    })
  },
  components: {
    Text: {
      variants: {
        'title': {
          fontFamily: 'Blinker'
        },
        'sub-title': {
          fontFamily: 'Blinker'
        }
      }
    }
  },
  breakpoints: {
    sm: '200px',
    md: '500px',
    lg: '1000px'
  }
})

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar></NavBar>
    </ChakraProvider>
  );
}
