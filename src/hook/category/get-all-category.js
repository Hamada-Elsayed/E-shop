import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPages } from '../../Redux/actions/Category-actions';
const GetAllCategoryHook = () => {
  const dispatch = useDispatch();
const limit = 5;
  useEffect(()=>{
    dispatch(getAllCategory(limit));
  },[dispatch])
const Data = useSelector(state=>state.Allcategory.category);

    //to get page count
    let pageCount = 0;
    if (Data.paginationResult)
        {pageCount = Data.paginationResult.numberOfPages}


  let categoryitems = [];
  try {
    if(Data.data){
      categoryitems=Data.data;
    }
  } catch (error) {}

  const getPage = (page)=>{
    dispatch(getAllCategoryPages(page))

  }


  return [categoryitems,pageCount,getPage]
}

export default GetAllCategoryHook;
