import Head from 'next/head';
import * as React from 'react';
import NavBar from '../components/NavBar'
import Slideshow from '../components/Slideshow'
import {
  ChakraProvider,
  extendBaseTheme,
  Box,
} from '@chakra-ui/react'
import "@fontsource/blinker"

const theme = extendBaseTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: 'white'
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
        },
      }
    },
  },
  breakpoints: {
    xs: '570px',
    sm: '1200px',
    md: '1320px',
    lg: '1600px'
  }
})

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <div className='loader'></div>
      <NavBar/>
      <Slideshow/>
      <div className='main-container'>
        <div className='video-container'>
        <iframe 
          width="600" 
          height="338" 
          src="https://www.youtube.com/embed/f-c_Q8Ztvnw" 
          title="Autodrive Challenge II Year 2 Highlights" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        />
        </div>
        <div className='bio-container'>
          <div className='bio-header'>
            Who we are
          </div>
          <div className='bio-body'>
            We are the Robotic Systems Enterprise at Michigan Tech: an industry-driven enterprise that focuses on solving real-world industrial and engineering problems for our sponsors. Our goal is for members to gain industry knowledge, interdisciplinary teamwork, and communication skills. From developing sensor systems for an autonomous vehicle to designing field research robots that navigate the Tech Trails, RSE projects span a wide variety of interests.
          </div>
          
        </div>
      </div>
    </ChakraProvider>
  );
}
