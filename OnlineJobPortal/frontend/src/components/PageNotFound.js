import React from 'react';

const PageNotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {/* Big Graphic / Status Code */}
          <h1 className="display-1 fw-bold text-primary mb-0" style={{ fontSize: '8rem' }}>
            404
          </h1>

          {/* Subtitle */}
          <h2 className="mb-3 fw-semibold text-dark">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="text-muted mb-4 lead">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="d-flex flex-sm-row flex-column justify-content-center gap-3">
            <a href="/" className="btn btn-primary btn-lg px-4 shadow-sm">
              <i className="bi bi-house-door me-2"></i>Back to Home
            </a>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;