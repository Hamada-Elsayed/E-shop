import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Catogery from './Catogerycard'

const Allcatogery = () => {
  return (
    <Container className='d-grid'>
      <div className='d-flex pt-5'><h5>كل التصنيفات</h5></div>
      <hr/>
      <Row className='d-flex'>
          
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>
          <Catogery/>

      </Row>
      
    </Container>
  )
}

export default Allcatogery
