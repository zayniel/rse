import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Text, Center, } from '@chakra-ui/react'

export default function NavBar() {

    return (
        <section className='container'>
            <div className='slider-wrapper'>
                <div className='slider'>
                    <img id='slide-1' src='./group.jpg' alt='group-with-car'/>
                    <img id='slide-2' src='./car-side.jpg' alt='placeholder1'/>
                    <img id='slide-3' src='./looking-at-monitor.jpg' alt='placeholder2'/>
                    <img id='slide-4' src='./car-front.jpg' alt='placeholder3'/>
                    <img id='slide-5' src='./logan-chaz.jpg' alt='placeholder4'/>
                </div>
                <div className='tagline-container'>
                    <div className='tagline'>
                        Autonomy at the End of the Earth.
                    </div>
                </div>
                <div className='slider-nav'>
                    <a href='#slide-1'></a>
                    <a href='#slide-2'></a>
                    <a href='#slide-3'></a>
                    <a href='#slide-4'></a>
                    <a href='#slide-5'></a>
                </div>
                <div className='slider-left'>
                    <button className='slider-arrow' /*onClick={() => this.plusSlides(-1)}*/>
                        <BsFillArrowLeftCircleFill/>
                    </button>
                </div>
                <div className='slider-right'>
                    <button className='slider-arrow' /*onClick={plusDivs(+1)}*/>
                        <BsFillArrowRightCircleFill/>
                    </button>                
                </div>
                
            </div>
        </section>
    )
}