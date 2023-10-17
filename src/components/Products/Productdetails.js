import React from 'react'
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from '../../Assets/mobile.png'
import { Col } from 'react-bootstrap';


const Productdetails = () => {
  const images = [
    {
      original:`${mobile}`,
    },
    {
      original:`${mobile}`,
    },    {
      original:`${mobile}`,
    },    {
      original:`${mobile}`,
    },

  ]
  return (


      <Col lg='4'>
      <div className='product-details-img'>
        <ReactImageGallery
              items={images}
              showFullscreenButton={false}
              isRTL={true}
              showPlayButton={false}
              showThumbnails={false}
        />
        </div>
      </Col>

  )
}

export default Productdetails
