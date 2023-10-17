import React from 'react'
import Slider from '../../components/Homepage/Slider'
import Catogeryhome from '../../components/Homepage/Catogeryhome'
import HomeProducts from '../../components/Products/HomeProducts'
import Brandhome from '../../components/Brands/Brandhome'
import Discount from '../../components/Homepage/Discount'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Catogeryhome/>
      <HomeProducts/>
      <Discount/>
      <Brandhome/>
    </div>
  )
}

export default Home
