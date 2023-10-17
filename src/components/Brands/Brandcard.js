import React from 'react'
import { Col } from 'react-bootstrap'
import brand from '../../Assets/brand3.png'

const Brandcard = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex" style={{width:'250px'}}>
      <div className='brand-img'>
      <img src={brand} alt='#'/>
      </div>
    </Col>
  )
}

export default Brandcard
