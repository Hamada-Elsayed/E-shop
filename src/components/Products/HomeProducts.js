import React from 'react'
import Subtitle from '../utility/Subtitle'
import Productcard from './Productcard'
import { Container,Row } from 'react-bootstrap'

const HomeProducts = ({products,title,btnname,titlepath}) => {
  return (
    <div className='HomeProducts'>
    <Container>
    {
      products ? ( <Subtitle title= {title} btnname={btnname} titlepath={titlepath}/>):null
    }
      <Row className='d-flex'>
      {
        products ?( products.map((item,index)=> <Productcard item={item} key= {index}/>) ):null
      }
      
      </Row>
    </Container>
    </div>
  )
}

export default HomeProducts
