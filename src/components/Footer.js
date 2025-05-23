import React from 'react';
import './Footer.css'; // Or use global.css

const Footer = () => (
  <footer className="dcc-footer">
    <div className="dcc-footer-overlay">
      <div className="dcc-footer-content">
        <img
          src="/images/davao-central-college-logo.png"
          alt="Davao Central College Logo"
          className="dcc-footer-logo"
        />
        <div className="dcc-footer-contact">
          <div>+63 (082) 991 1882 - Main Campus</div>
          <div>+63 (082) 296 9992 - Registrar's Office</div>
          <div>info@dcc.edu.ph</div>
        </div>
        <hr className="dcc-footer-divider" />
        <div className="dcc-footer-copy">
          © 2024 Davao Central College | All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
