import MultiImageInput from "react-multiple-image-input";
import { useParams } from "react-router-dom";
import EditProductHook from "../../hook/product/edit-product";
import { ToastContainer } from 'react-toastify';

const EditProduct = () => {
  const {id} = useParams();
  const  [categoryData,brandData,name,description,images,setImages,qty,price,onchangedescription,onchangename,onchangeprice,onchangeqty,onselectbrand,onselectcategory,catID,brandID,handelsubmit]= EditProductHook(id);
  const crop = {
    unit: 'px',
    x: 130,
    y: 50,
    width: 200,
    height: 200
  }

  return (
    <div>
    <h4>تعديل  المنتج </h4>

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
      <select value={catID} onChange={onselectcategory} className="input-desgin">
      <option value='0' className="input-desgin">التصنيف الرئيسى</option>
          {
            categoryData ? (categoryData.map((i,index)=>{
              return(
                <option className="input-desgin" key={index} value={i._id}>{i.name}</option>

              )
            })):null
          }
      </select>
      <select value={brandID} onChange={onselectbrand} className="input-desgin">
      <option value='0' className="input-desgin">  الماركة</option>

          {
            brandData ? (brandData.map((i,index)=>{
              return(
                <option className="input-desgin" key={index} value={i._id}>{i.name}</option>

              )
            })):null
          }
      </select>
      <div className='d-flex justify-content-end'>
      <button onClick={handelsubmit} className="btn-design text-center">حفظ التعديلات</button>
      </div>

      <ToastContainer />



    </form>
    </div>
  )
}

export default EditProduct
