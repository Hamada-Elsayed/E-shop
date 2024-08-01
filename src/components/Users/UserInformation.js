import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLitecoinSign, faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons';

const UserInformation = () => {

      const [user,setuser] = useState('');
      useEffect(()=>{
        if(localStorage.getItem('user') != null){
    
          setuser(JSON.parse(localStorage.getItem('user')))
        }
      },[])


  return (
      <div>
            <h5 className='text-end pl-4 '>الشخصية <FontAwesomeIcon icon={faUser}/> </h5>
      <div  className = 'p-4 mt-0  m-2 d-flex justify-content-between' style= {{borderRadius:'10px',backgroundColor:'white'}}>
      <div>
      <div className='d-flex'>
            <p>الاسم :- </p>
            <p > {user.name} </p>
      </div>
      <div className='d-flex'>
            <p>الايميل :- </p>
            <p > {user.email} </p>
      </div>
      <div className='d-flex'>
            <p>رقم التلفون  :- </p>
            <p>  {user.phone} </p>
      </div>
    </div>
    <div>
    <Button className='edit-btn'> <FontAwesomeIcon icon={faPenToSquare} />تعديل</Button>
    </div>


    </div>
    <div>
          <h5 className='text-end p-4'>تغيير كلمة المرور </h5>
          <div  className = 'p-4   m-2 d-grid justify-content-between' style= {{borderRadius:'10px',backgroundColor:'white'}}>
            <input type='text' className='input-desgin' placeholder='كلمة المرور القديمة' />
            <input type='text' className='input-desgin' placeholder='كلمة المرور الجديدة' />
            <div>            <Button className='btn-design'>حفظ كلمة المرور</Button>
            </div>

          </div>
    </div>
    </div>
  )
}

export default UserInformation
