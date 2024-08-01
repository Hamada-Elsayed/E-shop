import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare ,faTrash} from '@fortawesome/free-solid-svg-icons';
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteproduct } from '../../Redux/actions/Products-action';


const Productmangment = ({ item }) => {
  const [show,setshow] = useState(false)
  const handleClose = ()=>setshow(false)
  const handleShow = ()=>setshow(true)


const dispatch = useDispatch();



const handeledelete = async()=>{
  
  await dispatch(deleteproduct(item._id))
  setshow(false)
  window.location.reload();
}



  return (
    <div>
    <Modal dir='rtl' show={show} onHide={handleClose}>
    <Modal.Header >
      <Modal.Title>حذف المنتج </Modal.Title>
    </Modal.Header>
    <Modal.Body>هل انت متاكد من حذف المنتج</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        تراجع
      </Button>
      <Button variant="primary" onClick={handeledelete}>
        تاكيد 
      </Button>
    </Modal.Footer>
  </Modal>




      <div>
      <Card className='Productcard mb-2' style={{ width: '16rem' }}>
      <div className='d-flex justify-content-between p-2 '>
      <div > <Button  className='delete-btn' onClick={handleShow} variant='danger'>  <FontAwesomeIcon icon={faTrash} />حذف  </Button> </div>
      <div ><Link to={`edit/${item._id}`}> <Button className='edit-btn'> <FontAwesomeIcon icon={faPenToSquare} />تعديل</Button></Link> </div>
      </div>

      <div className='product-img text-center'>
          <Link to={`/products/products/${item._id}`}>
              <Card.Img style={{ width: '200px',height:'200px' }} 
              variant="top" src={item.imageCover} 
              />
          </Link> 
  
      </div>
  
      <Card.Body className='p-1'>
        <Card.Title className='text-start m-0'><FontAwesomeIcon icon={faHeart} /></Card.Title>
        <Card.Text className='m-0 '>
        {
          item.description.slice(0,30)
        }
  
        </Card.Text>
        <div className='d-flex justify-content-between'>
            <div className='rate'><FontAwesomeIcon icon={faStar} color='#ffc107bf' /></div>
            <div><p>
                {
                  item.price
                }
            </p></div>
        </div>
      </Card.Body>
    </Card>
      </div>

</div>
  )


}

export default Productmangment
