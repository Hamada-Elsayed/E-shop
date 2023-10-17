import React from 'react'
import slider1 from '../../Assets/slider1.png'
import slider4 from '../../Assets/slider4.png'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  
  return (
    <div  className='p-4 slider-design' variant="dark" data-bs-theme="dark">
    <Carousel variant="dark" data-bs-theme="dark">
      <Carousel.Item interval={500}>
      <div className='carousel-img d-flex justify-content-end'>
      <img src={slider1} alt='#'/>
      </div>
      <Carousel.Caption>
          <h3>خصومات </h3>
          <p>خصم يصل ال 50%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className='carousel-img d-flex justify-content-end'>
        <img src={slider1} alt='#'/>
        </div>
        <Carousel.Caption>
          <h3>عروض</h3>
          <p>عرض الاكثر مبيعا</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-img d-flex justify-content-end'>
      <img src={slider4} alt='#'/>
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
