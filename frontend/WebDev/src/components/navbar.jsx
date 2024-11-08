import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">WebDev Club</h1>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/about" className="navbar-link">About us</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact us</Link></li>
          <li><Link to="/join" className="navbar-link">Join Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
