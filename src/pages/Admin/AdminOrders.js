import { Container, Row,Col } from 'react-bootstrap'
import Adminsidebar from '../../components/Admin/Adminsidebar'
import Ordersmangment from '../../components/Admin/Ordersmangment'
const AdminOrders = () => {
  return (
    <div style={{minHeight:'700px'}}>
      <Container>
          <Row>
                <Col lg='3'>
                    <Adminsidebar/>
                    
                </Col>
                <Col className=' py-2 my-4'  lg='9'>
                <Ordersmangment/>
                </Col>
          </Row>
      </Container>
    </div>
  )
}

export default AdminOrders
