import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getbrandAction } from '../../Redux/actions/Brands-action'
const GetHomeBrand = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getbrandAction());
  },[dispatch])
  const Data = useSelector(state=>state.Brands.brands);
  let branditems = [];
  try {
    if(Data.data){
      branditems=Data.data.slice(0,10);
    }
  } catch (error) {}
  return [branditems]
}

export default GetHomeBrand;