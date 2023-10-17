import React from 'react'
import { Container } from 'react-bootstrap'
import labtob from '../../Assets/labtop.png'

const Discount = () => {
  return (
    <div style={{background:'#2b3035'}}>
      <Container className='discount-style'>
          <div><p className='text-white'>خصم علي اللاب توب يصل الي 40%</p></div>
          <div>
              <img src={labtob} alt='#'/>
          </div>
      </Container>
    </div>
  )
}

export default Discount
