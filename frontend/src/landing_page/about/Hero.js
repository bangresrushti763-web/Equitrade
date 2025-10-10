import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row py-5 my-5">
        <div className="col-lg-10 mx-auto">
          <h1 className="display-4 fw-bold text-center mb-4">
            We pioneered the discount broking model in India
          </h1>
          <h2 className="text-center text-primary fs-3">
            Now, we are breaking ground with our technology.
          </h2>
        </div>
      </div>

      <div className="row py-5 border-top">
        <div className="col-lg-10 mx-auto">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <p className="lead">
                We kick-started operations on the 15th of August, 2010 with the goal
                of breaking all barriers that traders and investors face in India in
                terms of cost, support, and technology. We named the company
                Equitrade, a combination of Equity and Trade, representing our focus
                on empowering traders and investors.
              </p>
              <p>
                Today, our disruptive pricing models and in-house technology have
                made us one of the leading stock brokers in India.
              </p>
              <p>
                Over 1+ Crore clients place millions of orders every day through our
                powerful ecosystem of investment platforms, contributing over 15% of
                all Indian retail trading volumes.
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                In addition, we run a number of popular open online educational and
                community initiatives to empower retail traders and investors.
              </p>
              <p>
                <a href="#" className="text-decoration-none fw-semibold">
                  Rainmatter
                </a>
                , our fintech fund and incubator, has invested in several fintech
                startups with the goal of growing the Indian capital markets.
              </p>
              <p>
                And yet, we are always up to something new every day. Catch up on
                the latest updates on our blog or see what the media is saying about
                us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;