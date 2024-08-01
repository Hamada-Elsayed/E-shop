import React from 'react'
import { Col } from 'react-bootstrap'
import {Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getbrandAction } from '../../Redux/actions/Brands-action'

const Brandcard = () => {

  
  const dispatch = useDispatch();
  const Data = useSelector(state=>state.Brands.brands.data);

  useEffect(()=>{
    dispatch(getbrandAction())
  },[dispatch])
  
  return (

    <Col className='d-flex justify-content-around flex-wrap'>
{
      Data ? Data.map((i)=>{
      return (
        <div key={i._id}>
        <div  className='category-home-view'>
        <img src={i.image} alt='#'/>
        </div>
        <p>{i.name}</p>
        </div>
      )
    }):<Spinner animation="border" variant="primary" />
}

    </Col>
  )
}

export default Brandcard
