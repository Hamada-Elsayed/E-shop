import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/logo.png'

const UtilityNavbar = () => {
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark" className="bg-body-tertiary">
      <Container >
        <div className='d-flex'>
        <Navbar.Brand href="/"><img className='logo' src={logo} alt='logo'/></Navbar.Brand>
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="ابحث..."
          className="me-2 search-nav"
          aria-label="Search"
        />
        </Form>
        </div>

        <div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link href="/">الرئسية </Nav.Link>

            <Nav.Link href="/categores">التصنيفات </Nav.Link>
            <Nav.Link href="/products">المنتجات </Nav.Link>
            <Nav.Link href='/login'  className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faUser} />
                  <p className='m-0'>تسجيل الدخول</p>
            </Nav.Link>
            <Nav.Link href="/cart" className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <p className='m-0'> العربة</p>

            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
        </div>

      </Container>
    </Navbar>
  )
}

export default UtilityNavbar ;
