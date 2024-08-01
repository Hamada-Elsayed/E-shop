import { useDispatch,useSelector } from 'react-redux';
import { usrerGetwishlist } from './../../Redux/actions/user-action';
import { useEffect,useState } from 'react';
const GetfavProduct = () => {
  const dispatch = useDispatch();
  const [allfavpro,setallfavpro] = useState([]);
  const [ loading , setloading] = useState(true);

  // get all favdata 
useEffect(()=>{
  const get = async()=>{
    setloading(true)

   await dispatch(usrerGetwishlist());
   setloading(false)

  }
  get();
},[])


const res = useSelector(state=> state.Userwishlist.wishlist);


useEffect(()=>{
  if(loading===false) {
    if(res.data.length >= 1){
      setallfavpro(res.data.map( item => item._id ));
  
    } else setallfavpro([]);

  }

},[loading])



  return [allfavpro]
}

export default GetfavProduct
