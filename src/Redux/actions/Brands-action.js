import {useGetdata} from "../../hooks/useGetdata"
import { ERRORS,GET_ALL_BRANDS,CREATE_BRAND,GET_ONE_BRANDS } from "../Type";
import { useInsertDataWithImage } from "../../hooks/useInsertdata";

export const getbrandAction = ()=> async(dispatch)=>{

  try {
    const response = await useGetdata(`/api/v1/brands`);

    dispatch({
      type:GET_ALL_BRANDS,
      payload:response,
    })
  } catch (error) {
        dispatch({
        type: ERRORS,
        payload: "Error " + error,
    })
  }
}

// create-brand-action 
export const createbrandaction = (formData)=>  async(dispatch)=>{

  try {
      const response = await useInsertDataWithImage(`/api/v1/brands`, formData);
      dispatch({
          type: CREATE_BRAND,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: ERRORS,
          payload: "Error " + e,
      })
  }

}

export const getspecificbrand = (id)=> async(dispatch)=>{

  try {
    const response = await useGetdata(`/api/v1/brands/${id}`);

    dispatch({
      type:GET_ONE_BRANDS,
      payload:response,
    })
  } catch (error) {
        dispatch({
        type: ERRORS,
        payload: "Error " + error,
    })
  }
}