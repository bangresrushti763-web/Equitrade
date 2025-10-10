import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row py-5 my-5 border-bottom text-center">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 fw-bold">Pricing</h1>
          <h3 className="text-muted mt-3 fs-4">
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>
      
      <div className="row py-5">
        <div className="col-lg-10 mx-auto">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="pricing-icon mb-4">
                    <img src="media/images/pricingEquity.svg" alt="Free equity delivery" className="img-fluid" />
                  </div>
                  <h3 className="fs-4 fw-bold">Free equity delivery</h3>
                  <p className="text-muted">
                    All equity delivery investments (NSE, BSE), are absolutely free — ₹
                    0 brokerage.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="pricing-icon mb-4">
                    <img src="media/images/intradayTrades.svg" alt="Intraday and F&O trades" className="img-fluid" />
                  </div>
                  <h3 className="fs-4 fw-bold">Intraday and F&O trades</h3>
                  <p className="text-muted">
                    Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
                    intraday trades across equity, currency, and commodity trades.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="pricing-icon mb-4">
                    <img src="media/images/pricingMF.svg" alt="Free direct MF" className="img-fluid" />
                  </div>
                  <h3 className="fs-4 fw-bold">Free direct MF</h3>
                  <p className="text-muted">
                    All direct mutual fund investments are absolutely free — ₹ 0
                    commissions & DP charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;