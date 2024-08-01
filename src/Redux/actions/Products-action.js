import {useGetdata} from "../../hooks/useGetdata";
import useDeletedata from '../../hooks/useDeletedata'
import { useInsertDataWithImage } from "../../hooks/useInsertdata";
import {useupdateDataWithImage} from '../../hooks/updateDate' ;
import {GET_PRODUCTS,  ERRORS, CREATE_PRODUCTS,GET_ONE_PRODUCTS,DELETE_PRODUCT,UPDATE_PRODUCT, GET_PRODUCTS_CAT }  from "../Type";

// Get all products
export const getallproducts = ()=> async(dispatch)=>{

  try {
    const response = await useGetdata(`/api/v1/products`)
    dispatch({
      type: GET_PRODUCTS,
      payload:response
    })
    
  } catch (error) {
    dispatch({
      type:ERRORS,
      payload:`Error ${error}`
    })
    
  }
}


// Get all products with filtrition
export const getproductsearch = (queryString)=> async(dispatch)=>{

  try {
    const response = await useGetdata(`/api/v1/products?${queryString}`)
    dispatch({
      type: GET_PRODUCTS,
      payload:response
    })
    
  } catch (error) {
    dispatch({
      type:ERRORS,
      payload:`Error ${error}`
    })
    
  }
}


// Get all products with category
export const productscatfilter = (id)=> async(dispatch)=>{

  try {
    const response = await useGetdata(`/api/v1/products?category=${id}`)
    dispatch({
      type: GET_PRODUCTS_CAT,
      payload:response
    })
    
  } catch (error) {
    dispatch({
      type:ERRORS,
      payload:`Error ${error}`
    })
    
  }
}
// create product
export const createproduct = (formData)=> async(dispatch)=>{
  try {
    const response = await useInsertDataWithImage(`api/v1/products`,formData);
    dispatch({
      type:CREATE_PRODUCTS,
      payload:response
    })
  } catch (error) {
    dispatch({
      type:ERRORS,
      payload:`error ${error}`
    })
    
  }
}


// get speicific product
export const getoneproduct = (id)=> async(dispatch)=>{
  try {
    const response = await useGetdata(`/api/v1/products/${id}`)
    dispatch({
      type: GET_ONE_PRODUCTS,
      payload:response
    })
    
  } catch (error) {
    dispatch({
      type:ERRORS,
      payload:`Error ${error}`
    })
    
  }
}


//Delete product
export const deleteproduct = (id)=> async(dispatch)=>{
  try {
    const response = await useDeletedata(`/api/v1/products/${id}`)
    dispatch({
      type: DELETE_PRODUCT,
      payload:response
    })
    
  } catch (error) {
    dispatch({
      type:ERRORS,
      payload:`Error ${error}`
    })
    
  }
}


//update product 
export const updateproduct = (id,form)=>async(dispatch)=>{
  try {
    const response = await useupdateDataWithImage(`/api/v1/products/${id}`,form)
    dispatch({
      type:UPDATE_PRODUCT,
      payload:response
    })
  } catch (error) {
    dispatch({
      type:ERRORS,
      payload:`Error ${error}`
    })

  }
}