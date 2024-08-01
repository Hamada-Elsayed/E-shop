import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getoneproduct } from '../../Redux/actions/Products-action';
import { getonecategory } from '../../Redux/actions/Category-actions';
import {getspecificbrand} from '../../Redux/actions/Brands-action'

const Addspecificproduct = (prodID) => {

  const dispatch = useDispatch();
  const Data = useSelector(state=>state.Products.product)
  const categoryData = useSelector(state=>state.Allcategory.specificcategory);
  const brandData = useSelector(state=>state.Brands.onebrand);

  useEffect(()=>{
    dispatch(getoneproduct(prodID))
  },[dispatch])

  let Items = [];
  if(Data.data)
    Items = Data.data;
  else
  Items=[]

  let Images = [];
  if(Items.images){
    Images = Items.images.map((img)=>{return{original:img}});
  }
  else{
    Images = [];
  }
  



  useEffect(()=>{
    if(Items.category){
      dispatch(getonecategory(Items.category))
    }
    if(Items.brand){
      dispatch(getspecificbrand(Items.brand))
    }

  },[Items])

  let cat = [];
  if (categoryData.data)
      cat = categoryData.data;
  else
      cat = []

  let brand = [];
  if(brandData.data)
      brand = brandData.data;
  else
      brand = []



return [Items,cat,brand,Images];

}

export default Addspecificproduct;
