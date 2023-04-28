import React from 'react';
import '../../styles/footer/footer.css';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">RepetiPro 🧑‍💻 (2023) by Akshith Kandivanam</p>
          <div className="footer__icons">
            <a href="https://twitter.com/akki04x" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://github.com/akkik04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/akshith-kandivanam/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
