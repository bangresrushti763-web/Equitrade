import React from "react";

function Team() {
  return (
    <div className="container py-5">
      <div className="row py-5 my-5 border-top">
        <div className="col-lg-10 mx-auto">
          <h1 className="text-center mb-5">Our Leadership Team</h1>
          
          <div className="row align-items-center">
            <div className="col-lg-5 text-center mb-4 mb-lg-0">
              <img
                src="media/images/Srushti.png"
                alt="Srushti Bangre"
                className="rounded-circle img-fluid"
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-7">
              <h2 className="mb-3">Srushti Bangre</h2>
              <h5 className="text-primary mb-4">Founder, CEO</h5>
              <p className="lead">
                Srushti bootstrapped and founded Equitrade in 2010 to overcome the
                hurdles she faced during her journey as a trader. Today,
                Equitrade has changed the landscape of the Indian broking industry.
              </p>
              <p>
                She is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p>Playing basketball is her zen.</p>
              <div className="mt-4">
                <p className="mb-0">
                  Connect on: 
                  <a href="#" className="text-decoration-none ms-2">Homepage</a> / 
                  <a href="#" className="text-decoration-none mx-2">TradingQnA</a> / 
                  <a href="#" className="text-decoration-none mx-2">Twitter</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;