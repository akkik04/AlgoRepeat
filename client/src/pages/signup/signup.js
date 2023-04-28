import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/signup/signup.css';


function Signup() {
  return (
    
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-link-container">
          <span>Already have an account? </span>
          <Link to="/login" className="login-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
