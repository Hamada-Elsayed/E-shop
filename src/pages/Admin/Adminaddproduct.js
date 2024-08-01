import { Container,Row,Col } from "react-bootstrap"
import Adminsidebar from "../../components/Admin/Adminsidebar"
import Addproduct from "../../components/Admin/Addproduct";



const Adminaddproduct = () => {
  return (
    <div style={{minHeight:'700px'}}>
    <Container>
        <Row className="d-flex justify-content-around">
              <Col lg='2' md='2'>
                  <Adminsidebar/>
              </Col>
              <Col className=' py-2 my-4 bg-white'  lg='8' md='8'>
              <Addproduct/>
              </Col>
        </Row>
    </Container>
  </div>
  )
}

export default Adminaddproduct
