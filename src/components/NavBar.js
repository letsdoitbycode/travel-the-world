// src/components/NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="nav__logo">PathFinder<span>.</span></div>
      <ul className="nav__links">
        <li className="link"><a href="#">Home</a></li>
        <li className="link"><a href="#">Destinations</a></li>
        <li className="link"><a href="#">Pricing</a></li>
        <li className="link"><a href="#">Reviews</a></li>
      </ul>
      <button className="btn">Contact Us</button>
    </nav>
  );
};

export default NavBar;
