import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/actions/Category-actions';
import { getbrandAction } from '../../Redux/actions/Brands-action';
import { GetProductHook } from './get-product';

const SideFilterHook = () => {
 const  [items,getproduct,getproductonpress,pageCount,productnumber] = GetProductHook();
  const dispatch = useDispatch();
  useEffect(()=>{
    const getdata = async()=>{

      await  dispatch(getAllCategory());
      await   dispatch(getbrandAction());
    }
    getdata()

  },[dispatch])
const catData = useSelector(state=>state.Allcategory.category);
const brandData = useSelector(state=>state.Brands.brands);



let catItem = [];
try {
  if(catData.data){
    catItem=catData.data;
  }
} catch (error) {}

let brandItem = [];
try {
  if(brandData.data){
    brandItem=brandData.data;
  }
} catch (error) {}

// category filtertion
const [catchecked,setcatchecked] = useState([]);

const onchangecat = (e)=> {

  let value = e.target.value ;
  if(value === '0'){
    setcatchecked([]);
  }else {

    if(e.target.checked === true){
      setcatchecked ([...catchecked,value])
    }else if (e.target.checked === false){
      const array = (catchecked.filter((item)=> item !== value))
      setcatchecked(array)
    }

  }
}



let categoryvalue = '';
categoryvalue = catchecked.map(val=>"category[in][]=" + val).join("&")
localStorage.setItem('catchecked',categoryvalue)

useEffect(()=>{

  if(categoryvalue !== ""){
    setTimeout(() => {
      getproduct()
    }, 1000);
  }else {
    getproduct();
  }

},[categoryvalue])



// brand filtertion
const [brandchecked,setbrandchecked] = useState([]);

const onchangebrand = (e)=> {

  let value = e.target.value ;
  if(value === '0'){
    setbrandchecked([]);
  }else {

    if(e.target.checked === true){
      setbrandchecked ([...brandchecked,value])
    }else if (e.target.checked === false){
      const array = (brandchecked.filter((item)=> item !== value))
      setbrandchecked(array)
    }

  }
}
let brandvalue;
brandvalue = brandchecked.map(val=>"brand[in][]=" + val).join("&")
localStorage.setItem('brandcheck',brandvalue)

useEffect(()=>{

  if(brandvalue !== ""){
    setTimeout(() => {
      getproduct()
    }, 1000);
  }else {
    getproduct();
  }

},[brandvalue])

return [ catItem ,brandItem ,onchangecat,onchangebrand]
}

export default SideFilterHook
