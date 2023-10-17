import React from 'react'
import Catogery from '../catogerys/Catogerycard.js'
import Subtitle from '../utility/Subtitle.js'
import { Container,Row } from 'react-bootstrap'

const Catogeryhome = () => {
  return (
    <div className='HomeProducts'>
    <Container>
      <Subtitle title="التصنيفات" btnname="المزيد" titlepath="/categores"/>
      <Row className='d-flex'>
      <Catogery/>
      <Catogery/>
      <Catogery/>
      <Catogery/>
      <Catogery/>
      </Row>
    </Container>
    </div>
  )
}

export default Catogeryhome
