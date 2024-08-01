import { ADD_TO_CART, CART_DATA, REMOVE_CART } from "../Type"

const inatial = {
  addtocart:[],
  cartdata:[],
  removecart:[],
}
export const Cart = (state=inatial,action)=> {

  switch (action.type) {
    case ADD_TO_CART:
      return{
        ...state,
        addtocart:action.payload

      }
      case CART_DATA:
        return {
          ...state,
          cartdata:action.payload
        }
      
      case REMOVE_CART :
        return {
          ...state,
          removecart: action.payload
        }

      default : return{
        ...state
      }

  }
}