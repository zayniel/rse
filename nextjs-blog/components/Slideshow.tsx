import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'



export default function NavBar() {

    function plusSlides(n) {

    }

    return (
        <section className='container'>
            <div className='slider-wrapper'>
                <div className='slider'>
                    <img id='slide-1' src='./group-pic.jpg' alt='group-with-car'/>
                    <img id='slide-2' src='./group-pic.jpg' alt='placeholder1'/>
                    <img id='slide-3' src='./group-pic.jpg' alt='placeholder2'/>
                    <img id='slide-4' src='./group-pic.jpg' alt='placeholder3'/>
                    <img id='slide-5' src='./group-pic.jpg' alt='placeholder4'/>
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