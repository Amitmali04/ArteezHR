import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="../Images/banner2.jpg" alt="Background" />
      </div>
      <div className="hero-content">
        <h1>Welcome to our website</h1>
      </div>
    </section>
  );
}

export default HeroSection;
