import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GetAllCategoryHook from '../../hook/category/get-all-category'


const Categoryheader = () => {
  const [categoryitems, , ]= GetAllCategoryHook();
  console.log(categoryitems)
  return (
    <div className='bg-white p-2'>
    <Container>
           

            <div className='d-flex flex-wrap'>
           {
            categoryitems ?  categoryitems.map((i)=>{
              return (
                <div className='p-2 font-bold' ><Link  to = {`/catpro/${i._id}`} style={{color:'black'}}> {i.name}</Link></div>
              )
            }):null
              

           }

            <div className='p-2 font-bold'><Link to={'/categores'}>المزيد</Link></div>
          </div>
      
    </Container>
    </div>
  )
}

export default Categoryheader
