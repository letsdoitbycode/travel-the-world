// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="section__container header__container">
        <div className="header__image">
          <img src="assets/header-1.jpg" alt="header" />
          <img src="assets/header-2.jpg" alt="header" />
        </div>
        <div className="header__content">
          <div>
            <p className="sub__header">Book Now</p>
            <h1>The Smiling 😊<br />agent for travel</h1>
            <p className="section__subtitle">
              Make your travel more enjoyable with us. We are the best travel
              agency and we are providing the best travel services for our
              clients.
            </p>
            <div className="action__btns">
              <button className="btn">Plan a Trip</button>
              <div className="story">
                <div className="video__image">
                  <img src="assets/story.jpg" alt="story" />
                  <span><i className="ri-play-fill"></i></span>
                </div>
                <span>Watch our story</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
