import React from 'react'
import './css/Contact.css'
import leftImg from '../assets/contact-page.webp'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="info">
          <div className="left">
            <h4 className='short'>Contact Us</h4>
            <h2 className='title'>Get in touch</h2>
            <p className='details'>We’re always happy to help, but first you may find what you need here in the frequently asked questions.</p>
            <div className="address">
              <div className="location">
                <h4>For Live Location :</h4>
                <span>4925 North Scottsdale Road,<br/>Gulshan, Dhaka-1202</span>
              </div>
              <div className="phone">
                <h4>For Reservations please call :</h4>
                <span>+8801777-123456</span>
              </div>
              <div className="email">
                <h4>You Can Email Us :</h4>
                <span>info@ourecom.com</span>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={leftImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact