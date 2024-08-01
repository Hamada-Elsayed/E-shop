import {  Container,Col,Row } from 'react-bootstrap'
import loginimg from '../../Assets/login.webp'
import { Link } from 'react-router-dom'
import RegisterHook from '../../hook/auth/RegisterHook'
import { ToastContainer } from 'react-toastify';


const Register = () => {
const[name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, OnSubmit]= RegisterHook();

  return (
    <div>
      <Container >
      <Row className='d-flex align-items-center'>
        <Col sm='10' md='4' lg='5'>
        <div>
            <form className='d-grid'>
                <label> انشاء حساب </label>
                <input value={name} onChange={onChangeName} className='input-desgin' type='name' placeholder='اسم المستخدم...' />
                <input value={email} onChange={onChangeEmail} className='input-desgin' type='email' placeholder='الايميل...' />
                <input value={phone} onChange={onChangePhone} className='input-desgin' type='phone' placeholder='رقم التلفون...' />

                <input className='input-desgin' value={password} onChange={onChangePassword} type='password' placeholder='كلمه السر...' />
                <input value={confirmPassword} onChange={onChangeConfirmPassword} className='input-desgin' type='password' placeholder='تاكيد كلمة السر...' />

                <button onClick={OnSubmit} className='btn-design'> تسجيل الدخول</button>
                <label className='d-flex justify-content-end'>   
                      <p> لديك حساب ؟</p>
                      <Link to='/login'><span> تسجيل الدخول</span></Link>
                </label>

            </form>
            <ToastContainer/>
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

export default Register
