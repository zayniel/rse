import Head from 'next/head';
import * as React from 'react';
import NavBar from '../components/NavBar'
import Slideshow from '../components/Slideshow'
import {
  ChakraProvider,
  extendTheme,
  Box,
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
        <img className='image' src='./teams-1.jpg'></img>
      </div>
      <div className='main-container'>
        <div className='bio-container'>
          <h4><b>Teams</b></h4>
          <hr className='new9'></hr>
          <p>The Robotic Systems Enterprise is made up of various teams which work in parallel to achieve large scale objectives.
            These teams, focusing on mechanical, electrical, software engineering, autonomy, navigation, machine learning, integration, testing, and interfacing collaborate to provide robotic solutions for the automotive industry.
          </p>
          <hr className='new2'></hr>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img className='card-img' src='./build-team.jpg' alt='build-pic'/>
          <div className='card-container'>
            <h4><b>Build</b></h4>
            <p>Design and construct sophisticated and organized housing units for system components</p>
          </div>
        </div>
        <div className="card">
          <img className='card-img' src='./perception-team.jpg' alt='perception-pic'/>
          <div className='card-container'>
            <h4><b>Perception</b></h4>
            <p>Integrate visual and spatial sensors to gather data and understand surrounding environments</p>
          </div>
        </div>
        <div className="card">
          <img className='card-img' src='./mapping-planning.png' alt='mapping-planning-pic'/>
          <div className='card-container'>
            <h4><b>Mapping/Planning</b></h4>
            <p>Design and implement intelligent autonomous decision making and route planning</p>
          </div>
        </div>
        <div className="card">
          <img className='card-img' src='./controls.jpg' alt='controls-pic'/>
          <div className='card-container'>
            <h4><b>Controls</b></h4>
            <p>Implement a control system which turns commands from other systems into real vehicle actions</p>
          </div>
        </div>
        <div className="card">
          <img className='card-img' src='./sim-team.jpg' alt='sim-pic'/>
          <div className='card-container'>
            <h4><b>Simulation</b></h4>
            <p>Design and simulate real world scenarios to provide insight about overall system functionality</p>
          </div>
        </div>
        <div className="card">
          <img className='card-img' src='./congestion-team.jpg' alt='congestion-pic'/>
          <div className='card-container'>
            <h4><b>Congestion</b></h4>
            <p>Research and innovate solutions for areas that experience high levels of traffic congestion</p>
          </div>
        </div>
        <div className="card">
          <img className='card-img' src='./accessibility.jpg' alt='accessibility-pic'/>
          <div className='card-container'>
            <h4><b>Accessibility</b></h4>
            <p>Research and innovate solutions for common automotive accessibility issues</p>
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
            © 2023 Michigan Technological University • Designed by Zayne Pepin
        </div>
      </div>
      </LightMode>
    </ChakraProvider>
  );
}
