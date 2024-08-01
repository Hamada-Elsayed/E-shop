import useGetdata from "../../hooks/useGetdata"
import { useInsertData } from "../../hooks/useInsertdata"
import {  CREATE_USER,LOGIN_USER} from "../Type"

//sign up
export const createUseraction = (data) => async(dispatch)=>{
  try {
    const response = await useInsertData(`/api/v1/auth/signup`,data)
    dispatch({
      type:CREATE_USER,
      payload:response
    })

  } catch (error) {
    dispatch({
      type:CREATE_USER,
      payload: error.response
  })
  }

} 

// login 
export const loginUseraction = (data) => async(dispatch)=>{
  try {
    const response = await useInsertData(`/api/v1/auth/login`,data)
    dispatch({
      type:LOGIN_USER,
      payload:response,
      loading: true
    })

  } catch (error) {
    dispatch({
      type:LOGIN_USER,
      payload: error.response
  })
  }

} 