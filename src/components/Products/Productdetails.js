import React from 'react'
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from '../../Assets/mobile.png'
import { Col } from 'react-bootstrap';
import Addspecificproduct from '../../hook/product/add-specificproduct-hook';
import { useParams } from 'react-router-dom';


const Productdetails = () => {
  const {id} = useParams();
  const [Items,cat,brand,Images] = Addspecificproduct(id);

  return (


      <Col lg='4'>
      <div className='product-details-img'>
        <ReactImageGallery
              items={Images}
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
