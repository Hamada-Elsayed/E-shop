import { combineReducers } from "redux";
import getallcategores from "./Get-allcategoreys";
import { Brands } from "./Brands";
import { Subcategorys } from "./Sub-category";
import { Products } from "./Products";
import { Auth } from "./Auth";
import {Userwishlist} from './Userwishlist'
import {Cart} from './Cart';
import { Order } from "./Order";

export default combineReducers({
  Allcategory:getallcategores,
  Brands:Brands,
  Subcategorys:Subcategorys,
  Products:Products,
  Auth:Auth,
  Userwishlist:Userwishlist,
  Cart:Cart,
  Order:Order,
})