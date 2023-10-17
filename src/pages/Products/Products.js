import React from 'react'
import Categoryheader from '../../components/catogerys/Categoryheader'
import Productsubtitle from '../../components/utility/Productsubtitle'
import Productcard from '../../components/Products/Productcard'
import Sidefilter from '../../components/Products/Sidefilter'
import Pagination from '../../components/utility/Pagination'
import { Col, Row } from 'react-bootstrap'

const Products = () => {
  return (
    <div>
          <Categoryheader/>
          <Productsubtitle/>
          <Row className='d-flex'>
          <Col lg='2' md='2' sm='2' xs='2' > <Sidefilter/></Col>
          <Col lg='10' md='10' sm='10' xs='10' className='d-flex flex-wrap'>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Productcard/>
          <Row className='text-center'><Pagination/></Row>
          </Col>
          </Row>

    </div>
  )
}

export default Products
