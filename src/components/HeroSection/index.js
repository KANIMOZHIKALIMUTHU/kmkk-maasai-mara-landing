import React from "react";
import "./index.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Big Cats Week at Maasai Mara - Diwali 2023</h1>
          <p>Experience the breathtaking beauty and wildlife of Kenya.</p>
          <a href="#cta" className="btn hero-btn">Plan Your Trip</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
