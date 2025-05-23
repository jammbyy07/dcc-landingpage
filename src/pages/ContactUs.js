import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="contact-section">
      <div className="contact-header text-center">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We'd love to hear from you! Reach out with your questions or feedback.</p>
      </div>
      <Row className="g-4">
        <Col md={6}>
          <div className="contact-card contact-form-card">
            <h3 className="contact-subheading">Get in Touch</h3>
            <Form className="contact-form">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your Message" />
              </Form.Group>
              <Button variant="success" type="submit" className="contact-submit-btn">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div className="contact-card contact-details-card">
            <h3 className="contact-subheading">Contact Details</h3>
            <p><strong>Address:</strong> 123 School St, City, Country</p>
            <p><strong>Email:</strong> contact@school.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
