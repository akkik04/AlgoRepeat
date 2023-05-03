import React from 'react';
import axios from 'axios';
import '../../styles/dashboardNavbar/dashboardNavbar.css'
import logo from '../../assets/REPETIPRO.png';

function DashboardNavbar() {

  async function handleLogout() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          'Cache-Control': 'no-cache',
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data);
    }
  }

  function getAuthToken() {
    const authToken = document.cookie.split('; ').find(row => row.startsWith('authToken=')).split('=')[1];
    return authToken;
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href='/home'>
          <img src={logo} alt="Repetipro Logo" className="navbar-logo" />
        </a>
        <a href='/home'>
          <h1 className="navbar-brand">RepetiPro 🧑‍💻</h1>
        </a>
      </div>
      <ul className="navbar-right">
        <li className="nav-item">
          <a className="nav-link" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/calendar">Calendar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" onClick={handleLogout}>Log out</a>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNavbar;