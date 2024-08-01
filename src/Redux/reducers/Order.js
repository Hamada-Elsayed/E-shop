import { CREATE_ORDER, GET_ALL_ORDERS,CREATE_CARD_ORDER } from "../Type"

const inatial = {
   createorder:[],
   createcardorder:[],
   allorders:[],
  }

export const Order = (state=inatial,action)=> {

  switch (action.type) {
    case CREATE_ORDER:
      return{
        ...state,
        createorder:action.payload
      }

    case CREATE_CARD_ORDER:
        return{
          ...state,
          createcardorder:action.payload
        }

    case GET_ALL_ORDERS:
        return{
          ...state,
          allorders:action.payload
        }

      default : return{
        ...state
      }

  }
}