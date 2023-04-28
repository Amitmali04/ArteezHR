import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="../Images/logo.jpg" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contacts">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
