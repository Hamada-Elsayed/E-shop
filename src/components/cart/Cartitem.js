import React from 'react'
import mobile from '../../Assets/mobile.png';

const Cartitem = () => {
  return (
        <div  className=' bg-white d-flex justify-content-between mb-2 p-2' style={{borderRadius:'10px'}}>
              <div className='d-flex'>
                  <div><img style={{maxWidth:'100px',}} src={mobile} alt= "#" /></div>
                  <div>
                        <p className='text-end'>الكترونيات</p>
                        <p className='text-end'>موبايل ايفون اكس ماكس فاكس اكس بروك</p>
                        <p className='text-end'>الماركة : <span>ابل</span> </p>
                        <div className='d-flex'><p>الكمية: </p> <input style={{width:'90px', height:'25px'}} type='number'/> </div>
                  </div>
              </div>
              <div className='d-grid justify-content-between'>
                  <div>
                      <p>ازاله</p>
                  </div>
                  <div>
                      <p>3000جنيه</p>
                  </div>
              </div>
        </div>
  )
}

export default Cartitem
