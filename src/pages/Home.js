import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css';  // Custom Home page styles

const Home = () => {
  return (
    <Container>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to DCC!</h1>
        <p>Excellence in Education, a Legacy of Achievement.</p>
        <Button variant="primary" href="/about-us" className="cta-button">
          Learn More About Us
        </Button>
      </div>

      {/* Features Section */}
      <Row className="mt-5">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide top-notch education to all students and prepare them for the future.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be the leading school that inspires innovation and holistic development in every student.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Join Us Today</Card.Title>
              <Card.Text>
                Get started with your admission process now!
              </Card.Text>
              <Button variant="success" href="/admission">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
