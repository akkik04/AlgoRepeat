import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../../styles/signup/signup.css';

function Signup() {
  const history = useHistory(); // instantiate useHistory
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, formData);
      alert("You have successfully registered. Please login to continue");
      console.log(response.data);
      history.push('/login'); // redirect to /login on successful registration

    } catch (error) {
      console.error(error.response.data);
      setMessage(null);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
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
