import { Container, Row,Col } from 'react-bootstrap'
import Adminsidebar from '../../components/Admin/Adminsidebar'
import AdminProductCard from '../../components/Admin/AdminProductCard'
import { GetProductHook } from '../../hook/product/get-product'
import Pagination from '../../components/utility/Pagination'



const Admin = () => {

  const  [ , ,getproductonpress,pageCount, ] = GetProductHook();

  return (
    <div style={{minHeight:'700px'}}>
      <Container>
          <Row>
                <Col lg='2'>
                    <Adminsidebar/>
                    
                </Col>
                <Col className=' py-2 my-4'  lg='10'>
                <AdminProductCard/>
                </Col>
          </Row>
          <Row>
          {
            pageCount > 1 ? (<Pagination pageCount={pageCount} onPress ={getproductonpress} />):null
          }
              
          </Row>
      </Container>
    </div>
  )
}

export default Admin
