import React from 'react'
import SideFilterHook from '../../hook/product/side-filter-hook';

const Sidefilter = () => {
    const  [ catItem ,brandItem,onchangecat,onchangebrand] = SideFilterHook();


    return (
    <div>

        <div  className='bg-white product-sidefilter d-grid  p-4'>
        <div className='d-grid p-1 '>
            <div className='text-end '>الفئة</div>
                <div className='d-grid'>
                    <div  className='d-flex'>
                        <input  type='checkbox'  onChange={onchangecat} value='0'/>
                        <div style={{paddingRight:'10px'}} >الكل</div>
                </div>

                {
                    catItem ? (catItem.map((i)=>{
                        return (
                            <div  className='d-flex'>
                            <input onChange={onchangecat} value={i._id} type='checkbox'/>
                            <div style={{paddingRight:'10px'}} >{i.name}</div> 
                            </div>
                        )
                    })):null
                }
        </div>
        </div>

        <div className='d-grid align-items-end p-1 '>
        <div className='text-end '>الماركة</div>
        <div className='d-grid'>
            <div  className='d-flex'>
                <input type='checkbox' value='0' onChange={onchangebrand}/>
                <div style={{paddingRight:'10px'}}>الكل</div>
            </div>
            {
                brandItem ? (brandItem.map((i)=>{
                    return (
                        <div  className='d-flex'>
                        <input type='checkbox' value={i._id} onChange={onchangebrand}/>
                        <div style={{paddingRight:'10px'}} >{i.name}</div> 
                        </div>
                    )
                })):null
            }

        </div>
    <div className='d-grid pt-2'>
        <div className='text-end '>السعر: </div>
            <div>
                <div className='d-flex p-1'>
                    <span > من </span>
                    <input style={{ width: "60px", height: "20px" }} type='number'/>
                </div>
                <div className='d-flex p-1'>
                    <span> الي </span>
                    <input className='text-center' style={{ width: "60px", height: "20px" }} type='number'/>
                </div>
            </div>
        </div>



    </div>
    </div>
    </div>
  )
}

export default Sidefilter
