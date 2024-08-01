import React from 'react'
import {  Container,Col,Row } from 'react-bootstrap'
import loginimg from '../../Assets/login.webp'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/LoginHook'
import { ToastContainer } from 'react-toastify';

const Login = () => {

  const [email,password,onchangeemail,onchangepassword,onSubmit] = LoginHook();
  return (
    <div>
    <Container >
    <Row className='d-flex align-items-center'>
      <Col sm='10' md='4' lg='5'>
      <div>
          <form className='d-grid'>
              <label>تسجيل الدخول </label>
              <input value={email} onChange={onchangeemail} className='input-desgin' type='e-mail' placeholder='الايميل...' />
              <input value={password} onChange={onchangepassword} className='input-desgin' type='password' placeholder='كلمه السر...' />
              <button onClick={onSubmit} className='btn-design'> تسجيل الدخول</button>
              <label className='d-flex justify-content-end'>   
                    <p>ليس لديك حساب ؟</p>
                    <Link to='/register'><span>  انشاء حساب</span></Link>
              </label>

          </form>
      </div>
      </Col>
      <Col sm='10' md='4' lg='5'>
      <div className='login-img'>
          <img style={{position:'relative'}} src={loginimg} alt='#'/>
      </div>
      </Col>

    </Row>
    <ToastContainer />

    </Container>
    </div>
  )
}

export default Login
