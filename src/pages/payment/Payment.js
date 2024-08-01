import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { createcardorder, createorder } from '../../Redux/actions/order-action';
import CartHook from '../../hook/cart/Cart';
import cash from '../../Assets/cash.png';
import credit from '../../Assets/crdit.webp';
import { useEffect, useState } from 'react';
import notify from '../../hook/notification';
import { ToastContainer } from 'react-toastify';


const Payment = () => {

  const [cartdata, ] = CartHook();
  const [loading,setloading] = useState(true);
  const [adress,setadress] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const res = useSelector(state=>state.Order.createorder);

  const handlecashorder = async()=>{
    setloading(true)
    await dispatch(createorder(cartdata._id,{
      shippingAddress: {
        details: adress,
        phone: '01091518340',
        city: "",
        postalCode: ""
    }
    }))

    setloading(false)
    
  }

  useEffect(()=>{
    if(loading===false){
      if(res.status=== 201){
        notify('تم انشاء طلبك بنجاح','success');
        setTimeout(() => {
          navigate('/orders')
        }, 2000);
      } else {
        notify('هناك مشكله فى عملية الاضافة', "error");
    }

    }
  },[loading])





  //// handel card order 


  const handelecard = async()=>{

    setloading(true)

    await dispatch(createcardorder(cartdata._id),{
      shippingAddress: {
        details: adress,
        phone: '01091518340',
        city: "",
        postalCode: ""
    }
    })

    setloading(false)
  }

  const response = useSelector(state=>state.Order.createcardorder);
  console.log(response);

  useEffect (()=>{
    if(loading===false){

      if(response.status==='success'){
        notify('تم انشاء طلبك بنجاح','success');

        if(response.session.url){
          window.open(response.session.url)
        }

      }

    }
  },[loading])





  
  return (
    <div style={{minHeight:'600px'}}>
    <Container    className='mt-5 d-flex justify-content-around payment-page'>

        <div className='d-grid p-2' style={{background:'white',borderRadius:'10px'}} >
              <img  style={{maxWidth:'300px',minHeight:'200px'}} src={cash} alt='#'/>
              <div>  <input onChange={(e)=>setadress(e.target.value)} className='input-desgin' placeholder='ادخل العنوان' type='text' /></div>
              <div><Button onClick={handlecashorder} className='btn'>  الدفع عند التوصيل </Button> </div>
        </div>
        <div  className='d-grid p-2' style={{background:'white',borderRadius:'10px'}}>
              <img style={{maxWidth:'300px',minHeight:'200px'}} src={credit} alt='#' />
              <div>  <input onChange={(e)=>setadress(e.target.value)} className='input-desgin' placeholder='ادخل العنوان' type='text' /></div>

              <div><Button onClick={handelecard} className='btn'>الدفع عن طريق البطاقة الائتمانية </Button> </div>
        </div>
        <ToastContainer/>
    </Container>
    </div>
  )
}

export default Payment
