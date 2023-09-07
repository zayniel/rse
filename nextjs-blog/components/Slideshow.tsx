import {
    Image,
} from '@chakra-ui/react'

export default function NavBar() {
    return (
        /*
        <section className='container'>
            <div className='slider-wrapper'>
                <div className='slider'>
                    <img src='./group-pic.jpg' alt='group-with-car'/>
                    
                </div>
            </div>
        </section>
        */
        /* placeholder for slideshow */
        <Image
            src='./group-pic.jpg'
            mt='120px'
            w='1920px'
            h='530px'
            position='absolute'
        />
        
    )
}