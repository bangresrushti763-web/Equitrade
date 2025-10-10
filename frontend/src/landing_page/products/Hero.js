import React from "react";

function Hero() {
  return (
    <div className="container border-bottom py-5">
      <div className="row py-5">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold">Technology</h1>
          <h3 className="text-muted mt-3 fs-4">
            Sleek, modern and intuitive trading platforms
          </h3>
          <p className="mt-4">
            Check out our{" "}
            <a href="/pricing" className="text-decoration-none fw-semibold">
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;