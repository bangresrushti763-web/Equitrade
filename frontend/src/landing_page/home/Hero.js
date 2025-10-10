import React from "react";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Invest in everything</h1>
        <p className="hero-subtitle">
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
        <button className="hero-button">
          Signup Now
        </button>
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default Hero;