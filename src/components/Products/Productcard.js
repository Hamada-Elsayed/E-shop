import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import notify from '../../hook/notification';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addTowishlist } from '../../Redux/actions/user-action';
import { useEffect, useState } from 'react';
import { removeFromwishlist } from './../../Redux/actions/user-action';
import GetfavProduct from '../../hook/product/get-favproduct';
import favon from '../../Assets/fav-on.png'
import favof from '../../Assets/fav-off.png'

const Productcard = ({item}) => {
  const [allfavpro] = GetfavProduct();

  const dispatch = useDispatch();
  let favitem =  allfavpro.some(val=> val === item._id);

  const [addloading,setaddloading] = useState(true);
  const [removeloading,setremoveloading] = useState(true);
  const [isfav,setisfav] = useState(favitem);
  const [favimg,setfavimg] = useState(favof)

  useEffect(()=>{
    setisfav(allfavpro.some(val=> val === item._id))
  },[allfavpro])

  const Favbutton = ()=>{
    if(isfav){
      deletbutton();
    }else {
      addbutton();
    }
  
  }
  

  useEffect(()=>{
    if(isfav===true){
      setfavimg(favon)
    }else{
      setfavimg(favof)
    }
  },[isfav])


  const addres = useSelector(state=> state.Userwishlist.addtowishlist)
  const removeres = useSelector(state=> state.Userwishlist.removefromwishlist)

///ADD
  const addbutton = async()=>{
    setisfav(true)
    setfavimg(favon)
    setaddloading(true)
    await dispatch(addTowishlist({
      productId: item._id
    }))
    setaddloading(false)
  }

///remove
const deletbutton = async()=>{
  setisfav(false)
  setfavimg(favof)
  setremoveloading(true)
    await dispatch(removeFromwishlist(item.id))
    setremoveloading(false)
}



///add
useEffect(()=>{

  if(addloading===false){
  if(addres.status===200){
    notify('تمت الاضافة الي المفضلة','success')
  }else if(addres.status===401){
    notify('انت غير مسجل','error')
  }
}
},[addloading])


//// remove
useEffect(()=>{

  if(removeloading===false){
  if(removeres.status==="success"){
    notify('تمت الحذف من المفضلة','warn')
  }else if(removeres.status===401){
    notify('انت غير مسجل','error')
  }
}
},[removeloading])



  return (
    <Col  className='d-flex justify-content-between flex-wrap'>


          <div className='container-productcard' key={item._id}>
          <Card className='Productcard mb-2' style={{ width: '16rem' }}>
          <div className='product-img text-center'>
              <Link to={`/products/products/${item._id}`}>
                  <Card.Img style={{ width: '200px',height:'200px' }} 
                  variant="top" src={item.imageCover} 
                  />
              </Link> 
      
          </div>
      
          <Card.Body className='p-1'>
            <Card.Title  className='fav-product text-start m-0 '>
            <img src={favimg} onClick={Favbutton} alt='fav'/>
            </Card.Title>
            <Card.Text className='m-0 '>
            {
              item.description.slice(0,30)
            }
      
            </Card.Text>
            <div className='d-flex justify-content-between product-icons'>
                <div className='rate'><FontAwesomeIcon  icon={faStar} color='#ffc107bf' /></div>
                <div><p>
                    {
                      item.price
                    }
                </p></div>
            </div>

          </Card.Body>
          </Card>
          </div>
          <ToastContainer />

    </Col>

  )
}

export default Productcard
