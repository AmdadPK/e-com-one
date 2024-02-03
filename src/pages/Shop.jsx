import React from 'react'
import Slider from '../components/Slider/Slider'
import NewCollection from '../components/NewCollection'
import PopularProduct from '../components/PopularProduct'
import Studio from '../components/Studio/Studio'

const Shop = () => {
  return (
    <div className='top-page-content'>
      <Slider/>
      <NewCollection/>
      <Studio/>
      <PopularProduct/>
    </div>
  )
}

export default Shop