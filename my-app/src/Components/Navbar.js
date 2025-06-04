import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        {/* Brand Name */}
        <a className="navbar-brand" href="/">Portfolio</a>

        {/* Social Media Links - RIGHT of Portfolio */}
        <div className="d-flex align-items-center">
          <a
            href="https://github.com/MdAwais343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3 fs-5"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/muhammad-awais-33570a277"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3 fs-5"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/@mhmdawys1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-4 fs-5"
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
