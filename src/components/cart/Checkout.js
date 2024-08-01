import React from 'react'
import { Link } from 'react-router-dom'
import CartHook from '../../hook/cart/Cart';

const Checkout = () => {
  const [cartdata] = CartHook();

  return (
    <div className='d-grid bg-white p-2 ' style={{borderRadius:'10px'}}>
        <div className='d-grid m-2'>
            <p className='text-end'>الاجمالى </p>
            <p style={{width:'100%',padding:'10px 20px', border:'1px solid #eee'}}>{cartdata.totalCartPrice} جنيه</p>
        </div>
        <div className='d-flex m-2'>
            <Link style={{width:'100%'}} to={'/payment'}><button className='btn-design d-grid' style={{width:'100%'}}>اتمام الشراء</button></Link>
        </div>
      
    </div>
  )
}

export default Checkout
