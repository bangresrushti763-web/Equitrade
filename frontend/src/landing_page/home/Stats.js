import React from "react";

function Stats() {
  return (
    <div className="stats-section">
      <div className="container">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-value">1.3 Cr+</div>
            <div className="stat-label">Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">₹3.5 Lakh Cr</div>
            <div className="stat-label">In Equity Investments</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">30+</div>
            <div className="stat-label">Fintech Partnerships</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">2500+</div>
            <div className="stat-label">Employees</div>
          </div>
        </div>
        
        <div className="row p-5 mt-5">
          <div className="col-lg-6 p-5">
            <h1 className="fs-2 mb-4">Trust with confidence</h1>
            <h2 className="fs-4 mb-3">Customer-first always</h2>
            <p className="text-light mb-4">
              That's why 1.3+ crore customers trust Equitrade with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
            <h2 className="fs-4 mb-3">No spam or gimmicks</h2>
            <p className="text-light mb-4">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h2 className="fs-4 mb-3">The Equitrade universe</h2>
            <p className="text-light mb-4">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your needs.
            </p>
            <h2 className="fs-4 mb-3">Do better with money</h2>
            <p className="text-light">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-lg-6 p-5">
            <img src="media/images/ecosystem.png" alt="Ecosystem" className="img-fluid" />
            <div className="text-center mt-4">
              <a href="#" className="mx-3 text-light" style={{ textDecoration: "none" }}>
                Explore our products{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#" className="mx-3 text-light" style={{ textDecoration: "none" }}>
                Try Kite demo{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;