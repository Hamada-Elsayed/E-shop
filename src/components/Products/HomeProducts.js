import React from 'react'
import Subtitle from '../utility/Subtitle'
import Productcard from './Productcard'
import { Container,Row } from 'react-bootstrap'

const HomeProducts = () => {
  return (
    <div className='HomeProducts'>
    <Container>
      <Subtitle title="الاكثر مبيعا" btnname="المزيد" titlepath="/products"/>
      <Row className='d-flex'>
      <Productcard/>
      <Productcard/>
      <Productcard/>
      <Productcard/>
      <Productcard/>
      </Row>
    </Container>
    </div>
  )
}

export default HomeProducts
