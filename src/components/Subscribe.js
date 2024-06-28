// src/components/Subscribe.js
import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="section__container subscribe__container">
        <div className="subscribe__content">
          <h2 className="section__title">Subscribe to get special prize</h2>
          <p className="section__subtitle">
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div className="subscribe__form">
          <form>
            <input type="email" placeholder="Your email here" />
            <button className="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
