import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Science from './pages/Science';
import About from './pages/About';
import Collection from './pages/Collection';
import ProductCleanser from './pages/ProductCleanser';
import ProductMoisturizer from './pages/ProductMoisturizer';
import ProductEyeCream from './pages/ProductEyeCream';
import ProductBundle from './pages/ProductBundle';

import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import ReturnsRefunds from './pages/ReturnsRefunds';
import ShippingInfo from './pages/ShippingInfo';
import CookiePolicy from './pages/CookiePolicy';
import ManageSubscription from './pages/ManageSubscription';
import Account from './pages/Account';
import FAQ from './pages/FAQ';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
              rawdog
            </Link>
            <div className="nav-hamburger" onClick={toggleMobileMenu}>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            </div>
            <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <Link to="/collection" className="nav-link" onClick={closeMobileMenu}>
                Shop All
              </Link>
              <Link to="/science" className="nav-link" onClick={closeMobileMenu}>
                Science
              </Link>
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                About
              </Link>
              <Link to="/faq" className="nav-link" onClick={closeMobileMenu}>
                FAQ
              </Link>
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
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

          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/returns" element={<ReturnsRefunds />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/subscription" element={<ManageSubscription />} />
          <Route path="/account" element={<Account />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
