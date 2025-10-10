import React from "react";

function Education() {
  return (
    <div className="education-section">
      <div className="container">
        <h1 className="education-title">Free and open market education</h1>
        <p className="education-subtitle">
          Expand your financial knowledge with our comprehensive educational resources
        </p>
        
        <div className="education-cards">
          <div className="education-card">
            <img src="media/images/varsity.png" alt="Varsity" />
            <div className="education-card-content">
              <h3 className="education-card-title">Varsity</h3>
              <p className="education-card-text">
                The largest online stock market education book in the world
                covering everything from the basics to advanced trading.
              </p>
              <button className="education-card-button">
                Explore Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          
          <div className="education-card">
            <img src="media/images/education.svg" alt="Trading Q&A" />
            <div className="education-card-content">
              <h3 className="education-card-title">Trading Q&A</h3>
              <p className="education-card-text">
                The most active trading and investment community in
                India for all your market related queries.
              </p>
              <button className="education-card-button">
                Visit Forum <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;