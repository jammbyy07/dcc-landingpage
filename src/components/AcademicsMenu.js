import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBusinessTime, FaChalkboardTeacher, FaPalette, FaBalanceScale, FaHotel, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const programs = [
  {
    id: 'business-administration',
    name: 'Business Administration',
    desc: 'The Business Administration program equips students with essential management, finance, and marketing skills for the modern business world.',
    icon: <FaBusinessTime />,
  },
  {
    id: 'college-of-education-liberal',
    name: 'College of Education & Liberal',
    desc: 'This program prepares future educators and leaders with a strong foundation in teaching, learning, and liberal arts.',
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 'arts',
    name: 'Arts',
    desc: 'The Arts program fosters creativity and critical thinking through a diverse curriculum in visual, performing, and literary arts.',
    icon: <FaPalette />,
  },
  {
    id: 'criminal-justice-education',
    name: 'Criminal Justice Education',
    desc: 'Students gain knowledge in law enforcement, criminology, and justice systems, preparing them for careers in public safety and legal fields.',
    icon: <FaBalanceScale />,
  },
  {
    id: 'hospitality-management',
    name: 'Hospitality Management',
    desc: 'This program develops skills in hotel, restaurant, and tourism management, focusing on service excellence and leadership.',
    icon: <FaHotel />,
  },
  {
    id: 'information-technology',
    name: 'Information Technology',
    desc: 'The IT program covers software development, networking, and systems analysis, preparing students for technology-driven careers.',
    icon: <FaLaptopCode />,
  },
  {
    id: 'education',
    name: 'Education',
    desc: 'A comprehensive program for aspiring teachers, focusing on pedagogy, curriculum development, and educational leadership.',
    icon: <FaUserGraduate />,
  },
];

const AcademicsMenu = () => {
  return (
    <div className="academics-section-bg py-5">
      <Container>
        <div className="academics-header text-center mb-5">
          <h1 className="academics-title">Academic Programs</h1>
          <p className="academics-subtitle">Explore our diverse range of programs designed to empower your future.</p>
        </div>
        <Row className="g-4">
          {programs.map((program) => (
            <Col key={program.id} xs={12} sm={6} lg={4}>
              <div className="academics-card h-100 text-center">
                <div className="academics-icon mb-3">{program.icon}</div>
                <h3 className="academics-card-title">{program.name}</h3>
                <p className="academics-card-desc">{program.desc}</p>
                <Button
                  href={`#${program.id}`}
                  variant="success"
                  className="academics-learn-btn mt-auto"
                >
                  Learn More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AcademicsMenu;