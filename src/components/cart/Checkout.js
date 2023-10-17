import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div className='d-grid bg-white p-2 ' style={{borderRadius:'10px'}}>
        <div className='d-flex m-2'>
            <input style={{width:'100%',borderRadius:'5px'}} type='text'  placeholder='كود الخصم'/>
            <button className='btn-design me-2'>تطبيق</button>
        </div>
        <div className='d-flex m-2'>
            <p style={{width:'100%',padding:'10px 20px', border:'1px solid #eee'}}>2000 جنيه</p>
        </div>
        <div className='d-flex m-2'>
            <Link style={{width:'100%'}} to={'/payment'}><button className='btn-design d-grid' style={{width:'100%'}}>اتمام الشراء</button></Link>
        </div>
      
    </div>
  )
}

export default Checkout
