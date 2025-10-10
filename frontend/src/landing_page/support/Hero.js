import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center py-2">
          <h4 className="mb-0">Support Portal</h4>
          <a href="#" className="text-white text-decoration-none">
            Track Tickets
          </a>
        </div>
      </div>
      
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fs-3 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="input-group mb-4">
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Eg. how do I activate F&O"
                style={{ borderRadius: "50px" }}
              />
              <button className="btn btn-light" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-white text-decoration-none">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-none">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-none">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-none">
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="fs-3 mb-4">Featured</h2>
            <ol className="ps-4">
              <li className="mb-3">
                <a href="#" className="text-white text-decoration-none">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;