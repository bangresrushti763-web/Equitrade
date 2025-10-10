import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5 my-5">
      <div className="row py-5 my-5">
        <div className="col-lg-8 mx-auto text-center">
          <div className="display-1 fw-bold mb-4">404</div>
          <h1 className="mb-4">Page Not Found</h1>
          <p className="lead mb-5">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;