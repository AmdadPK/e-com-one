import React from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="signup-form">
        <div className="head-title">Sign Up</div>
        <form action="" className='form-action'>
          <input type="text" className='input-form' placeholder='Your Name' />
          <input type="email" className='input-form' placeholder='E-mail Address' />
          <input type="password" className='input-form' placeholder='Password' />
          <input type="submit" className='submit-btn' value='Continue' />
          <div className="others">
            <p>Already have an account? <a href="">Login here</a></p>
            <div className="checkbox-group">
              <input type="checkbox" />
              <label>By continuing, i agree to the terms of use & privacy policy.</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup