import React from 'react'
import { Link } from 'react-router-dom'
const Adminsidebar = () => {
  return (
    <div style={{minHeight:'400px'}}  className=' mt-4 bg-white'>
        <ul className='d-grid justify-content-center   text-center admin-sidebar'>
            <li>
                <Link to={'/admin/orders'}>ادراة  الطلبات </Link>
            </li>
            <li>
                <Link to={'/admin/productmangment'} >ادراة  المنتجات </Link>
            </li>
            <li>
                <Link to={'/admin/addcategory'} >اضافة تصنيف  </Link>
            </li>
            <li>
                <Link to={'/admin/addcategory'} >اضافة تصنيف فرعي </Link>
            </li>
            <li>
                <Link to={'/admin/addbrand'}>اضافة ماركة </Link>
            </li>
            <li>
                <Link to={'/admin/addproduct'}> اضافة منتج جديد </Link>
            </li>
        </ul>
    </div>
  )
}

export default Adminsidebar
