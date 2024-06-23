// src/components/Destination.js
import React from 'react';
import './Destination.css';

const destinations = [
  { title: "Banff", subtitle: "Canada", image: "assets/destination-1.jpg" },
  { title: "Machu Picchu", subtitle: "Peru", image: "assets/destination-2.jpg" },
  { title: "Lauterbrunnen", subtitle: "Switzerland", image: "assets/destination-3.jpg" },
  { title: "Zhangjiajie", subtitle: "China", image: "assets/destination-4.jpg" }
];

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
        {destinations.map((dest, index) => (
          <div className="destination__card" key={index}>
            <img src={dest.image} alt="destination" />
            <div className="destination__details">
              <p className="destination__title">{dest.title}</p>
              <p className="destination__subtitle">{dest.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
