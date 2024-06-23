// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallary">
      <div className="section__container gallary__container">
        <div className="image__gallary">
          <div className="gallary__col">
            <img src="assets/gallery-1.jpg" alt="gallary" />
          </div>
          <div className="gallary__col">
            <img src="assets/gallery-2.jpg" alt="gallary" />
            <img src="assets/gallery-3.jpg" alt="gallary" />
          </div>
        </div>
        <div className="gallary__content">
          <div>
            <h2 className="section__title">
              Our trip gallary that will inspire you
            </h2>
            <p className="section__subtitle">
              Explore your suitable and dream places around the world. Here you
              can find your right destination.
            </p>
            <button className="btn">View All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
