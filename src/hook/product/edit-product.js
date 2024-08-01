import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import notify from '../notification'
import { getAllCategory } from '../../Redux/actions/Category-actions';
import { getbrandAction } from '../../Redux/actions/Brands-action';
import {  getoneproduct, updateproduct } from '../../Redux/actions/Products-action';
const EditProductHook = (id) => {

  const dispatch = useDispatch();

  useEffect(()=>{
    
      dispatch(getoneproduct(id));
      dispatch(getAllCategory());
      dispatch(getbrandAction());

  },[])
  const categoryData = useSelector(state=>state.Allcategory.category.data);
  const brandData = useSelector(state=>state.Brands.brands.data);
  const Item = useSelector(state=>state.Products.product)


  const [name,setname] = useState('');
  const [description,setdescription] = useState('');
  const [price,setprice] = useState('');
  const [qty,setqty] = useState('');
  const [images, setImages] = useState([]);
  const[catID,setcatID] = useState('0');
  const[brandID,setbrandID] = useState('0');
  const [loading, setLoading] = useState(true);


useEffect(()=>{
  if(Item.data) {
    setImages(Item.data.images)
    setname(Item.data.title)
    setdescription(Item.data.description)
    setprice(Item.data.price)
    setqty(Item.data.quantity)
    setcatID(Item.data.category)
    setbrandID(Item.data.brand)
  }
},[Item])
    // get category and brand ID
    const onselectcategory = (e)=>{
      setcatID(e.target.value)
    }
    const onselectbrand = (e)=>{
      setbrandID(e.target.value)
    }

    // onchangename
    const onchangename = (e)=>{
      e.persist();
      setname(e.target.value)
    }

        // onchangedescription
        const onchangedescription = (e)=>{
          e.persist();
          setdescription(e.target.value)
        }
    // onchangeprice
    const onchangeprice = (e)=>{
      e.persist();
      setprice(e.target.value)
    }
        // onchangename
        const onchangeqty = (e)=>{
          e.persist();
          setqty(e.target.value)
        }


// conver to images
    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), 
          n = bstr.length, 
          u8arr = new Uint8Array(n);
          
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      
      return new File([u8arr], filename, {type:mime});
  }

// Sava data in database
    const handelsubmit = async(event)=>{
      event.preventDefault();

      if( images === "" || name ===''|| price <= 0 || description === '' || qty <= 0 || catID===''|| brandID==='' ){

        notify('من فضلك اكمل البيانات', "warn");

        return;
      }
      const imagecover = dataURLtoFile(images[0],Math.random()+".png");
              //convert array of base 64 image to file 
      const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
          (item, index) => {
              return dataURLtoFile(images[index], Math.random() + ".png")
          }
      )

      const formData = new FormData();
      formData.append("title", name);
      formData.append('imageCover',imagecover)
      formData.append("description", description);
      formData.append("category", catID);
      formData.append("brand", brandID);
      formData.append("price", price);
      formData.append("quantity", qty);
      itemImages.map((item) => formData.append("images", item))

      setLoading(true)
      await dispatch(updateproduct(id,formData));
      setLoading(false);

    }

    const Products = useSelector(state=>state.Products.update);
    useEffect(()=>{
      if( loading=== false){
        setImages([]);
        setname('');
        setdescription('');
        setprice('');
        setqty('');
        setbrandID(0);
        setcatID(0);
        setTimeout(() => setLoading(true), 1500)

        if (Products) {
          if (Products.status === 200) {
              notify("تم التعديل بنجاح" , "success")
          } else {
              notify("هناك مشكله" , "error")
          }
      }
      }
    },[loading])


  return [categoryData,brandData,name,description,images,setImages,qty,price,onchangedescription,onchangename,onchangeprice,onchangeqty,onselectbrand,onselectcategory,catID,brandID,handelsubmit];
}

export default EditProductHook