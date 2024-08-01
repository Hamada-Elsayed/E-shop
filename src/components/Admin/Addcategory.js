import React from 'react'
import {AddCategoryHook} from '../../hook/category/add-category';
import {  Spinner } from 'react-bootstrap'

import { ToastContainer } from 'react-toastify';

const Addcategory = () => {

    const [img,name,loading,isPress,handelSubmit,onImageChange,onChangeName] =AddCategoryHook();

return (
    <div className='text-center'>
        <h4 className="pb-4">اضافه تصنيف جديد</h4>

            <div className="text-form pb-2">صوره التصنيف</div>
            <div>
                <label for="upload-photo">
                    <img
                        src={img}
                        alt="fzx"
                        height="100px"
                        width="120px"
                        style={{ cursor: "pointer" }}
                    />
                </label>
                <input
                    type="file"
                    name="photo"
                    onChange={onImageChange}
                    id="upload-photo"
                />
            </div>

            <input
                onChange={onChangeName}
                value={name}
                type="text"
                className="input-desgin"
                placeholder="اسم التصنيف"
            />
            <div className='d-flex justify-content-center'>
                        <button onClick={handelSubmit} className="btn-design text-center">حفظ التعديلات</button>
            </div>


    {
        isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null
    }
    <ToastContainer />
</div>
)
}


export default Addcategory
