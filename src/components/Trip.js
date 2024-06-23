// src/components/Trip.js
import React from 'react';
import './Trip.css';

const trips = [
  { title: "Wasserwerk Frelberg, Germany", rating: 4.2, price: 300, image: "assets/trip-1.jpg" },
  { title: "Patagonia, Argentina and Chile", rating: 4.5, price: 450, image: "assets/trip-2.jpg" },
  { title: "The Dolomites, Italy", rating: 4.7, price: 400, image: "assets/trip-3.jpg" }
];

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
          {trips.map((trip, index) => (
            <div className="trip__card" key={index}>
              <img src={trip.image} alt="trip" />
              <div className="trip__details">
                <p>{trip.title}</p>
                <div className="rating"><i className="ri-star-fill"></i> {trip.rating}</div>
                <div className="booking__price">
                  <div className="price"><span>From</span> ${trip.price}</div>
                  <button className="book__now">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view__all">
          <button className="btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default Trip;
