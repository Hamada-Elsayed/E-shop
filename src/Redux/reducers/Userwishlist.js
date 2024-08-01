import { ADTO_WISHLIST, REMOVE_WISHLIST, USER_WISHLIST } from "../Type";

const inatial = {
  wishlist : [],
  addtowishlist :[],
  removefromwishlist:[],

}

export const Userwishlist = (state=inatial,action)=> {

  switch (action.type) {
    case USER_WISHLIST:
      return{
        ...state,
        wishlist:action.payload

      }

      case ADTO_WISHLIST:
        return{
          ...state,
          addtowishlist:action.payload
  
        }   
        
        case REMOVE_WISHLIST:
          return{
            ...state,
            removefromwishlist:action.payload
    
          }  
    
      
  
    default:
      return{
        ...state
      }
  }

}