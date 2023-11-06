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
          <h4><b>Current Projects</b></h4>
          <hr className='new7'></hr>
          <p>Take a look at the exciting real world projects we're currently working on. Members of RSE are divided into subgroups to work on each of our projects. We use dynamic teams to create an environment of growth that fosters feelings of contribution and confidence.</p>
          <hr className='new2'></hr>
        </div>
      </div>
      <div className='left-project'>
        <img src='./autodrive2.png' className='bg-img'/>
        <img src='./mobile-autodrive2.png' className='mobile-bg-img'/>
        <div className='left-proj-cont'>
          <div className='left-proj-head'>AutoDrive II</div>
        <div className='left-proj-desc'>
        The AutoDrive II Challenge is a continuation of the original AutoDrive competition 
        sponsored by SAE and General Motors to develop and demonstrate an SAE Level 4 autonomous 
        driving passenger vehicle. 
        <br></br><br></br>
        <a href='/autodrive'>
        See AutoDrive II page for more information
        </a>
        {/*
        At RSE we split the competition goals between several teams that 
        utilize methods commonly used in the industry to create a solution for their respective problems. 
        Then we bring those together and improve with the peer-review process to create a unique autonomous vehicle.
        */}
        </div>
        </div>
      </div>
      <div className='right-project'>
        <img src='./rov.png' className='bg-img'/>
        <img src='./mobile-rov.png' className='mobile-bg-img'/>
        <div className='right-proj-cont'>
          <div className='right-proj-head'>Underwater ROV</div>
          <div className='right-proj-desc'>
          Augment and modify an existing, off the shelf, low cost, and open source ROV to build a towable underwater video & sonar vehicle. This towable glider will be used for collecting image and sonar data of the bottom of the portage.
          </div>
        </div>
      </div>
      <div className='main-container'>
        <div className='bio-container'>
          <h4><b>Past Projects</b></h4>
          <hr className='new8'></hr>
          <p>The Robotic Systems Enterprise has offered a number of projects over the years. Below you can see the projects we've previously worked on.</p>
          <hr className='new2'></hr>
        </div>
      </div>
      <div className='left-project'>
        <img src='./borealis.png' className='bg-img' loading='lazy'/>
        <img src='./mobile-autodrive.png' className='mobile-bg-img' loading='lazy'/>
        <div className='left-proj-cont'>
          <div className='left-proj-head'>AutoDrive</div>
        <div className='left-proj-desc'>
        Three-year autonomous vehicle competition which tasked students
        to develop and demonstrate a full autonomous driving passenger vehicle.
        </div>
        </div>
      </div>
      <div className='right-project'>
        <img src='./jackal.png' className='bg-img' loading='lazy'/>
        <img src='./mobile-jackal.png' className='mobile-bg-img' loading='lazy'/>
        <div className='right-proj-cont'>
          <div className='right-proj-head'>GVSC Leader Follower</div>
          <div className='right-proj-desc'>
            Autonomous convoy of five Jackal robots, such as the one seen above, that can navigate
            to a destination while maintaining a safe distance between the vehicles and avoiding obstacles.
          </div>
        </div>
      </div>
      <div className='left-project'>
        <img src='./niryo.png' className='bg-img' loading='lazy'/>
        <img src='./mobile-niryo.png' className='mobile-bg-img' loading='lazy'/>
        <div className='left-proj-cont'>
          <div className='left-proj-head'>Niryo Ned</div>
        <div className='left-proj-desc'>
        Niryo Ned has educational as well as outreach purposes. We create demonstrations that could be easily
        replicated by prospective students visiting our lab and inspire the next generation of roboticists.
        </div>
        </div>
      </div>
      <div className='right-project'>
        <img src='./cannon.png' className='bg-img' loading='lazy'/>
        <img src='./mobile-cannon.png' className='mobile-bg-img' loading='lazy'/>
        <div className='right-proj-cont'>
          <div className='right-proj-head'>T-Shirt Cannon</div>
          <div className='right-proj-desc'>
            A robot that will be able to shoot t-shirts into the crowd at the various events
            happening on Michigan Tech's campus (hockey, football, etc.). The robot's primary advantage will be the remote operation and
            release. 
          </div>
        </div>
      </div>
      <div className='left-project'>
        <img src='./zumo.png' className='bg-img' loading='lazy'/>
        <img src='./mobile-zumo.png' className='mobile-bg-img' loading='lazy'/>
        <div className='left-proj-cont'>
          <div className='left-proj-head'>Aurora Minor - Zumo</div>
        <div className='left-proj-desc'>
        Each new member of our enterprise has a chance to show off their creativity and learn crucial skills while working with the Zumo robot during their first month at RSE. Completed projects enter the competition where we award the most innovative and interesting designs!
        </div>
        </div>
      </div>
      <div className='footer-spacing-fix'></div>
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
