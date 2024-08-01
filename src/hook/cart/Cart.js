import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from '../../Redux/actions/cart-action';
const CartHook = () => {

  const dispatch = useDispatch();
  const [loading, setloading ] =useState(true)
  const res = useSelector (state=> state.Cart.cartdata)

  let cartdata = [];

  let totalitems = 0;

  useEffect ( ()=>{
    setloading(true)
      dispatch(getCartData())
      setloading(false)
  },[dispatch])

  if(loading === false){
    if(res.status==='success'){
      cartdata= res.data;
      totalitems = res.numOfCartItems;
    }

  }




  return[cartdata,totalitems]
}

export default CartHook;
