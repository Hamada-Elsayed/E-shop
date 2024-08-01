import  { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/ecommerce-logo.png'
import SearchProductHook from '../../hook/product/search-product-hook';
import CartHook from '../../hook/cart/Cart';


const UtilityNavbar = () => {

  const [searchword,onchangeword] = SearchProductHook();
  const [ ,totalitems] = CartHook();
  const [user,setuser] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('user') != null){

      setuser(JSON.parse(localStorage.getItem('user')))
    }
  },[])

  const logout = ()=>{

    setTimeout(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setuser('');
      window.location.href = "/E-commerce" ;
    }, 2000);
  }

  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark" className="bg-body-tertiary">
      <Container className='navbar-containerdesign' >
        <div className='d-flex '>
            <Navbar.Brand className='d-flex' href="/E-commerce">
            <h4>تسوق</h4>
                <img className='logo' src={logo} alt='logo'/>
            </Navbar.Brand>
            <Form className="d-flex justify-content-center align-items-center  ">
            <Form.Control
            type="search"
            onChange={onchangeword}
            value={searchword}
            placeholder="ابحث..."
            color='black'
            className="me-2 search-nav search-navlg "
            aria-label="Search"
            />
          </Form>
        </div>

        <div>

          <div className='d-flex flex-nowrap'
            
          >

            {
              user != '' ? (
                <DropdownButton dir='ltr'  className='dropdown-navbtn' id="dropdown-basic-button" title={user.name}>
                {
                  user.role === "admin"  ? (<Dropdown.Item href="/admin">لوحة التحكم</Dropdown.Item>) :   <Dropdown.Item><Link className='Link-design' to={'/userpage'}>الصفحة الشخصية</Link></Dropdown.Item>
                }
                <Dropdown.Item onClick={logout}><Link className='Link-design'> تسجيل الخروج</Link> </Dropdown.Item>

              </DropdownButton>
              ):  <Link className='d-flex align-items-center Link-design '  to={'/login'} >
                        <label className='m-0' style={{cursor:'pointer'}}>  تسجيل الدخول </label>

                  </Link>
                  

            }


          <div  className='d-flex'>
                <Link  className='d-flex align-items-center Link-design  position-relative'  to={"/cart"}>
                <p className='m-0'> العربة</p>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {totalitems}
                </span>
                </Link>
                <Link  className='d-flex align-items-center Link-design'  to={"/favproduct"}>
                  <p className='m-0'> المفضلة</p>
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
          </div>


          </div>

        </div>

      </Container>

      <div >
      <Form className="d-flex justify-content-center align-items-center  ">
      <Form.Control
      type="search"
      onChange={onchangeword}
      value={searchword}
      placeholder="ابحث..."
      color='black'
      className="me-2 search-nav search-navsm"
      aria-label="Search"
      />
    </Form>
      </div>
    </Navbar>
  )
}

export default UtilityNavbar ;








