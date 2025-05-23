import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Admission = () => (
  <div className="admission-reqs-section">
    <h1 className="admission-reqs-title">Admission Requirements</h1>
    <div className="admission-reqs-content">
      <div>
        <h2 className="admission-reqs-heading">College (Freshmen)</h2>
        <ul className="admission-reqs-list">
          <li>Original REPORT CARD (SF 9)</li>
          <li>Original and photo copy of Birth Certificate (PSA/NSO Authenticated)</li>
          <li>Certificate of good moral character (Signed by the Guidance Counselor/Principal)</li>
          <li>2 pcs. passport size picture</li>
        </ul>
      </div>
      <div>
        <h2 className="admission-reqs-heading">College (Transferees)</h2>
        <ul className="admission-reqs-list">
          <li>Transcript of Record (TOR)</li>
          <li>Honorable Dismissal</li>
          <li>Original and photo copy of Birth Certificate (PSA/NSO Authenticated)</li>
          <li>2 pcs. passport size picture</li>
        </ul>
      </div>
    </div>
    <div className="admission-reqs-buttons">
      <button className="admission-reqs-btn">ENROLL NOW</button>
      <button className="admission-reqs-btn">ON-CAMPUS ENROLLMENT</button>
    </div>
  </div>
);

export default Admission;
