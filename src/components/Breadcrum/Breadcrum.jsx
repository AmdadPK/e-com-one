import React from 'react'
import './Breadcrum.css'
import { Link } from 'react-router-dom';
import { FaAnglesRight } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

const Breadcrum = (props) => {
  const {product} = props
  return (
    <div className='breadcrum'>
      <ul>
        <li><Link to="/"><IoHome /> Home</Link></li>
        <li><FaAnglesRight /></li>
        <li>Shop</li>
        <li><FaAnglesRight /></li>
        <li>
          <Link to={`/${product.category}`}>{product.category}</Link>
        </li>
        <li><FaAnglesRight /></li>
        <li>{product.name}</li>
      </ul>
    </div>
  )
}

export default Breadcrum