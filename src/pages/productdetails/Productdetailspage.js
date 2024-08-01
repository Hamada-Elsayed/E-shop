import React from 'react'
import Productdetails from '../../components/Products/Productdetails'
import { Container } from 'react-bootstrap'
import {  Row } from 'react-bootstrap'
import Categoryheader from '../../components/catogerys/Categoryheader'
import Productdescription from '../../components/Products/Productdescription'
import Rate from '../../components/rate/Rate'

const Productdetailspage = () => {

  return (
    <div>
    <Categoryheader/>
    <Container className='mt-4'>
    <Row className='d-flex mb-4' >
          <Productdetails />
          <Productdescription/>
    </Row>
          <Rate/>
    </Container>
    </div>
      
  )
}

export default Productdetailspage
