import useDeletedata from "../../hooks/useDeletedata";
import {useGetDataToken} from "../../hooks/useGetdata";
import { useInsertData } from "../../hooks/useInsertdata";
import { USER_WISHLIST,ADTO_WISHLIST,REMOVE_WISHLIST } from "../Type";

/// get all favproduct 
export const usrerGetwishlist = ()=> async(dispatch)=>{

 try {
  const  response =   await useGetDataToken(`/api/v1/wishlist`);

  dispatch ({
    type:USER_WISHLIST,
    payload:response,
    })

 } catch (error) {
  dispatch({
    type:USER_WISHLIST,
    payload: error.response,
})
}

}

/// add favproduct 

export const addTowishlist = (data)=> async(dispatch)=>{

  try {
   const  response =   await useInsertData(`/api/v1/wishlist`,data);
 
   dispatch ({
     type:ADTO_WISHLIST,
     payload:response,
     })
 
  } catch (error) {
   dispatch({
     type:ADTO_WISHLIST,
     payload: error.response,
 })
 }
 
 }

 ///// remove favproduct 
export const removeFromwishlist = (prodID)=> async(dispatch)=>{

  try {
      const  response =   await useDeletedata(`/api/v1/wishlist/${prodID}`);

    dispatch ({
    type:REMOVE_WISHLIST,
    payload:response,
    })

  } catch (error) {
  dispatch({
  type:REMOVE_WISHLIST,
  payload: error.response,
})
}
}