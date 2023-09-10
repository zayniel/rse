import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function NavBar() {

    return (
        <section className='container'>
            <div className='slider-wrapper'>
                <div className='slider'>
                    <img id='slide-1' src='https://drive.google.com/uc?export=view&id=1nAuLBXi4UTqFUZz-Jp7mEilsZlGl6hml' alt='group-with-car'/>
                    <img id='slide-2' src='https://drive.google.com/uc?export=view&id=1dB4DE9MlSAmeCPfftq47iZN-CYjolTTK' alt='placeholder1'/>
                    <img id='slide-3' src='https://drive.google.com/uc?export=view&id=1753UGUBDVHWK7UtYUJfb0Im8_K4xyaG2' alt='placeholder2'/>
                    <img id='slide-4' src='https://drive.google.com/uc?export=view&id=1e9P0UMOXs3TkOXjdfcjgCiW5O7h8pQYv' alt='placeholder3'/>
                    <img id='slide-5' src='https://drive.google.com/uc?export=view&id=1qtLVbPiKDKqWfg5XJGPEC0mgZFKu2AuK' alt='placeholder4'/>
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
                <div className='tagline'>
                    Autonomy at the End of the Earth.
                </div>
            </div>
        </section>
    )
}