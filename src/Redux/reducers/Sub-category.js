import { CREATE_SUBCATEGORY, GET_SUBCATEGORY} from '../Type'
const inatial = {
  subcategory:[],
  loading:true
}
export const Subcategorys = (state=inatial,action)=>{
  switch(action.type){
    case GET_SUBCATEGORY:
      return{
        ...state,
        subcategory:action.payload,
        loading:false
      }
    case CREATE_SUBCATEGORY:
      return{
        ...state,
        subcategory:action.payload,
        loading:false
      }

    default:
      return state


  }
}