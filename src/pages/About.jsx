import React from 'react'
import './css/About.css'
import aboutOne from '../assets/about1.webp'
import aboutTwo from '../assets/about2.png'
import aboutThree from '../assets/about3.png'

const About = () => {
  return (
    <div className='about-us'>
      <div className="container">
        <div className="slider-text">
          <h2>
            <span>From the living room to</span>
            <span>Shark Tank to now.</span>
          </h2>
        </div>
        <hr />
        <div className="content">
          <div className="left">
            <span className='short'>About Us</span>
            <h3 className='title'>It all started in the living room...</h3>
            <p className='details'>Lindsay presses the first tablets on a mission to do better—for you and the planet.</p>
          </div>
          <div className="image">
            <img src={aboutOne} alt="" />
          </div>
        </div>
        <hr />
        <div className="content">
          <div className="left">
            <span className='short'>About Us</span>
            <h3 className='title'>It all started in the living room...</h3>
            <p className='details'>Lindsay presses the first tablets on a mission to do better—for you and the planet.</p>
          </div>
          <div className="image">
            <img src={aboutTwo} alt="" />
          </div>
        </div>
        <hr />
        <div className="content">
          <div className="left">
            <span className='short'>About Us</span>
            <h3 className='title'>It all started in the living room...</h3>
            <p className='details'>Lindsay presses the first tablets on a mission to do better—for you and the planet.</p>
          </div>
          <div className="image">
            <img src={aboutThree} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About