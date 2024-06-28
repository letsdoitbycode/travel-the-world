// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3>Pathway<span>.</span></h3>
          <p>
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="footer__col">
          <h4>Address</h4>
          <p>
            <span>Address:</span> MIT Academy of Engineering, Pune
            India
          </p>
          <p><span>Email:</span> bhosale.akshay1305@gmail.com</p>
          <p><span>Phone:</span> +91 9604995599</p>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 TravelTheWorld . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
