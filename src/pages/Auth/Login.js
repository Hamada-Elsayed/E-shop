import React from 'react'
import {  Container,Col,Row } from 'react-bootstrap'
import loginimg from '../../Assets/login.webp'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
    <Container >
    <Row className='d-flex align-items-center'>
      <Col sm='10' md='4' lg='5'>
      <div>
          <form className='d-grid'>
              <label>تسجيل الدخول </label>
              <input className='input-desgin' type='e-mail' placeholder='الايميل' />
              <input className='input-desgin' type='password' placeholder='كلمه السر' />
              <button className='btn-design'> تسجيل الدخول</button>
              <label className='d-flex justify-content-between'>   
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
    </Container>
    </div>
  )
}

export default Login
