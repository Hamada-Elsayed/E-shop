import UserInformation from "../../components/Users/UserInformation"
import UserSidebar from "../../components/Users/UserSidebar"
import { Container, Row,Col } from 'react-bootstrap'
const Userpage = () => {
  return (
    <div className="pt-4 mt-5" style={{minHeight:'650px'}}>
      <Container> 
          <Row>
              <Col  lg='2'>
                <UserSidebar/> 
              </Col>

          <Col  lg='6'>
                <UserInformation/>
          </Col>
          
      </Row>
      </Container>
    </div>
  )
}

export default Userpage
