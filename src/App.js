// src/App.js
import React from 'react';
import './App.css';
import './index';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Destination from './components/Destination';
import Trip from './components/Trip';
import Gallery from './components/Gallery';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Destination />
      <Trip />
      <Gallery />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
