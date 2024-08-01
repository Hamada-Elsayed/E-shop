import {Link,useNavigate} from 'react-router-dom'
import userimg from '../../Assets/user.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faHeart, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
const UserSidebar = () => {

  const [user,setuser] = useState(JSON.parse(localStorage.getItem('user')));
  const navgaite = useNavigate();


  const logout = ()=>{
    localStorage.removeItem("user");
    setuser('');
    setTimeout(() => {
      navgaite( "/E-commerce" )
    }, 1000);
  }

  return (

    <div  style= {{borderRadius:'10px',backgroundColor:'white',minHeight:'520px'}}>
        <div className='d-flex justify-content-center'>
              <img className='m-4' style={{width:'80px'}} src= {userimg } alt='#'/></div>
        <div className='d-flex justify-content-center'>
              <ul className='user-sidebarul'   style={{textAlign:'start',width:'100%'}}>
                  <li  className='p-2'><Link  to={'/orders'}>الطلبات</Link> <FontAwesomeIcon icon={faBagShopping}/></li>
                  <li  className='p-2'><Link to={'/cart'}>العربة </Link> <FontAwesomeIcon icon={faCartShopping}/></li>
                  <li  className='p-2'><Link to={'/favproduct'}>المفضلة</Link> <FontAwesomeIcon icon={faHeart}/></li>
                  <li  className='p-2'><Link to={'/userpage'}>الشخصية </Link> <FontAwesomeIcon icon={faUser}/></li>
                  <li  className='p-2'><Link onClick={logout}>تسجيل خروج</Link><FontAwesomeIcon icon={faRightFromBracket}/></li>
              </ul>
        </div>


    </div>


  )
}

export default UserSidebar;