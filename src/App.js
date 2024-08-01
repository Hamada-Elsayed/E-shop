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
import Adminaddcategory from './pages/Admin/Adminaddcategory'
import Adminaddbrand from './pages/Admin/Adminaddbrand'
import Adminaddproduct from './pages/Admin/Adminaddproduct';
import AdminEditproduct from './pages/Admin/AdminEditproduct.js';
import Userpage from './pages/Users/Userpage.js';
import Userfavproduct from './pages/Users/Userfavproduct.js';
import Userorders from './pages/Users/Userorders.js'
import Onlinepayment from './components/payment/Onlinepayment.js'
import AdminOrders from './pages/Admin/AdminOrders.js';
import ProductCatFilter from './pages/productdetails/ProductCatFilter.js';
import ProtectedRouteHook from './hook/auth/ProtectedRouteHook.js';
import ProtectedRoute from './components/utility/ProtectedRoute.js';

function App() {


  const [isUser, isAdmin, ] = ProtectedRouteHook();



  return (
    <div dir='rtl' className="App d-grid">
    <UtilityNavbar/>
    <Routes>
        <Route path='/E-commerce' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/categores' element={<Allcategorypage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/products/:id' element={<Productdetailspage/>}/>
        <Route path='/catpro/:id' element={<ProductCatFilter/>}/>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>



        <Route element={<ProtectedRoute auth={isAdmin}/>}>
              <Route path='/admin/*' element={<Admin/>}/>
              <Route path='/admin/addcategory' element={<Adminaddcategory/>}/>
              <Route path='/admin/addbrand' element={<Adminaddbrand/>}/>
              <Route path='/admin/addproduct' element={<Adminaddproduct/>}/>
              <Route path='/admin/edit/:id' element={<AdminEditproduct/>}/>
              <Route path='/admin/orders' element={<AdminOrders/>}/>
        </Route>
        <Route  element={<ProtectedRoute auth={isUser}/>} >
        <Route path='/userpage' element={<Userpage/>}/>
        <Route path='favproduct' element={<Userfavproduct/>}/>
        <Route path ='/orders' element={<Userorders/>}/>
        <Route path='/onlinepayment' element={<Onlinepayment/>}/>
        </Route>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
