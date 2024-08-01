import MultiImageInput from "react-multiple-image-input";
import Addproducthook from "../../hook/product/addproduct-hook";
import { ToastContainer } from 'react-toastify';




const Addproduct = () => {


 const  [categoryData,brandData,name,description,images,setImages,qty,price,handelsubmit,onchangedescription,onchangename,onchangeprice,onchangeqty,onselectbrand,onselectcategory]= Addproducthook();
 const crop = {
  unit: 'px',
  x: 130,
  y: 50,
  width: 200,
  height: 200
}

  return (
    
    <div>
      <h4>اضافة منتج جديد</h4>

      <form className='d-grid text-center' style={{width:'100%'}}>
          <label>صور المنتج</label>
          <MultiImageInput
          cropConfig={crop}
          images={images}
          setImages={setImages}
          allowCrop={false}
          theme='light'
        />
        <input type="text" value={name} onChange={onchangename} placeholder="اسم المنتج" className="input-desgin" />
        <input type="text" value={description} onChange={onchangedescription} placeholder="وصف المنتج " className="input-desgin" />
        <input type="number" value={price} onChange={onchangeprice} placeholder= "السعر" className="input-desgin" />
        <input type="number" value={qty} onChange={onchangeqty} placeholder=" الكمية المتاحه " className="input-desgin" />
        <select onChange={onselectcategory} className="input-desgin">
        <option value='0' className="input-desgin">التصنيف الرئيسى</option>
            {
              categoryData ? (categoryData.map((i)=>{
                return(
                  <option className="input-desgin" value={i._id}>{i.name}</option>

                )
              })):<h2>no data found</h2>
            }
        </select>
        <select onChange={onselectbrand} className="input-desgin">
        <option value='0' className="input-desgin">  الماركة</option>

            {
              brandData ? (brandData.map((i)=>{
                return(
                  <option className="input-desgin" value={i._id}>{i.name}</option>

                )
              })):null
            }
        </select>
        <div className='d-flex justify-content-end'>
        <button onClick={handelsubmit}  className="btn-design text-center">حفظ التعديلات</button>
        </div>


        <ToastContainer />


      </form>
    </div>
  )
}

export default Addproduct;
