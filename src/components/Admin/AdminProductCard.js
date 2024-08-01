import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import {  getallproducts } from '../../Redux/actions/Products-action';
import Productmangment from './Productmangment';
const AdminProductCard = () => {
    //get all products

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getallproducts())
    },[dispatch])
    let ITEMS = [];
    const Data = useSelector(state=>state.Products.products);

    if(Data.data)
        ITEMS = Data.data;
    else 
        ITEMS=[]
    
  return (

    <Col  className='d-flex justify-content-between flex-wrap'>
      {
       ITEMS ? (
          ITEMS.map ((item,index) => <Productmangment item={item} key={index}/>)
        ):<h2> no data found</h2>
      }
      </Col>

  )
}

export default AdminProductCard;
