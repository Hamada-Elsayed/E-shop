import { useParams } from 'react-router-dom'
import Productcard from '../../components/Products/Productcard'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productscatfilter } from '../../Redux/actions/Products-action';
import { Container } from 'react-bootstrap';

const ProductCatFilter = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  const res = useSelector(state=>state.Products.catproduct)
  let items;

  useEffect( ()=>{
    const get = async()=>{
      await dispatch(productscatfilter(id))
    }
    get();

  },[dispatch])

  items = res.data;

  return (
    <Container className='py-5 d-flex flex-wrap' style={{minHeight:'600px'}}>
          {
            items ? ( items.map((item)=>{
              return <Productcard item={item} />
            })
            ):<h2>لا يوجد منتجات لهذا التصنيف</h2>
          }
    
    
    </Container>
  )
}

export default ProductCatFilter
