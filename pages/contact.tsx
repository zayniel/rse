import * as React from 'react';
import NavBar from '../components/NavBar'
import {
  ChakraProvider,
  extendTheme,
  LightMode,
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
      <LightMode>
      <NavBar/>
      <div className='image-container'>
        <img className='image' src='./contact_photo.jpg'></img>
      </div>
      <div className='main-container'>
        <div className='contact-container'>
          <h4><b>Contact Us</b></h4>
          <hr className='new1'></hr>
          If you have any questions about joining the enterprise or would like more information, please fill out the contact form and we will get back to you as soon as possible.
          <hr className='new2'></hr>
          <img className='contact-logo' src='./logo.png'></img>
        </div>
        <div>
          <iframe id='iframe2' src="https://docs.google.com/forms/d/e/1FAIpQLSf-M1ZPwutLSLaCP-w4aQAMw_HXb2VzfRxbaxhwYDWpszY9Ow/viewform?embedded=true" /*style={{height: '70vw', width: '100vw'}}*/>Loading…</iframe>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-explore'>
            <h5>Explore</h5>
            <hr className='new3'/>
            <a href='https://rse-mtu.vercel.app'>Home</a>
            <a href='/autodrive'>AutoDrive II</a>
            <a href='/projects'>Projects</a>
            <a href='/teams'>Teams</a>
            <a href='/contact'>Contact Us</a>
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
              <a href='https://www.instagram.com/mturobotics/' target='_blank' rel='noopener noreferrer'><button className='social'><BsInstagram/></button></a>
              <a href='https://twitter.com/MTUAutoDrive/' target='_blank' rel='noopener noreferrer'><button className='social'><RiTwitterXFill/></button></a>
              <a href='https://m.facebook.com/MichiganTechRoboticSystemsEnterprise/' target='_blank' rel='noopener noreferrer'><button className='social'><BsFacebook/></button></a>
            </div>
          </div>
        </div>
        <div className='copyright'>
            © 2023 Michigan Technological University • Designed by Zayne Pepin
        </div>
      </div>
      </LightMode>
    </ChakraProvider>
  );
}