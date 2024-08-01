import { useGetDataToken } from "../../hooks/useGetdata"
import {  useInsertData } from "../../hooks/useInsertdata"
import useDeletedata from '../../hooks/useDeletedata'
import {ADD_TO_CART,CART_DATA,REMOVE_CART} from '../Type'

export const addToCart = (body)=> async(dispatch)=>{

  try {
    const response = await useInsertData(`/api/v1/cart`,body)

    dispatch({
      type:ADD_TO_CART,
      payload:response

    })
    
  } catch (error){
    dispatch({
    type:ADD_TO_CART,
    payload:error.response,

  })
}

}

export const getCartData = ()=> async (dispatch)=>{
  try {

    const response = await useGetDataToken(`/api/v1/cart`)

    dispatch ({
      type: CART_DATA,
      payload:response,
    })
    
  } catch (error) {
    dispatch ({
      type: CART_DATA,
      payload:error.response,
    })
  }
}


 ///// remove favproduct 
 export const removeFromCart = (id)=> async(dispatch)=>{

  try {
      const  response =   await useDeletedata(`/api/v1/cart/${id}`);

    dispatch ({
    type:REMOVE_CART,
    payload:response,
    })

  } catch (error) {
  dispatch({
  type:REMOVE_CART,
  payload: error.response,
})
}
}