import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usrerGetwishlist } from '../../Redux/actions/user-action';
import { addToCart } from './../../Redux/actions/cart-action';
import { Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import notify from '../../hook/notification';
import favon from '../../Assets/fav-on.png'
import { ToastContainer } from 'react-toastify';
import { Row } from 'react-bootstrap';
import { removeFromwishlist } from './../../Redux/actions/user-action';



const Userfavprod = () => {
  const dispatch = useDispatch();
      const [items,setitem] = useState();
      const [loading,setloading]= useState(true);

  useEffect(()=>{
    setloading(true)
    const get = async()=>{
    await dispatch(usrerGetwishlist())
    }
        get();
        setloading(false);

  },[dispatch])


  const res = useSelector((state) => state.Userwishlist.wishlist);
  

  useEffect(()=>{
    if(loading===false){
      if(res){
        setitem(res.data)
      }
    }

  },[loading])

///add to cart
  const addtocart = async(id)=>{
    await dispatch(addToCart({
          productId : id,
          color: "no-color"
    }))
    notify('تمت الاضافة الي العربة','success')
  }


  //remove from wishlist
  const removefav = async(id)=>{
    await dispatch(removeFromwishlist(id))
    notify('تمت الحذف من المفضلة','warn')
    setTimeout(() => {
      window.location.reload();
  }, 1000);
  }


  return (
    <Row>
    <h5 className='text-end'>المنتجات المفضلة <FontAwesomeIcon color={'#b00000'} icon={faHeart}/></h5>
    {
      items ?( items.map((item)=>{return(
      
      <Col  className='d-flex justify-content-between flex-wrap'>


      <div className='fav-productcard' key={item._id}>
      <Card className='Productcard mb-2' style={{ width: '17rem' }}>
      <Card.Title  className='fav-product text-start m-0 '>
      <img src={favon}  alt='fav'/>
      </Card.Title>
      <div className='product-img text-center'>
          <Link to={`/products/products/${item._id}`}>
              <Card.Img style={{ width: '200px',height:'200px' }} 
              variant="top" src={`http://127.0.0.1:8000/products/${item.imageCover}`} 
              />
          </Link> 
  
      </div>
  
      <Card.Body className='p-1'>

        <Card.Text className='m-0 text-center '>
        {
          item.description.slice(0,30)
        }

        <p>
        {
          item.price
        }
        جنيه
    </p>
  
        </Card.Text>
        <div className='d-flex justify-content-around '>
              <Button onClick={()=>{addtocart(item._id)}} className='edit-btn' >اضف الي العربة <FontAwesomeIcon icon={faCartShopping} /> </Button>
              <Button onClick={()=>{removefav(item._id)}}  className='delete-btn'> <FontAwesomeIcon icon={faTrash} />ازالة  </Button>
        </div>

      </Card.Body>
      </Card>
      </div>
      <ToastContainer />

</Col>)})  ) : <h2>المفضلة فارغة</h2>
    }
      
    </Row>
  )
}

export default Userfavprod
