import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
import { GiShoppingCart } from "react-icons/gi"

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className="container">
        <div className="info">
          <div className="menu">
            <ul>
              <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
              <li onClick={()=>{setMenu("men")}}><Link to="/men">Mens</Link>{menu==="men"?<hr/>:<></>}</li>
              <li onClick={()=>{setMenu("women")}}><Link to="/women">Womens</Link>{menu==="women"?<hr/>:<></>}</li>
              <li onClick={()=>{setMenu("kid")}}><Link to="/kid">Kids</Link>{menu==="kid"?<hr/>:<></>}</li>
            </ul>
          </div>
          <div className="logo">
            <h3><Link to="/"><span>E-</span>com</Link></h3>
          </div>
          <div className="login-cart">
            <Link to="/login">login</Link>
            <div className="cart">
              <Link to="/cart"><GiShoppingCart /></Link>
              <span>07</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar