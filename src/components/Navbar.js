import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';  // Custom Navbar styles

const MyNavbar = () => {
  return (
    <Navbar bg="Green" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        {/* Logo and School Name */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/images/davao-central-college-logo.png"  // Path to your logo
            style={{ width: '70px', height: '70px', marginRight: '10px' }}  // Adjust size as needed
          />
          <span className="school-name">Davao Central College</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Using d-flex and justify-content-end */}
          <Nav className="custom-navbar-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/academic-programs">Academic Programs</Nav.Link>
            <Nav.Link href="/admission">Admission</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
