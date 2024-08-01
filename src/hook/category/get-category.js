import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/Category-actions';

const GetCategoryHome = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCategory());
  },[dispatch])
const Data = useSelector(state=>state.Allcategory.category)
  let categoryitems = [];
  try {
    if(Data.data){
      categoryitems=Data.data.slice(0,11);
    }
  } catch (error) {}
  return [categoryitems]

}

export default GetCategoryHome
