import React from 'react'
import Categoryheader from '../../components/catogerys/Categoryheader'
import Productsubtitle from '../../components/utility/Productsubtitle'
import HomeProducts from '../../components/Products/HomeProducts'
import Sidefilter from '../../components/Products/Sidefilter'
import { Col, Row } from 'react-bootstrap'
import { GetProductHook } from '../../hook/product/get-product'
import Pagination from '../../components/utility/Pagination'


const Products = () => {
  const  [items,getproduct,getproductonpress,pageCount,productnumber] = GetProductHook();
  console.log(getproduct)

  return (
    <div>
          <Categoryheader/>
          <Productsubtitle productnumber = {productnumber} onclick = {getproduct}/>
          <Row className='d-flex'>
          <Col lg='2' md='2' sm='4' xs='4' > <Sidefilter/></Col>
          <Col lg='9' md='10' sm='7' xs='7' className='d-flex justify-content-center flex-wrap'>
          <HomeProducts products= {items}  title='' btnname=''/>
          </Col>
          </Row>
          <Row>
          {
            pageCount > 1 ? (<Pagination pageCount={pageCount} onPress ={getproductonpress} />):null
          }
              
          </Row>

    </div>
  )
}

export default Products
