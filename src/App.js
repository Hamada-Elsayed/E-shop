import { Routes,Route } from 'react-router-dom';
import './App.css';
import UtilityNavbar from './components/utility/UtilityNavbar';
import Home from './pages/Homepage/Home';
import Login from './pages/Auth/Login.js';
import Products from './pages/Products/Products';
import Productdetailspage from './pages/productdetails/Productdetailspage';
import Register from './pages/Auth/Register';
import Allcategorypage from './pages/Allcategorypage/Allcategorypage';
import Footer from './pages/Footer/Footer';
import Cart from './pages/cart/Cart';
import Payment from './pages/payment/Payment';
import Admin from './pages/Admin/Admin';



function App() {

  return (
    <div dir='rtl' className="App d-grid">
    <UtilityNavbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/categores' element={<Allcategorypage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Productdetailspage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/admin' element={<Admin/>}/>

        
        

        

    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
