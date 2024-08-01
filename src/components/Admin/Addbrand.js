import React from 'react'
import { Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Addbrandhook } from '../../hook/brand/add-brand-hook';

const Addbrand = () => {
    const [img,name,loading,isPress,handelSubmit,onImageChange,onChangeName] =Addbrandhook();

  return (
    <div className='text-center'>
        <h4 className="admin-content-text pb-4">اضافه ماركة جديد</h4>

            <div className="text-form pb-2">صوره الماركة</div>
            <div className='p-2'>
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
                placeholder="اسم الماركة"
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

export default Addbrand
