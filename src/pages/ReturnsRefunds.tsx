import React, { useState } from 'react';
import './Legal.css';
import './ReturnsRefunds.css';

const ReturnsRefunds: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="legal-page returns-page">
      <div className="legal-container">
        <h1>Returns & Refunds</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <div className="guarantee-banner">
          <h2>🛡️ 60-Day Money-Back Guarantee</h2>
          <p>
            We're confident you'll love rawdog products. If you're not completely satisfied, 
            we'll give you a full refund within 60 days of purchase. No questions asked.
          </p>
        </div>

        <section className="legal-section">
          <h2>Return Policy Overview</h2>
          <div className="policy-highlights">
            <div className="highlight-card">
              <span className="icon">📅</span>
              <h3>60 Days</h3>
              <p>Return window from delivery date</p>
            </div>
            <div className="highlight-card">
              <span className="icon">💰</span>
              <h3>100% Refund</h3>
              <p>Full purchase price returned</p>
            </div>
            <div className="highlight-card">
              <span className="icon">📦</span>
              <h3>Free Returns</h3>
              <p>Prepaid return label provided</p>
            </div>
            <div className="highlight-card">
              <span className="icon">✅</span>
              <h3>Easy Process</h3>
              <p>Simple online return portal</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>How to Return a Product</h2>
          <div className="return-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initiate Return</h3>
                <p>
                  Contact our customer service team at <a href="mailto:returns@rawdog.com">returns@rawdog.com</a> or 
                  call 1-800-RAWDOG1. Provide your order number and reason for return.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Receive Return Label</h3>
                <p>
                  We'll email you a prepaid return shipping label within 24 hours. 
                  Print the label and attach it to your package.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Ship Your Return</h3>
                <p>
                  Pack the products securely in their original packaging (if available) 
                  and drop off at any authorized shipping location.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Receive Refund</h3>
                <p>
                  Once we receive and process your return (typically 3-5 business days), 
                  your refund will be issued to your original payment method within 5-10 business days.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-item">
            <button 
              className="faq-question"
              onClick={() => toggleSection('condition')}
              aria-expanded={activeSection === 'condition'}
            >
              What condition do products need to be in for return?
              <span className="toggle-icon">{activeSection === 'condition' ? '−' : '+'}</span>
            </button>
            {activeSection === 'condition' && (
              <div className="faq-answer">
                <p>
                  We accept returns even if you've used the product. We understand you need to try 
                  our products to know if they work for your skin. Products should be at least 50% 
                  full for a full refund. Empty containers may receive a partial refund.
                </p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <button 
              className="faq-question"
              onClick={() => toggleSection('subscription')}
              aria-expanded={activeSection === 'subscription'}
            >
              Can I return subscription products?
              <span className="toggle-icon">{activeSection === 'subscription' ? '−' : '+'}</span>
            </button>
            {activeSection === 'subscription' && (
              <div className="faq-answer">
                <p>
                  Yes! Subscription products have the same 60-day return window from each delivery date. 
                  You can also pause or cancel your subscription at any time without needing to return products.
                </p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <button 
              className="faq-question"
              onClick={() => toggleSection('bundle')}
              aria-expanded={activeSection === 'bundle'}
            >
              Can I return individual items from a bundle?
              <span className="toggle-icon">{activeSection === 'bundle' ? '−' : '+'}</span>
            </button>
            {activeSection === 'bundle' && (
              <div className="faq-answer">
                <p>
                  Yes, you can return individual items from a bundle. Your refund will be calculated 
                  based on the proportional value of the returned items. Contact customer service for 
                  the exact refund amount.
                </p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <button 
              className="faq-question"
              onClick={() => toggleSection('international')}
              aria-expanded={activeSection === 'international'}
            >
              What about international returns?
              <span className="toggle-icon">{activeSection === 'international' ? '−' : '+'}</span>
            </button>
            {activeSection === 'international' && (
              <div className="faq-answer">
                <p>
                  International customers are responsible for return shipping costs. We recommend using 
                  a trackable shipping service. Once received, we'll process your refund according to 
                  our standard policy. Contact us for country-specific instructions.
                </p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <button 
              className="faq-question"
              onClick={() => toggleSection('damaged')}
              aria-expanded={activeSection === 'damaged'}
            >
              What if my product arrived damaged?
              <span className="toggle-icon">{activeSection === 'damaged' ? '−' : '+'}</span>
            </button>
            {activeSection === 'damaged' && (
              <div className="faq-answer">
                <p>
                  If your product arrives damaged or defective, contact us immediately with photos of 
                  the damage. We'll send a replacement right away at no additional cost, and you won't 
                  need to return the damaged item.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="legal-section">
          <h2>Refund Processing</h2>
          <h3>Refund Timeline</h3>
          <ul>
            <li><strong>Return received:</strong> 1-2 business days to inspect</li>
            <li><strong>Refund approved:</strong> 1-2 business days to process</li>
            <li><strong>Credit card:</strong> 5-10 business days to appear on statement</li>
            <li><strong>PayPal:</strong> 3-5 business days</li>
            <li><strong>Bank transfer:</strong> 5-7 business days</li>
          </ul>

          <h3>Refund Amount</h3>
          <p>
            Full refunds include the product price and applicable taxes. Original shipping costs 
            are non-refundable unless the return is due to our error (wrong item, damaged, etc.).
          </p>
        </section>

        <section className="legal-section">
          <h2>Exchanges</h2>
          <p>
            We don't currently offer direct exchanges. If you'd like a different product, 
            please return your original item for a refund and place a new order. This ensures 
            you get your new product as quickly as possible.
          </p>
        </section>

        <section className="legal-section">
          <h2>Exceptions</h2>
          <p>The following items cannot be returned:</p>
          <ul>
            <li>Gift cards</li>
            <li>Products purchased from unauthorized retailers</li>
            <li>Products purchased more than 60 days ago</li>
            <li>Free samples or promotional items</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Contact Us About Returns</h2>
          <div className="contact-info-grid">
            <div className="contact-method">
              <h3>📧 Email</h3>
              <p><a href="mailto:returns@rawdog.com">returns@rawdog.com</a></p>
              <p className="response-time">Response within 24 hours</p>
            </div>
            <div className="contact-method">
              <h3>📱 Phone</h3>
              <p>1-800-RAWDOG1</p>
              <p className="response-time">Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div className="contact-method">
              <h3>💬 Live Chat</h3>
              <p>Available on our website</p>
              <p className="response-time">Mon-Fri: 9AM-8PM EST</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Our Commitment</h2>
          <p>
            At rawdog, we stand behind our products 100%. Our generous return policy reflects 
            our confidence in the quality and effectiveness of our skincare. We want you to 
            feel completely comfortable trying our products, knowing that if they don't work 
            for you, we'll make it right.
          </p>
          <p>
            Your satisfaction is our priority. If you have any concerns or special circumstances 
            regarding a return, please don't hesitate to contact us. We're here to help and will 
            do everything we can to ensure you have a positive experience with rawdog.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnsRefunds;
