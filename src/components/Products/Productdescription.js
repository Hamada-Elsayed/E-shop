import {  Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom'
import Addspecificproduct from '../../hook/product/add-specificproduct-hook';
import { addToCart } from './../../Redux/actions/cart-action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import notify from '../../hook/notification';

const Productdescription = () => {
      const {id} = useParams();
      const [Items,cat,brand] = Addspecificproduct(id);
      const dispatch = useDispatch();
      const [loading,setloading]= useState(true)
      const res = useSelector (state=> state.Cart.addtocart)
      const addtocarts = async()=>{
            await dispatch(addToCart({
                  productId: id,
            color: 'no-color'
            }))
            setloading(false)

      }

      useEffect(()=>{
            if(loading===false){
                        if(res.status === 200){
                              notify('تمت الاضافة الي العربة','success')
                        } else if(res.status === 401) {
                              notify('قم بتسجيل الدخول اولا','warn')
                        }
            }
      },[loading])



return (

      <Col lg='7'>
      <div className='d-grid text-end mb-4'>
      
            <h5> التصنيف: {cat.name}</h5>
      </div>
      <div className='d-grid text-end mb-4'>
            <h5>الماركة: {brand.name}</h5>
      </div>
      <div className='d-grid text-end mb-4'>
            <h5>المواصفات</h5>
            <p>    {Items.description} </p>
      </div>
      <div className='d-flex '>
            <div>  <p className='bg-white' style={{border:'1px solid',padding:'5px 10px',marginLeft:'10px',borderRadius:'10px'}}>{Items.price} جنيه</p></div>
            <div>   <button onClick={addtocarts} className='btn-design'>اضف الي العربة</button></div>

      </div>

      <ToastContainer />


      </Col>

)
}

export default Productdescription
