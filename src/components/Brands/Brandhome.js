import React from 'react'
import Subtitle from '../utility/Subtitle'
import Brandcard from './Brandcard'
import { Container,Row } from 'react-bootstrap'

const Brandhome = () => {
  return (
    <div className='HomeProducts'>
    <Container>
      <Subtitle title='اشهر الماركات' btnname="المزيد" titlepath='/allbrands'/>
      <Row className='d-flex'>
      <Brandcard/>
      <Brandcard/>
      <Brandcard/>
      <Brandcard/>
      <Brandcard/>

      </Row>

      </Container>
    </div>
  )
}

export default Brandhome
