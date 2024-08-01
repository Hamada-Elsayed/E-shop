import React from 'react'
import Subtitle from '../utility/Subtitle.js'
import { Container,Row,Spinner,Col } from 'react-bootstrap'
import Catogerycard from '../catogerys/Catogerycard.js'

const Catogeryhome = ({data}) => {
  return (
    <div className='HomeProducts'>
    <Container>
      <Subtitle title="التصنيفات" btnname="المزيد" titlepath="/categores"/>
      <Row className='d-flex '> 
      <Col className='d-flex justify-content-around flex-wrap'>
      {
        data ? (data.map((item,index) => <Catogerycard item={item} key={index}/>)  ):<Spinner animation="border" variant="primary" />
      }
      </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Catogeryhome
