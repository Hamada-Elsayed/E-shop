import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Cartitem from '../../components/cart/Cartitem'
import Checkout from '../../components/cart/Checkout'



const Cart = () => {
  return (
    <div className='cart-container m-md-0 m-sm-0 m-lg-5'>
    <h5 className='text-end m-2'>عربة التسوق <FontAwesomeIcon color='#20b1ed' icon={faCartShopping} /> </h5>
      
      <Row className='my-4'>
      <Col lg='10' >
                <div>
                <Cartitem/>
                </div>
                
      <hr/>
      </Col>
      <Col lg='2'>
                <Checkout/>
      </Col>
      </Row>

      
      
      
    </div>
  )
}

export default Cart
