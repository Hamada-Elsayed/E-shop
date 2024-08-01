import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Container, Dropdown } from "react-bootstrap"
import { getallorders } from "../../Redux/actions/order-action"
import DropdownButton from 'react-bootstrap/DropdownButton';

const Ordersmangment = () => {
  const dispatch = useDispatch();
  const [Data,setData]= useState([]);
  

  const [loading,setloading]= useState(true)



  const get = async()=>{
        setloading(true);
        await dispatch(getallorders());
        setloading(false)
  }
  useEffect(()=>{
    get();
  },[])

  const res = useSelector(state=>state.Order.allorders)

  useEffect(()=>{
    if(loading === false){
      if(res.data){
        setData(res.data)
      }

    }
  },[loading])

  return (
    
    <div>
      <h5> # {res.results}  طلب </h5>
      
      <Container>
            {

              Data.length >= 1 ? (Data.map((i,index)=>{
                return(
                  <div key={index} className="ordercard p-2 m-2">

                      <div className="d-flex justify-content-between">
                            <p> #طلب رقم {i.id}</p>
                            <span> اسم العميل : {i.user.name}</span>
                            <span>  الايميل : {i.user.email}</span>
                            <span>  رقم التلفون : {i.user.phone}</span>


                      </div>

                      <div className="d-flex justify-content-start flex-wrap">
                            {
                              
                              i.cartItems.map((item)=>{
                                return(
                                  
                                  <div style={{background:'#f9f9f9', borderRadius:'10px'}} className="grid m-1 p-1">
                                        <p className="p-0 m-0">{item.product?.title}</p>
                                        <img style={{maxWidth:"100px",maxHeight:'100px'}} src={`http://127.0.0.1:8000/products/${item.product?.imageCover}`} alt="#"/>

                                  </div>
                                  )})
                            }
                      </div>

                    <div className="d-flex justify-content-between">
                          <p> الاجمالي : {i.totalOrderPrice}جنيه</p>
                          <div className="d-flex">
                                <p>التوصيل : <span>لم يتم</span></p> ،
                                <p>  الدفع :  <span>لم يتم </span></p> ، 
                                <p> طريقة الدفع :  <span> كاش</span></p> 

                          </div>
                    </div>
                    <hr></hr>
                    <div className="d-flex"> 
                          <div>
                                <DropdownButton id="dropdown-basic-button" className='dropdown-btn'  title=" حالة الدفع">
                                    <Dropdown.Item >   تم الدفع</Dropdown.Item>
                                    <Dropdown.Item >  لم يتم الدفع</Dropdown.Item>
                                </DropdownButton>
                          </div>
                          <div>
                                <DropdownButton id="dropdown-basic-button" className='dropdown-btn'  title=" حالة التوصيل">
                                    <Dropdown.Item  >   تم التوصيل</Dropdown.Item>
                                    <Dropdown.Item  >  لم يتم التوصيل</Dropdown.Item>
                                </DropdownButton>
                          </div>
                    </div>
                  </div>
                )

              })):null
            }
      </Container>
    </div>
  )
}

export default Ordersmangment
