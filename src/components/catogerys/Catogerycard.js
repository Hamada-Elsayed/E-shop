import React from 'react'
import { Link } from 'react-router-dom'


const Catogerycard = ({item}) => {




  return (
        <Link to={`/catpro/${item._id}`} style={{color:'black'}}>
        <div key={item._id} >
            <div className='category-home-view'>
                <img src={item.image} alt='#' />
            </div>
            <p> {item.name} </p>
        </div>
        </Link>
  )
}

export default Catogerycard
