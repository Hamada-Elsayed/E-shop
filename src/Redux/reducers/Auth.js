import { CREATE_USER, LOGIN_USER } from "../Type";

const inatial = {
  createuser:[],
  loginuser:[],
  loading:true,
}
export const Auth = (state=inatial,action)=>{

  switch(action.type){
    case CREATE_USER:
      return {
        ...state,
        createuser:action.payload,
        loading:false
      }
    case LOGIN_USER:
        return {
          ...state,
          loginuser:action.payload,
          loading:false
        }
      default : return state
  }
}