import React from 'react'
import Slider from '../../components/Homepage/Slider'
import Catogeryhome from '../../components/Homepage/Catogeryhome'
import HomeProducts from '../../components/Products/HomeProducts'
import Brandhome from '../../components/Brands/Brandhome'
import Discount from '../../components/Homepage/Discount'
import ViewProductHomeHook from '../../hook/product/view-product-home'
import GetCategoryHome from '../../hook/category/get-category'

const Home = () => {

  const [items] = ViewProductHomeHook();
  const [categoryitems] = GetCategoryHome();

  return (
    <div>
    <Catogeryhome data = {categoryitems}/>
      <Slider/>
      <Brandhome/>
      <Discount/>

      <HomeProducts products= {items} title={'احدث المنتجات'} btnname={'المزيد'} titlepath="/products"/>

      <Discount/>
      <HomeProducts products= {items} title={'الاكثر مبيعا'} btnname={'المزيد'} titlepath="/products"/>
      <Discount/>
      <HomeProducts products= {items} title={'الاكثر مبيعا'} btnname={'المزيد'} titlepath="/products"/>
    </div>
  )
}

export default Home
