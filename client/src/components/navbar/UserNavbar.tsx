import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./userNavbar.scss";

const Navbar = () => {
  useEffect(() => {
    // Dynamically import Bootstrap styles
    import("bootstrap/dist/css/bootstrap.min.css");
    // Dynamically import Bootstrap JavaScript
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="logo.svg" alt="" />
        </Link>
        <h1 className="navbar-title" style={{ textTransform: 'capitalize' }}>nashaMukti</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
            
          </ul>
        </div>

        <Link to="/login_landing" className="user-icon">
          <FaUser />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
