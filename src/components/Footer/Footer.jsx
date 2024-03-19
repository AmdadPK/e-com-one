import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="container">
          <h1>Bangladeshi Developer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vero tempora, iure excepturi rem quo doloribus itaque voluptatum aliquam corrupti nisi doloremque modi quam repudiandae aspernatur. Recusandae error ducimus quia?</p>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="info">
            <div className="logo">
              <h3><Link to="/"><span>E-</span>com</Link></h3>
            </div>
            <div className="menu">
              <ul>
                <li><Link to="/about">About </Link></li>
                <li><Link to="/contact">Contact </Link></li>
                <li><Link to="/">Shop </Link></li>
                <li><Link to="/">Terms </Link></li>
                <li><Link to="/">Privacy </Link></li>
              </ul>
            </div>
            <div className="social">
              <a href=""><FaFacebook /></a>
              <a href=""><FaYoutube /></a>
              <a href=""><FaXTwitter /></a>
              <a href=""><FaLinkedin /></a>
            </div>
          </div>
          <div className="copy-right">
            <h6>2024. All Rights Reserved!</h6>
            <p>Built by ReactJs E-commerce 😍</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer