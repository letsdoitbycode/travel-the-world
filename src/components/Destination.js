// src/components/Destination.js
import React from 'react';
import './Destination.css';


const Destination = () => {
  return (
    <section className="section__container destination__container">
      <div className="section__header">
        <div>
          <h2 className="section__title">Explore top destinations</h2>
          <p className="section__subtitle">
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div className="destination__nav">
          <span><i className="ri-arrow-left-s-line"></i></span>
          <span><i className="ri-arrow-right-s-line"></i></span>
        </div>
      </div>
      <div className="destination__grid">
        <div className="destination__card">
          <img src="assets/destination-1.jpg" alt="destination" />
          <div className="destination__details">
            <p className="destination__title">Banff</p>
            <p className="destination__subtitle">Canada</p>
          </div>
        </div>
        <div className="destination__card">
          <img src="assets/destination-2.jpg" alt="destination" />
          <div className="destination__details">
            <p className="destination__title">Machu Picchu</p>
            <p className="destination__subtitle">Peru</p>
          </div>
        </div>
        <div className="destination__card">
          <img src="assets/destination-3.jpg" alt="destination" />
          <div className="destination__details">
            <p className="destination__title">Lauterbrunnen</p>
            <p className="destination__subtitle">Switzerland</p>
          </div>
        </div>
        <div className="destination__card">
          <img src="assets/destination-4.jpg" alt="destination" />
          <div className="destination__details">
            <p className="destination__title">Zhangjiajie</p>
            <p className="destination__subtitle">China</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Destination;
