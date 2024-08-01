import { useInsertData } from "../../hooks/useInsertdata"
import {useGetDataToken} from '../../hooks/useGetdata'
import { CREATE_ORDER, GET_ALL_ORDERS,CREATE_CARD_ORDER } from "../Type"


export const createorder =  (id,body)=> async(dispatch)=>{

  try {
    const response = await useInsertData(`/api/v1/orders/${id}`,body)

    dispatch({
      type: CREATE_ORDER,
      payload:response
    })
    
  }catch (error){
    dispatch({
    type:CREATE_ORDER,
    payload:error.response,

  })
}

}

export const getallorders =  ()=> async(dispatch)=>{

  try {
    const response = await useGetDataToken(`/api/v1/orders`)

    dispatch({
      type: GET_ALL_ORDERS,
      payload:response
    })
    
  }catch (error){
    dispatch({
    type: GET_ALL_ORDERS,
    payload:error.response,

  })
}

}


//create card order

export const createcardorder = (id,body)=> async(dispatch)=>{

  try {

    const response = await useGetDataToken(`/api/v1/orders/checkout-session/${id}`,body)

    dispatch({

      type:CREATE_CARD_ORDER,
      payload:response


    })
    
  } catch (error) {

    dispatch({

      type:CREATE_CARD_ORDER,
      payload:error.response


    })
    
  }

}

