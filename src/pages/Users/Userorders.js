import Userallorders from "../../components/Users/Userallorders"
import UserSidebar from "../../components/Users/UserSidebar"
import { Container, Row,Col } from 'react-bootstrap'

const Userorders = () => {


  return (
  
    <div className="pt-4 mt-5" style={{minHeight:'650px'}}>
      <Container> 
          <Row>
              <Col  lg='2'>
                <UserSidebar/> 
              </Col>

          <Col  lg='8'>
                <Userallorders/>
          </Col>
          
      </Row>
      </Container>
    </div>
  )
}

export default Userorders
