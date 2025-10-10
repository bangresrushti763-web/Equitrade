import React from "react";

function Awards() {
  return (
    <div className="awards-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 p-5">
            <img src="media/images/pressLogos.png" alt="Awards and Recognition" className="img-fluid" />
          </div>
          <div className="col-lg-6 p-5">
            <h1 className="mb-4">Largest stock broker in India</h1>
            <p className="mb-4">
              2+ million Equitrade clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <p>Futures and Options</p>
                  </li>
                  <li className="mb-2">
                    <p>Commodity derivatives</p>
                  </li>
                  <li className="mb-2">
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <p>Stocks & IPOs</p>
                  </li>
                  <li className="mb-2">
                    <p>Direct mutual funds</p>
                  </li>
                  <li className="mb-2">
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
            </div>
            <img src="media/images/pressLogos.png" alt="Press Logos" className="img-fluid mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;