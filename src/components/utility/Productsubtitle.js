import { Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Productsubtitle = ({onclick,productnumber}) => {

  const clicked = (key)=>{
    localStorage.setItem('sortItem',key);
    onclick();
  }
  return (
    <div className='p-2'>
    <Container className='d-flex justify-content-between'>
            <div><p> عدد المنتجات  = {productnumber}</p></div>
            <div>
                <DropdownButton id="dropdown-basic-button" className='dropdown-btn'  title="ترتيب حسب">
                
                <Dropdown.Item onClick={ ()=> clicked("")} className='dropdown-item' >  بدون ترتيب</Dropdown.Item>
                    <Dropdown.Item onClick={ ()=> clicked("الاكثر مبيعا")} className='dropdown-item' > الاكثر مبيعا</Dropdown.Item>
                    <Dropdown.Item onClick={ ()=> clicked("الاعلي تقيم")} className='dropdown-item' >  الاعلي تقيما</Dropdown.Item>
                    <Dropdown.Item onClick={ ()=> clicked("السعر من الاعلي للاقل")}  className='dropdown-item' > السعر من الاعلي للاقل </Dropdown.Item>
                    <Dropdown.Item onClick={ ()=> clicked("السعر من الاقل للاعلي")}  className='dropdown-item' > السعر من الاقل  للاعلي </Dropdown.Item>

                </DropdownButton></div>
      
    </Container>
    </div>
  )
}

export default Productsubtitle
