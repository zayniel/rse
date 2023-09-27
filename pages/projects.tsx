import * as React from 'react';
import NavBar from '../components/NavBar'
import Slideshow from '../components/Slideshow'
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
        <img className='image' src='./projects.jpg'></img>
      </div>
      <div className='main-container'>
        <div className='bio-container'>
          <h4><b>Projects</b></h4>
          <hr className='new7'></hr>
          <p>The Robotic Systems Enterprise has offered a number of projects over the years. Members of RSE are divided into subgroups to work on each of our projects. We use dynamic teams to create an environment of growth that fosters feelings of contribution and confidence.</p>
          <hr className='new2'></hr>
        </div>
      </div>
      <div className='projects-container'>
        <div className='project-grid'>
          <div className='project-content'>
            <img className='project' src='./autodrive2.png'/>
            <h6>AutoDrive II</h6>
          </div>
          <div className='project-content'>
            <img className='project' src='./rov.png'/>
            <h6>Underwater ROV</h6>
          </div>
          <div className='project-content'>
            <img className='project' src='./zumo.png'/>
            <h6>Aurora Minor</h6>
          </div>
          <div className='project-content'>
            <img className='project' src='./borealis.png'/>
            <h6>AutoDrive I</h6>
          </div>
          <div className='project-content'>
            <img className='project' src='./jackal.png'/>
            <h6>GVSC Leader-Follower</h6>
          </div>
          <div className='project-content'>
            <img className='project' src='./niryo.png'/>
            <h6>Niryo Ned</h6>
          </div>
          <div className='project-content'>
            <img className='project' src='./cannon.png'/>
            <h6>T-Shirt Cannon</h6>
          </div>
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
            © 2023 Michigan Technological University
        </div>
      </div>
      </LightMode>
    </ChakraProvider>
  );
}
