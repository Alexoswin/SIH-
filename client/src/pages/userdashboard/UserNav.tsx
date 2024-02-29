import React, { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserNav: React.FC = () => {
  useEffect(() => {
    // Dynamically load Bootstrap and its dependencies
    const loadBootstrap = async () => {
      try {
        // Load Bootstrap CSS dynamically
        const bootstrapCSS = document.createElement('link');
        bootstrapCSS.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
        bootstrapCSS.rel = 'stylesheet';
        bootstrapCSS.id = 'bootstrapCSS';
        document.head.appendChild(bootstrapCSS);

        // Load jQuery dynamically
        const jQueryScript = document.createElement('script');
        jQueryScript.src = 'https://code.jquery.com/jquery-3.2.1.slim.min.js';
        jQueryScript.async = true;
        jQueryScript.id = 'jQueryScript';
        document.head.appendChild(jQueryScript);

        // Load Popper.js dynamically
        const popperScript = document.createElement('script');
        popperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
        popperScript.async = true;
        popperScript.id = 'popperScript';
        document.head.appendChild(popperScript);

        // Load Bootstrap JS dynamically
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
        bootstrapScript.async = true;
        bootstrapScript.id = 'bootstrapScript';
        document.head.appendChild(bootstrapScript);
      } catch (error) {
        console.error('Error loading Bootstrap:', error);
      }
    };

    loadBootstrap();

    return () => {
      // Cleanup: Remove added elements on component unmount
      document.head.removeChild(document.getElementById('bootstrapCSS'));
      document.head.removeChild(document.getElementById('jQueryScript'));
      document.head.removeChild(document.getElementById('popperScript'));
      document.head.removeChild(document.getElementById('bootstrapScript'));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ marginLeft: '20px' }}>
          <img src="logo.svg" alt="" />
          <span style={{ color: 'white', marginLeft: '10px' }}>NashaMukti</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ContactUs" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item1 ml-auto">
              <Link to="/login_landing" className="nav-link">
                <FaUser />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
