import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { getallorders } from "../../Redux/actions/order-action"


const Userallorders = () => {

  const dispatch = useDispatch();
  const res = useSelector(state=>state.Order.allorders)

  console.log(res)
  let Data;

  useEffect(()=>{
    dispatch(getallorders());

  },[])
  console.log(res)
  Data = res.data;

  return (
    
    <div>
      <h5>لديك {res.results} طلب </h5>
      <Container>
            {

              Data ? (Data.map((i)=>{
                return(
                  <div className="ordercard p-2 m-2">

                      <div className="d-flex justify-content-between">
                            <p> #طلب رقم {i.id}</p>

                      </div>

                      <div className="d-flex justify-content-start flex-wrap">
                            {
                              i.cartItems.map((item)=>{
                                return(
                                  
                                  <div style={{background:'#f9f9f9', borderRadius:'10px'}} className="grid m-1 p-1">
                                        <p className="p-0 m-0">{item.product.title}</p>
                                        <img style={{maxWidth:"100px",maxHeight:'100px'}} src={`http://127.0.0.1:8000/products/${item.product.imageCover}`} alt="#"/>

                                  </div>
                                  )})
                            }
                      </div>


                    <div className="d-flex justify-content-between">
                          <p> العنوان : <span>{i.shippingAddress.details}</span></p>
                          <p>  {i.totalOrderPrice}جنيه</p>
                    </div>

                      
                  </div>


                )

              })):null

            }
      
      </Container>
    </div>
  )
}

export default Userallorders
