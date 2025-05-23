import React from 'react';
import { FaSchool, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FooterContact = () => (
  <div className="footer-contact-section">
    <h2 className="footer-contact-title">GET IN TOUCH WITH US!</h2>
    <div className="footer-contact-underline"></div>
    <div className="footer-contact-cards">
      <div className="footer-contact-card">
        <FaSchool className="footer-contact-icon" />
        <div className="footer-contact-label">SCHOOL HOURS</div>
        <div className="footer-contact-info"><strong>Monday to Friday</strong></div>
        <div className="footer-contact-info">8:00 AM to 5:00 PM</div>
      </div>
      <div className="footer-contact-card">
        <FaPhoneAlt className="footer-contact-icon" />
        <div className="footer-contact-label">TEL. NOS.</div>
        <div className="footer-contact-info">Accounting Office: (082) 291-1882</div>
        <div className="footer-contact-info">Registrar's Office: (082) 296-9992</div>
      </div>
      <div className="footer-contact-card">
        <FaEnvelope className="footer-contact-icon" />
        <div className="footer-contact-label">EMAIL</div>
        <div className="footer-contact-info">davaocentralcollege2011@gmail.com</div>
      </div>
    </div>
  </div>
);

export default FooterContact; 