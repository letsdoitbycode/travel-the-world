// src/components/Trip.js
import React from 'react';
import './Trip.css';

const Trip = () => {
  return (
    <section className="trip">
      <div className="section__container trip__container">
        <h2 className="section__title">Best trip package</h2>
        <p className="section__subtitle">
          Explore your suitable and dream places around the world. Here you can
          find your right destination.
        </p>
        <div className="trip__grid">
          <div className="trip__card">
            <img src="assets/trip-1.jpg" alt="trip" />
            <div className="trip__details">
              <p>Wasserwerk Frelberg, Germany</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.2</div>
              <div className="booking__price">
                <div className="price"><span>From</span> $300</div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
          <div className="trip__card">
            <img src="assets/trip-2.jpg" alt="trip" />
            <div className="trip__details">
              <p>Patagonia, Argentina and Chile</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.5</div>
              <div className="booking__price">
                <div className="price"><span>From</span> $450</div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
          <div className="trip__card">
            <img src="assets/trip-3.jpg" alt="trip" />
            <div className="trip__details">
              <p>The Dolomites, Italy</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
              <div className="booking__price">
                <div className="price"><span>From</span> $400</div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="view__all">
          <button className="btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default Trip;
