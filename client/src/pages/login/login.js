import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login/login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Log In</button>
        </form>
        <div className="signup-link-container">
          <span>Don't have an account? </span>
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

