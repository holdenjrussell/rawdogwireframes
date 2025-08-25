import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-column">
            <h3 className="footer-brand">rawdog</h3>
            <p className="footer-tagline">
              Raw performance. Stripped down to only what works.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/rawdog" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="https://facebook.com/rawdog" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="https://twitter.com/rawdog" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="https://tiktok.com/@rawdog" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <span>🎵</span>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/collection">All Products</Link></li>
              <li><Link to="/products/cleanser">Facial Cleanser</Link></li>
              <li><Link to="/products/moisturizer">Face Moisturizer</Link></li>
              <li><Link to="/products/eyecream">Eye Cream</Link></li>
              <li><Link to="/products/bundle">Complete Bundle</Link></li>
            </ul>
          </div>

          {/* Learn Column */}
          <div className="footer-column">
            <h4>Learn</h4>
            <ul>
              <li><Link to="/science">The Science</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#ingredients">Ingredients</a></li>
              <li><a href="#routine">Skincare Routine</a></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns & Refunds</Link></li>
              <li><Link to="/subscription">Manage Subscription</Link></li>
              <li><a href="#wholesale">Wholesale</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h4>Join the rawdog community</h4>
          <p>Get exclusive offers, skincare tips, and be the first to know about new products.</p>
          <form className="newsletter-form" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing! Check your email for a welcome offer.');
          }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              aria-label="Email for newsletter"
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter-disclaimer">
            By subscribing, you agree to receive marketing emails from rawdog. 
            You can unsubscribe at any time.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-payment">
            <span>Secure payments:</span>
            <div className="payment-icons">
              <span>💳</span> {/* Visa */}
              <span>💳</span> {/* Mastercard */}
              <span>💳</span> {/* Amex */}
              <span>💳</span> {/* PayPal */}
              <span>💳</span> {/* Apple Pay */}
              <span>💳</span> {/* Google Pay */}
            </div>
          </div>
          <div className="footer-copyright">
            <p>© {currentYear} rawdog Skincare. All rights reserved.</p>
            <p className="footer-location">Made with pride in the USA 🇺🇸</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="footer-trust">
          <div className="trust-badge">
            <span>🛡️</span>
            <span>SSL Secured</span>
          </div>

          <div className="trust-badge">
            <span>🚚</span>
            <span>Free Shipping $50+</span>
          </div>
          <div className="trust-badge">
            <span>🌱</span>
            <span>Clean Ingredients</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
