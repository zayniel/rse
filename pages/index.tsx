import Head from 'next/head';
import * as React from 'react';
import NavBar from '../components/NavBar'
import Slideshow from '../components/Slideshow'
import {
  ChakraProvider,
  extendTheme,
  Box,
} from '@chakra-ui/react'
import "@fontsource/blinker"
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'

const theme = extendTheme({
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
    xs: '650px',
    sm: '1200px',
    md: '1320px',
    lg: '1600px'
  }
})

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar/>
      <Slideshow/>
      <div className='main-container'>
        <div className='video-container'>
        <iframe 
          src="https://www.youtube.com/embed/f-c_Q8Ztvnw" 
          title="Autodrive Challenge II Year 2 Highlights" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        />
        </div>
        <div className='bio-container'>
          <h4><b>Who we are</b></h4>
          <hr className='new1'></hr>
          <p>We are the Robotic Systems Enterprise at Michigan Tech: an industry-driven enterprise that focuses on solving real-world industrial and engineering problems for our sponsors. Our goal is for members to gain industry knowledge, interdisciplinary teamwork, and communication skills. From developing sensor systems for an autonomous vehicle to designing field research robots that navigate the Tech Trails, RSE projects span a wide variety of interests.</p>
          <hr className='new2'></hr>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-explore'>
            <h5>Explore</h5>
            <hr className='new3'/>
            <a href='#'>Home</a>
            <a href='#'>AutoDrive II</a>
            <a href='#'>Projects</a>
            <a href='#'>Teams</a>
            <a href='#'>Home</a>
          </div>
          <div className='footer-location'>
            <h5>Location</h5>
            <hr className='new4'/>
            <div>Electrical Energy Resources Center Lab 809, Houghton, MI 49931</div>
          </div>
          <div className='footer-social'>
            <h5>Socials</h5>
            <hr className='new5'/>
            <div className='social-container'>
              <button className='social'><BsInstagram/></button>
              <button className='social'><RiTwitterXFill/></button>
              <button className='social'><BsFacebook/></button>
            </div>
          </div>
        </div>
        <div className='copyright'>
            © 2023 Michigan Technological University
        </div>
      </div>
    </ChakraProvider>
  );
}
