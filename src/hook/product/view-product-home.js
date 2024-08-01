import  { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getallproducts } from '../../Redux/actions/Products-action';

const ViewProductHomeHook = () => {

  const dispatch = useDispatch;

  const getallproduct = async()=>{
    await dispatch(getallproducts());
  }

  useEffect(()=>{
    getallproduct();
  },[])

  const Data = useSelector(state=>state.Products.products);
  let items = [];

  try {
        if(Data.data){
              items=Data.data.slice(0, 8)
        }
      } catch (error) {}
  return[items];
}

export default ViewProductHomeHook;