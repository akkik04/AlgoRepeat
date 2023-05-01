// Navbar.js
import React from 'react';
import '../../styles/navbar/navbar.css';
import logo from '../../assets/REPETIPRO.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href='/'>
        <img src={logo} alt="Repetipro Logo" className="navbar-logo" />
        </a>
        <a href='/'>
        <h1 className="navbar-brand">RepetiPro 🧑‍💻</h1>
        </a>
      </div>
      <ul className="navbar-right">
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Sign up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Log in</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
