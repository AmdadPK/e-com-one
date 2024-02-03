import React from 'react'
import "./Slider.css"
import { Link } from "react-router-dom"
import sliderImg from "../../assets/slide-1.png"

const Slider = () => {
  return (
    <div className='slider'>
      <img src={sliderImg} alt="" />
      <div className="slider-info">
        <div className="container">
          <div className="content">
            <h1>This is our new collection products!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic voluptas tenetur itaque voluptatum maxime deleniti? Illo quisquam quae dolor modi, accusantium magni recusandae quasi excepturi, rem, corrupti earum nisi.</p>
            <Link to="/product" className='shop-btn'>Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider