import { Button } from 'react-bootstrap';
import CartHook from '../../hook/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Redux/actions/cart-action';
import { useEffect, useState } from 'react';
import notify from '../../hook/notification';
import { ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const Cartitem = () => {
 const [cartdata,totalitems] = CartHook();
 const dispatch = useDispatch();
 const [loading,setloading] = useState(true)

const res = useSelector(state=>state.Cart.removecart)
console.log(cartdata)
const deleteitem = async(item)=>{
    setloading(true)
   await dispatch(removeFromCart(item))
    setloading(false)
}


useEffect(()=>{
    if(loading===false){
    
            if(res.status==='success'){
                notify("تم الحذف من العربة",'success');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                
            }    
    }

},[loading])

    
return (
    <div className='d-flex flex-wrap '>
    {

    
    cartdata.products ? (cartdata.products.map((i)=>{
        return(
        
            <div key={i.product.id}  className=' cart-item bg-white d-flex justify-content-between m-1 mb-2 p-2' style={{borderRadius:'10px',maxWidth:'500px'}}>
                <div className='d-flex'>
                    <div className='m-auto' ><img style={{maxWidth:'100px', borderRadius:'8px',minHeight:'90px'}} src={`http://127.0.0.1:8000/products/${i.product.imageCover}`} alt= "#" /></div>
                    <div className='m-4'>
                            <p className='text-end'>{i.product.title}</p>
                            <p className='text-end'> التصنيف : {i.product.category.name}</p>
                            <p className='text-end'>الماركة : <span>{i.product.brand.name}</span> </p>
                            <div className='d-flex'><p>الكمية: </p> <input style={{width:'90px', height:'25px'}} type='number'/> </div>
                    </div>
                </div>
                <div className='d-grid justify-content-between align-content-between'>
                    <div>
                        <Button className='delete-btn' onClick={()=>{deleteitem(i._id)}}  variant='danger'>  <FontAwesomeIcon icon={faTrash} /> <span>ازالة</span> </Button>
                    </div>
                    <div>
                        <p>{i.price} جنيه</p>
                    </div>
                </div>
            </div>
        )
    })) : <h2>العربة فارغة</h2>
}
<ToastContainer/>
</div>

)
}

export default Cartitem
