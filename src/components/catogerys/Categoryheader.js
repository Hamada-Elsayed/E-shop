import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Categoryheader = () => {
  return (
    <div className='bg-white p-2'>
    <Container>
          <div className='d-flex flex-wrap'>
            <div className='p-2'>ملابس</div>
            <div className='p-2'>اجهزة منزلية</div>
            <div className='p-2'>اجهزة كهربية</div>
            <div className='p-2'>العاب</div>
            <div className='p-2'>الكترونيات</div>
            <div className='p-2 font-bold'><Link to={'/categores'}>المزيد</Link></div>
          </div>
      
    </Container>
    </div>
  )
}

export default Categoryheader
