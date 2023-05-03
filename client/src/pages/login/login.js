import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import ErrorBox from '../../components/errorDisplay/errorDisplay';
import '../../styles/login/login.css';

function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, formData);
      console.log(response.data);

      // store cookie returned from backend in the browser.
      document.cookie = `token=${response.data.token}; path=/`;


      history.push('/home');
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.error);
    }
  };

  const closeErrorBox = () => {
    setError(null);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Login</h2>
        {error && <ErrorBox message={error} onClose={closeErrorBox} />}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
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
