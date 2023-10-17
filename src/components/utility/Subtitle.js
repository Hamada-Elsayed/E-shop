import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Subtitle = ({title,btnname,titlepath}) => {
  return (
    <Container>
    <div className='d-flex justify-content-between'>
    <h6>{title}</h6>
    <div>
    {
      btnname ? 
      (<Link to={`${titlepath}`}><div className='btn-design'>{btnname}</div></Link>): <h2>wwwww</h2>
    }
    </div>
  
    </div>
    <hr/>
    </Container>
  
  )
}

export default Subtitle
