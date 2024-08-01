import React from 'react'
import { Container,Row,Col } from "react-bootstrap"
import Adminsidebar from "../../components/Admin/Adminsidebar"
import EditProduct from "../../components/Admin/EditProduct";

const AdminEditproduct = () => {
  return (

    <div style={{minHeight:'700px'}}>
    <Container>
        <Row className="d-flex justify-content-around">
              <Col lg='2' md='2'>
                  <Adminsidebar/>
              </Col>
              <Col className=' py-2 my-4 bg-white'  lg='8' md='8'>
              <EditProduct/>
              </Col>
        </Row>
    </Container>
  </div>

  )
}

export default AdminEditproduct
