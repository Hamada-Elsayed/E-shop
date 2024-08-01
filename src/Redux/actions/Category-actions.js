import {useGetdata} from "../../hooks/useGetdata";
import { useInsertDataWithImage } from "../../hooks/useInsertdata";
import { GET_ALL_CATEGORIES,ERRORS,CREATE_CATEGORY, GET_ONE_CATEGORY, } from "../Type";

//getcategoryaction
export const getAllCategory = (limit) => async (dispatch) => {
    try {
        const response = await useGetdata(`/api/v1/categories?limit=${limit}`);

    dispatch({
        type: GET_ALL_CATEGORIES,
        payload: response,
    })

} catch (e) {
    dispatch({
        type: ERRORS,
        payload: "Error " + e,
    })
}
}

//getcategoryaction
export const getAllCategoryPages = (page) => async (dispatch) => {
    try {
        const response = await useGetdata(`/api/v1/categories?limit=${4}&page=${page}`);

    dispatch({
        type: GET_ALL_CATEGORIES,
        payload: response,
    })

} catch (e) {
    dispatch({
        type: ERRORS,
        payload: "Error " + e,
    })
}
}



export const createcategory = (formData)=>  async(dispatch)=>{

    try {
        const response = await useInsertDataWithImage(`/api/v1/categories`, formData);
        dispatch({
            type: CREATE_CATEGORY,
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

export const getonecategory = (id)=> async(dispatch)=>{

    try {
      const response = await useGetdata(`/api/v1/categories/${id}`)
      dispatch({
        type: GET_ONE_CATEGORY,
        payload:response
      })
      
    } catch (error) {
      dispatch({
        type:ERRORS,
        payload:`Error ${error}`
      })
      
    }
  }


