import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fix: Use Routes instead of Switch
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AcademicsMenu from './components/AcademicsMenu';
import Admission from './pages/Admission';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>  {/* Fixed: Replaced Switch with Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academic-programs" element={<AcademicsMenu />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
