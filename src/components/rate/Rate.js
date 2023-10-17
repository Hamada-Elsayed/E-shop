import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {  Row } from 'react-bootstrap'

const Rate = () => {
return (

<div>
<Row className='bg-white d-grid py-2'>
      <div className='d-flex'>
            <h6>التقيمات : </h6>
            <p> (250  تقيم )</p>
      </div>
      <div className='d-grid p-4'>
            <div className='d-flex'>
                  <p>حمادة السيد</p>
                  <div>
                        <FontAwesomeIcon icon={faStar} color='rgb(210 210 210)'  fontSize={'18px'} />
                        <FontAwesomeIcon icon={faStar} color='rgb(210 210 210)'  fontSize={'18px'} />
                        <FontAwesomeIcon icon={faStar} color='rgb(210 210 210)'  fontSize={'18px'} />
                        <FontAwesomeIcon icon={faStarHalfStroke} color='#d6a204f2' fontSize={'18px'} />
                  </div>
            </div>
            <div className='text-end' >
                  <textarea
                  style={{width:'100%',background:'#eee', border:'none', outline:'none'}}
                  placeholder='اكتب تعليقا...'
                  />
            </div>
            <div className=' d-flex justify-content-end mt-2'>
                  <button className='btn-design'>اضف</button>
            </div>
            <hr/>
      </div>
</Row>
</div>

)
}

export default Rate
