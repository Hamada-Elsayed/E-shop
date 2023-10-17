import React from 'react'
import { Link } from 'react-router-dom'
const Adminsidebar = () => {
  return (
    <div style={{minHeight:'400px'}} className='py-2 bg-white my-4'>
        <ul>
            <li>
                <Link>ادارة جميع الطلبات</Link>
            </li>
            <li>
                <Link>ادراة جميع المنتجات </Link>
            </li>
            <li>
                <Link>اضافة صنف  </Link>
            </li>
            <li>
                <Link>اضافة ماركة </Link>
            </li>
        </ul>
    </div>
  )
}

export default Adminsidebar
