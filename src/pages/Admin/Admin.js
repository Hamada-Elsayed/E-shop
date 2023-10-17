import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Adminsidebar from '../../components/Admin/Adminsidebar'
import Adminaddcategory from '../../components/Admin/Adminaddcategory'
import { Routes,Route } from 'react-router-dom';
import Admineditproducts from '../../components/Admin/Admineditproducts';

const Admin = () => {
  return (
    <div style={{minHeight:'700px'}}>
      <Container>
          <Row>
                <Col lg='3'>
                    <Adminsidebar/>
                </Col>
                <Col className=' py-2 my-4 bg-white'  lg='9'>

                <Routes>
                      <Route path='admin/addcate' element={<Adminaddcategory/>}/>
                      <Route path='admin/addpro' element={<Admineditproducts/>}/>
                </Routes>
                </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Admin
