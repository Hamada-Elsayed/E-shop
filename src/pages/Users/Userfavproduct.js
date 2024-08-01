import UserSidebar from "../../components/Users/UserSidebar"
import Userfavprod from "../../components/Users/Userfavprod"
import { Container, Row,Col } from 'react-bootstrap'
const Userfavproduct = () => {
  return (
    <div>
    <div className="pt-4 mt-2" style={{minHeight:'650px'}}>
    <Container> 
        <Row>

        <Col lg='2'>
            <UserSidebar/>
        </Col>


        <Col>
              <Userfavprod/>
        </Col>
        
    </Row>
    </Container>
  </div>
    </div>
  )
}

export default Userfavproduct
