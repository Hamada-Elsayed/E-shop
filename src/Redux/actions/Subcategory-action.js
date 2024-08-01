
import useGetdata from "../../hooks/useGetdata"
export const createsubcategory = ()=> async(dispatch)=>{
  try {
    const response = await useGetdata(`api/v1/subcategories`)

    dispatch({
      type: 'GET_SUBCATEGORY',
      payload:response,
    })
    
  } catch (error) {
    dispatch({
      type:'ERRORS',
      payload:`Error ${error}`
    })
    
  }

}