import  {GET_PRODUCTS,CREATE_PRODUCTS,DELETE_PRODUCT,GET_ONE_PRODUCTS,UPDATE_PRODUCT,GET_PRODUCTS_CAT}  from "../Type"

const inatial = {
  products:[],
  product:[],
  catproduct:[],
  deleteProducts: [],
  update:[],
  loading:true,

}
export const Products = (state=inatial,action)=>{
  switch(action.type){
    case GET_PRODUCTS:
        return{
          ...state,
          products: action.payload,
          loading:false
        }

    case GET_PRODUCTS_CAT:
          return{
            ...state,
            catproduct: action.payload,
            loading:false
          }

    case CREATE_PRODUCTS:
        return{
          ...state,
          products: action.payload,
          loading:false
        }
    case  DELETE_PRODUCT:
        return{
          ...state,
          deleteProducts:action.payload,
          loading:false

        }
    case GET_ONE_PRODUCTS:
      return{
        ...state,
        product:action.payload
      }
      case UPDATE_PRODUCT:
        return{
          ...state,
          update:action.payload
        }
  

    default:
      return state;


  }
}