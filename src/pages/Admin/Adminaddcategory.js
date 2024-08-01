import React from 'react'
import Adminsidebar from '../../components/Admin/Adminsidebar'
import Addcategory from '../../components/Admin/Addcategory'
import { Container, Row,Col } from 'react-bootstrap'



const Adminaddcategory = () => {
  return (
    <div style={{minHeight:'700px'}}>
    <Container>
        <Row>
              <Col lg='3' md='3'>
                  <Adminsidebar/>
              </Col>
              <Col className=' py-2 my-4 bg-white'  lg='9' md='9'>
              <Addcategory/>
              </Col>
        </Row>
    </Container>
  </div>

  )
}

export default Adminaddcategory
