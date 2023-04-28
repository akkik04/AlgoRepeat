// Navbar.js
import React from 'react';
import '../../styles/navbar/navbar.css';
import logo from '../../assets/RepetiPro_Logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Repetipro Logo" className="navbar-logo" />
        <h1 className="navbar-brand">RepetiPro</h1>
      </div>
      <ul className="navbar-right">
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Log in</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
