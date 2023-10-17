import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faWhatsapp,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div bg='dark' data-bs-theme="dark" className="bg-body-tertiary"  >
    <Container>
        <Row className='p-4'>
            <Col className='d-grid text-end' lg='4'>
                  <Link to={'/'}><img className='logo' src={logo} alt=""/></Link>
                  <Link to={'/'} className='Link-design'>الرئسية</Link>
                  <Link to={'/products'} className='Link-design'>المنتجات</Link>
                  <Link to={'/categores'} className='Link-design'>التصنيفات</Link>
                  <Link className='Link-design'>عروضنا</Link>
            </Col>
            <Col lg='4' className='d-grid text-end'>
                  <div className='text-white'>الشروط</div>
                  <div className='text-white'>الاحكام</div>
                  <div className='text-white'>سياسة الخصوصيه </div>
                  <div className='text-white'>عروضنا</div>
                  <div className='text-white'> اتصل بنا</div>

            </Col>
            <Col lg='4' className='d-grid text-end'>
                  <div className='text-white'><FontAwesomeIcon icon={faFacebook} color='white' /> الفيس</div>
                  <div className='text-white'><FontAwesomeIcon icon={faTwitter} color='white' /> تويتر</div>
                  <div className='text-white'><FontAwesomeIcon icon={faInstagram} color='white' /> انستجرام</div>
                  <div className='text-white'><FontAwesomeIcon icon={faWhatsapp} color='white' />  واتس</div>
                  <div className='text-white'><FontAwesomeIcon icon={faLinkedin} color='white' /> لينكدان</div>
            </Col>
        </Row>
        <hr className='text-white' color='white'/>
        <Row>
            <div><p className='text-white'>جميع الحقوق محفوظة</p></div>
        </Row>
    </Container>
    </div>
  )
}

export default Footer
