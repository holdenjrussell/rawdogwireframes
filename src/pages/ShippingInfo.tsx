import React, { useState } from 'react';
import './Legal.css';
import './ShippingInfo.css';

const ShippingInfo: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('US');

  const shippingRates = {
    US: {
      standard: { price: '$5.95', days: '5-7 business days', free: 50 },
      express: { price: '$14.95', days: '2-3 business days', free: 100 },
      overnight: { price: '$29.95', days: '1-2 business days', free: 150 }
    },
    CA: {
      standard: { price: '$9.95', days: '7-10 business days', free: 75 },
      express: { price: '$19.95', days: '3-5 business days', free: 125 }
    },
    INT: {
      standard: { price: '$19.95', days: '10-15 business days', free: 100 },
      express: { price: '$39.95', days: '5-7 business days', free: 200 }
    }
  };

  return (
    <div className="legal-page shipping-page">
      <div className="legal-container">
        <h1>Shipping Information</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <div className="shipping-banner">
          <h2>🚚 Free Shipping on Orders Over $50</h2>
          <p>Fast, reliable delivery to your door. Orders ship within 24 hours!</p>
        </div>

        <section className="legal-section">
          <h2>Shipping Rates & Delivery Times</h2>
          
          <div className="country-selector">
            <label htmlFor="country">Select your location:</label>
            <select 
              id="country"
              value={selectedCountry} 
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="INT">International</option>
            </select>
          </div>

          <div className="shipping-options">
            {Object.entries(shippingRates[selectedCountry as keyof typeof shippingRates]).map(([method, details]) => (
              <div key={method} className="shipping-card">
                <h3>{method.charAt(0).toUpperCase() + method.slice(1)} Shipping</h3>
                <div className="shipping-details">
                  <div className="detail-row">
                    <span>Cost:</span>
                    <strong>{details.price}</strong>
                  </div>
                  <div className="detail-row">
                    <span>Delivery:</span>
                    <strong>{details.days}</strong>
                  </div>
                  <div className="detail-row free-shipping">
                    <span>Free over:</span>
                    <strong>${details.free}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="legal-section">
          <h2>Order Processing</h2>
          <div className="processing-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">🛒</div>
              <div className="timeline-content">
                <h3>Order Placed</h3>
                <p>Confirmation email sent immediately</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">📦</div>
              <div className="timeline-content">
                <h3>Order Packed</h3>
                <p>Within 24 hours on business days</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">✈️</div>
              <div className="timeline-content">
                <h3>Shipped</h3>
                <p>Tracking number provided via email</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">🏠</div>
              <div className="timeline-content">
                <h3>Delivered</h3>
                <p>Signature may be required</p>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Shipping Carriers</h2>
          <p>We partner with trusted carriers to ensure your products arrive safely:</p>
          <div className="carrier-grid">
            <div className="carrier-card">
              <h3>USPS</h3>
              <p>Standard shipping within the US</p>
            </div>
            <div className="carrier-card">
              <h3>UPS</h3>
              <p>Express and overnight options</p>
            </div>
            <div className="carrier-card">
              <h3>FedEx</h3>
              <p>International and expedited shipping</p>
            </div>
            <div className="carrier-card">
              <h3>DHL</h3>
              <p>International express delivery</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Subscription Shipping</h2>
          <div className="subscription-info">
            <h3>🔄 Auto-Ship Benefits</h3>
            <ul>
              <li>Always free shipping (no minimum required)</li>
              <li>Priority processing - ships first</li>
              <li>15% discount on all subscription orders</li>
              <li>Skip, pause, or cancel anytime</li>
              <li>Choose your delivery frequency (30, 60, or 90 days)</li>
            </ul>
          </div>
        </section>

        <section className="legal-section">
          <h2>International Shipping</h2>
          <h3>Countries We Ship To</h3>
          <p>We currently ship to over 30 countries including:</p>
          <div className="country-list">
            <span>United Kingdom</span>
            <span>Australia</span>
            <span>Germany</span>
            <span>France</span>
            <span>Japan</span>
            <span>Singapore</span>
            <span>Netherlands</span>
            <span>Sweden</span>
            <span>And more...</span>
          </div>

          <h3>Customs & Duties</h3>
          <p>
            International customers are responsible for any customs duties, taxes, or fees 
            imposed by their country. These charges are separate from our shipping fees and 
            will be collected by the carrier upon delivery.
          </p>

          <h3>Restricted Countries</h3>
          <p>
            Due to shipping restrictions, we cannot currently ship to certain countries. 
            Please contact customer service if your country is not available at checkout.
          </p>
        </section>

        <section className="legal-section">
          <h2>Track Your Order</h2>
          <p>
            Once your order ships, you'll receive a tracking number via email. You can track 
            your package using:
          </p>
          <ul>
            <li>The link in your shipping confirmation email</li>
            <li>Your account dashboard on our website</li>
            <li>The carrier's website directly</li>
          </ul>
          <div className="track-order-box">
            <h3>Track Your Package</h3>
            <p>Enter your tracking number to see real-time updates</p>
            <div className="track-form">
              <input type="text" placeholder="Tracking number" />
              <button>Track Order</button>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Shipping Policies</h2>
          
          <h3>Order Cutoff Times</h3>
          <ul>
            <li>Orders placed before 12 PM EST on business days ship same day</li>
            <li>Orders placed after 12 PM EST ship next business day</li>
            <li>Weekend orders ship Monday</li>
            <li>No shipping on major US holidays</li>
          </ul>

          <h3>Address Accuracy</h3>
          <p>
            Please ensure your shipping address is correct. We are not responsible for packages 
            delivered to incorrect addresses provided by the customer. Address changes cannot be 
            made once an order has shipped.
          </p>

          <h3>Delivery Issues</h3>
          <p>
            If your package is marked as delivered but you haven't received it:
          </p>
          <ol>
            <li>Check with neighbors or building management</li>
            <li>Look for a delivery notice from the carrier</li>
            <li>Contact the carrier directly</li>
            <li>Contact our customer service for assistance</li>
          </ol>

          <h3>Damaged or Lost Packages</h3>
          <p>
            If your package arrives damaged or is lost in transit, please contact us immediately. 
            We'll work with the carrier to resolve the issue and ensure you receive your products.
          </p>
        </section>

        <section className="legal-section">
          <h2>Expedited Shipping</h2>
          <p>Need your order faster? We offer several expedited options:</p>
          <div className="expedited-options">
            <div className="option-card">
              <h3>Express Shipping</h3>
              <p>2-3 business days</p>
              <p>Available for US orders</p>
            </div>
            <div className="option-card">
              <h3>Overnight Shipping</h3>
              <p>Next business day</p>
              <p>Order by 10 AM EST</p>
            </div>
            <div className="option-card">
              <h3>Saturday Delivery</h3>
              <p>Available in select areas</p>
              <p>Additional fees apply</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Contact Shipping Support</h2>
          <div className="contact-info-grid">
            <div className="contact-method">
              <h3>📧 Email</h3>
              <p><a href="mailto:shipping@rawdog.com">shipping@rawdog.com</a></p>
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
      </div>
    </div>
  );
};

export default ShippingInfo;


