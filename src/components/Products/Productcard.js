import React from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import labtob from '../../Assets/labtop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons';


const Productcard = () => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="d-flex mb-2">
    <div>
    <Card className='Productcard' style={{ width: '16rem' }}>
    <div className='product-img text-center'>
        <Link to={'products/:id'}>
            <Card.Img style={{ width: '200px' }} 
            variant="top" src={labtob} 
            />
        </Link> 

    </div>

    <Card.Body className='p-1'>
      <Card.Title className='text-start m-0'><FontAwesomeIcon icon={faHeart} /></Card.Title>
      <Card.Text className='m-0 '>
       لاب توب اتش بي احدث اصدار خصم يصل ال 50%.

      </Card.Text>
      <div className='d-flex justify-content-between'>
          <div className='rate'><FontAwesomeIcon icon={faStar} color='#ffc107bf' /></div>
          <div><p>11150$</p></div>
      </div>
    </Card.Body>
  </Card>
    </div>
    </Col>
  )
}

export default Productcard
