import React from 'react'
import slider1 from '../../Assets/slider.png'
import slider2 from '../../Assets/slider22.png'
import slider3 from '../../Assets/slider1.jpg'


import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  
  return (
    <div  className='slider-design' >
    <Carousel >
      <Carousel.Item>
      <div className='carousel-img'>
      <img src={slider3} alt='#'/>
      </div>
      <Carousel.Caption>
          <h3>خصومات </h3>
          <p>خصم يصل ال 50%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <div className='carousel-img '>
        <img src={slider2} alt='#'/>
        </div>
        <Carousel.Caption>
          <h3>عروض</h3>
          <p>عرض الاكثر مبيعا</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-img'>
      <img src={slider1} alt='#'/>
      </div>        <Carousel.Caption>
          <h3>خصومات</h3>
          <p>
            خصم يصل الي 50%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider;
