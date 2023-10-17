import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Cartitem from '../../components/cart/Cartitem'
import Checkout from '../../components/cart/Checkout'



const Cart = () => {
  return (
    <Container>
      
      <Row className='my-4'>
      <Col lg='9'>
                <Cartitem/>
                <Cartitem/>
                <Cartitem/>
                <Cartitem/>

      </Col>
      <Col lg='3'>
                <Checkout/>
      </Col>
      </Row>

      
      
      
    </Container>
  )
}

export default Cart
