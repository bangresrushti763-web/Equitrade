import React from "react";

function Pricing() {
  return (
    <div className="pricing-section">
      <div className="container">
        <h1 className="pricing-title">Unbeatable pricing</h1>
        <p className="pricing-subtitle">
          We pioneered the concept of discount broking and price transparency
          in India. Flat fees and no hidden charges.
        </p>
        
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-icon">
              <img src="media/images/pricingEquity.svg" alt="Equity Pricing" />
            </div>
            <h3 className="pricing-card-title">Equity</h3>
            <div className="pricing-card-price">₹0</div>
            <ul className="pricing-card-features">
              <li>Free equity delivery</li>
              <li>Direct mutual funds</li>
              <li>No hidden charges</li>
            </ul>
            <button className="pricing-card-button">Learn More</button>
          </div>
          
          <div className="pricing-card popular">
            <div className="popular-badge">Popular</div>
            <div className="pricing-icon">
              <img src="media/images/pricing0.svg" alt="Intraday Pricing" />
            </div>
            <h3 className="pricing-card-title">Intraday</h3>
            <div className="pricing-card-price">₹20</div>
            <ul className="pricing-card-features">
              <li>Per executed order</li>
              <li>Intraday and F&O</li>
              <li>Free for CNC</li>
            </ul>
            <button className="pricing-card-button">Learn More</button>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-icon">
              <img src="media/images/pricingMF.svg" alt="Mutual Funds" />
            </div>
            <h3 className="pricing-card-title">Mutual Funds</h3>
            <div className="pricing-card-price">₹0</div>
            <ul className="pricing-card-features">
              <li>Free direct plans</li>
              <li>No commission</li>
              <li>Zero exit load</li>
            </ul>
            <button className="pricing-card-button">Learn More</button>
          </div>
        </div>
        
        <div className="text-center mt-5">
          <a href="/pricing" className="hero-button" style={{ textDecoration: "none" }}>
            See Full Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;