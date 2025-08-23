import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Science from './pages/Science';
import About from './pages/About';
import Collection from './pages/Collection';
import ProductCleanser from './pages/ProductCleanser';
import ProductMoisturizer from './pages/ProductMoisturizer';
import ProductEyeCream from './pages/ProductEyeCream';
import ProductBundle from './pages/ProductBundle';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import './App.css';

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              rawdog
            </Link>
            <div className="nav-menu">
              <Link to="/collection" className="nav-link">
                Shop All
              </Link>
              <Link to="/science" className="nav-link">
                Science
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </div>
          </div>
        </nav>

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/science" element={<Science />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/cleanser" element={<ProductCleanser />} />
          <Route path="/products/moisturizer" element={<ProductMoisturizer />} />
          <Route path="/products/eyecream" element={<ProductEyeCream />} />
          <Route path="/products/bundle" element={<ProductBundle />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
