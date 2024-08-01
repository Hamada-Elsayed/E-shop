import React from 'react'
import { Container,Row,Spinner } from 'react-bootstrap'
import Catogery from './Catogerycard'



const Allcatogery = ({data}) => {

  return (
    <Container className='d-grid'>
      <div className='d-flex pt-5'><h5>كل التصنيفات</h5></div>
      <hr/>
      <div className='d-flex justify-content-around align-items-center'>
      {
        data ? (data.map((item,index)=> <Catogery item = {item} key={index}/>)):<Spinner animation="border" variant="primary"/>
      }
      </div>
    </Container>
  )
  
}

export default Allcatogery
