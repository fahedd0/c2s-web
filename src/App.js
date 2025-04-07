import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Import insurance pages
import MotorInsurance from './pages/MotorInsurance';
import HealthInsurance from './pages/HealthInsurance';
import HomeInsurance from './pages/HomeInsurance';
import CyberInsurance from './pages/CyberInsurance';
import PetInsurance from './pages/PetInsurance';
import TravelInsurance from './pages/TravelInsurance';
import EngineeringInsurance from './pages/EngineeringInsurance';
import BusinessInsurance from './pages/BusinessInsurance';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// ScrollToTop component to handle scroll position on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        element.classList.remove('active');
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    // Small timeout
    setTimeout(() => {
      handleScrollReveal();
    }, 100);

    // Scroll listener
    window.addEventListener('scroll', handleScrollReveal);
    
    return () => {
      window.removeEventListener('scroll', handleScrollReveal);
    };
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Insurance solution routes */}
            <Route path="/motor-insurance" element={<MotorInsurance />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/home-insurance" element={<HomeInsurance />} />
            <Route path="/cyber-insurance" element={<CyberInsurance />} />
            <Route path="/pet-insurance" element={<PetInsurance />} />
            <Route path="/travel-insurance" element={<TravelInsurance />} />
            <Route path="/engineering-insurance" element={<EngineeringInsurance />} />
            <Route path="/business-insurance" element={<BusinessInsurance />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;