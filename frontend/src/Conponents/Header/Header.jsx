import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="path/to/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a to="">Home</a></li>
          <li><a to="">About Us</a></li>
          <li><a to="">Services</a></li>
          <li><a to="">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
