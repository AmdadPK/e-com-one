import React from 'react'
import './Studio.css'
import { Link } from "react-router-dom"
import bgImg from '../../assets/fixed-background.webp'

const Studio = () => {
  return (
    <div className='studio-style' style={{"--bag-img" : `url(${bgImg})`}}>
      <div className="container">
        <div className="studio-info">
          <div className="title">Style Studio</div>
          <div className="s-title">the Fashion  store</div>
          <div className="offer">50% Sale offer</div>
          <Link to="/men" className='shop-btn'>Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Studio