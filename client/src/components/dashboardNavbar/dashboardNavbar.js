import React from 'react';
import '../../styles/dashboardNavbar/dashboardNavbar.css'
import logo from '../../assets/REPETIPRO.png';

function DashboardNavbar() {
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
          <a className="nav-link" href="/logout">Log out</a>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNavbar;
