import {CREATE_BRAND, GET_ALL_BRANDS,GET_ONE_BRANDS} from '../Type'
const inatial = {
  brands:[],
  onebrand:[],
  loading:true
} 
export const Brands = (state=inatial,action)=>{

  switch(action.type){
    case GET_ALL_BRANDS:
        return {
            ...state,
            brands:action.payload,
            loading:false
    }
    case GET_ONE_BRANDS:
         return {
          ...state,
          onebrand:action.payload,
          loading:false
         }
    case CREATE_BRAND:
      return {
        ...state,
        brands:action.payload,
        loading:false
      }

    default :
    return state;
    

  }



}