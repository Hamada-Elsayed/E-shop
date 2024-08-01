import { useEffect, useState } from 'react'
import {GetProductHook} from './get-product';

const SearchProductHook = () => {

    const [items,getproduct] = GetProductHook();
    const [searchword,setsearchword] = useState('');

  const onchangeword = (e) => {

    localStorage.setItem('word',e.target.value)
    setsearchword(e.target.value);
    const path = window.location.pathname;

    if(path !== '/products'){
      window.location.href = ('/products')
    }
  }

  useEffect (() => {
        getproduct();
  },[searchword])

  return[searchword,onchangeword]


}

export default SearchProductHook;
