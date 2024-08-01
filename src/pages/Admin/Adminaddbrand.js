import React from 'react'
import Adminsidebar from '../../components/Admin/Adminsidebar'
import Addbrand from '../../components/Admin/Addbrand'
import { Container, Row,Col } from 'react-bootstrap'
const Adminaddbrand = () => {
  return (
    <div style={{minHeight:'700px'}}>
    <Container>
        <Row>
              <Col lg='3' md='3'>
                  <Adminsidebar/>
              </Col>
              <Col className=' py-2 my-4 bg-white'  lg='9' md='9'>
              <Addbrand/>
              </Col>
        </Row>
    </Container>
  </div>
  )
}

export default Adminaddbrand
