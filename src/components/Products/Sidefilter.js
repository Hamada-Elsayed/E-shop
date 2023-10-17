import React from 'react'

const Sidefilter = () => {
  return (
    <div>

        <div  className='bg-white'>
        <div className='d-grid p-1 '>
          <div className='text-end fw-bold p-1'>الفئة</div>
          <div className='d-grid'>
              <div  className='d-flex'>
                  <input type='checkbox'/>
                  <div style={{paddingRight:'10px'}}>الكل</div>
              </div>
              <div  className='d-flex'>
                  <input type='checkbox'/>
                  <div style={{paddingRight:'10px'}} >منزلية</div>
              </div>
              <div  className='d-flex'>
                  <input type='checkbox'/>
                  <div style={{paddingRight:'10px'}}>كهربية</div>
              </div>
              <div  className='d-flex'>
                  <input type='checkbox'/>
                  <div style={{paddingRight:'10px'}}>كهربية</div>
              </div>
          </div>
        </div>

        <div className='d-grid align-items-end p-1 '>
        <div className='text-end fw-bold p-1'>الماركة</div>
        <div className='d-grid'>
            <div  className='d-flex'>
                <input type='checkbox'/>
                <div style={{paddingRight:'10px'}}>الكل</div>
            </div>
            <div  className='d-flex'>
                <input type='checkbox'/>
                <div style={{paddingRight:'10px'}}>منزلية</div>
            </div>
            <div  className='d-flex'>
                <input type='checkbox'/>
                <div style={{paddingRight:'10px'}}>كهربية</div>
            </div>
            <div  className='d-flex'>
                <input type='checkbox'/>
                <div style={{paddingRight:'10px'}}>كهربية</div>
            </div>
        </div>
        <div className='d-grid'>
          <div className='text-end fw-bold p-1'>السعر</div>
            <div>
                <div className='d-flex p-1'>
                    <span>من</span>
                    <input style={{ width: "60px", height: "20px" }} type='number'/>
                </div>
                <div className='d-flex p-1'>
                    <span>الي</span>
                    <input className='text-center' style={{ width: "60px", height: "20px" }} type='number'/>
                </div>
            </div>
        </div>

        <div>
            <button className='btn-design'>بحث</button>
        </div>

      </div>

        </div>

    </div>
  )
}

export default Sidefilter
