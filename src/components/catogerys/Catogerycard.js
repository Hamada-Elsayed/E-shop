import React from 'react'
import { Col } from 'react-bootstrap'
import category1 from '../../Assets/category1.png'

const Catogery = () => {
  return (
      <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      >
      <div className='d-grid justify-content-start'>
      <div className='category-home-view'>
        <img src={category1} alt='#' />
      </div>
      <p>  اوفر سايز</p>
      </div>


      </Col>
  )
}

export default Catogery
