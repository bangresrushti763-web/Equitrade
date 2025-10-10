import React from "react";

function Signup() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "50px 0" }}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-5">
              <div className="text-center mb-5">
                <img 
                  src="media/images/equitrade.svg" 
                  alt="Equitrade Logo" 
                  style={{ width: "180px", height: "auto" }}
                  className="mb-4"
                />
                <h2 className="fw-bold">Create Your Account</h2>
                <p className="text-muted">Join Equitrade today and start investing</p>
              </div>
              
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="firstName" 
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="col-md-6 mb-4">
                    <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="lastName" 
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    id="email" 
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">Password</label>
                  <input 
                    type="password" 
                    className="form-control form-control-lg" 
                    id="password" 
                    placeholder="Create a password"
                  />
                  <div className="form-text">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="mobile" className="form-label fw-semibold">Mobile Number</label>
                  <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <input 
                      type="tel" 
                      className="form-control form-control-lg" 
                      id="mobile" 
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>
                
                <div className="form-check mb-4">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="termsCheck"
                  />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>
                  </label>
                </div>
                
                <div className="d-grid mb-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    style={{ 
                      backgroundColor: "#007bff", 
                      borderColor: "#007bff",
                      padding: "12px 20px",
                      fontWeight: "600"
                    }}
                  >
                    Create Account
                  </button>
                </div>
                
                <div className="text-center">
                  <p className="mb-0">
                    Already have an account?{" "}
                    <a href="/login" className="text-decoration-none fw-semibold">
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-muted small">
              © 2024 Equitrade. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;