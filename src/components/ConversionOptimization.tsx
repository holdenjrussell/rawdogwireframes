import React, { useState, useEffect } from 'react';
import './ConversionOptimization.css';

interface ConversionOptimizationProps {
  productName: string;
  originalPrice: number;
  subscriptionPrice: number;
  savings: number;
}

const ConversionOptimization: React.FC<ConversionOptimizationProps> = ({
  productName,
  originalPrice,
  subscriptionPrice,
  savings
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [showUrgency, setShowUrgency] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show urgency after 10 seconds
  useEffect(() => {
    const urgencyTimer = setTimeout(() => {
      setShowUrgency(true);
    }, 10000);

    return () => clearTimeout(urgencyTimer);
  }, []);

  // Simulate cart activity
  useEffect(() => {
    const cartTimer = setInterval(() => {
      setCartCount(prev => Math.floor(Math.random() * 12) + 3);
    }, 30000);

    return () => clearInterval(cartTimer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="conversion-optimization">
      {/* Social Proof Banner */}
      <div className="social-proof-banner">
        <div className="social-proof-content">
          <span className="social-proof-icon">🔥</span>
          <span className="social-proof-text">
            {cartCount > 0 ? `${cartCount} people have this in their cart` : 'Trending now'}
          </span>
          <span className="social-proof-badge">BESTSELLER</span>
        </div>
      </div>

      {/* Limited Time Offer */}
      <div className="limited-time-offer">
        <div className="offer-header">
          <h3>Limited Time: Subscribe & Save 15%</h3>
          <div className="countdown-timer">
            <span className="timer-label">Offer expires in:</span>
            <div className="timer-display">
              <div className="timer-unit">
                <span className="timer-number">{formatTime(timeLeft.hours)}</span>
                <span className="timer-label">HRS</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="timer-number">{formatTime(timeLeft.minutes)}</span>
                <span className="timer-label">MIN</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="timer-number">{formatTime(timeLeft.seconds)}</span>
                <span className="timer-label">SEC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="value-proposition">
        <div className="value-grid">
          <div className="value-item">
            <div className="value-icon">✓</div>
            <div className="value-content">
              <h4>60-Day Guarantee</h4>
              <p>Risk-free trial with full refund</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon">🚚</div>
            <div className="value-content">
              <h4>Free Shipping</h4>
              <p>On orders over $50</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon">⚡</div>
            <div className="value-content">
              <h4>Results in 7-14 Days</h4>
              <p>Visible improvements guaranteed</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon">🔬</div>
            <div className="value-content">
              <h4>Science-Backed</h4>
              <p>Clinically proven ingredients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency Message */}
      {showUrgency && (
        <div className="urgency-message">
          <div className="urgency-content">
            <span className="urgency-icon">⚠️</span>
            <span className="urgency-text">
              Don't miss out! This exclusive offer won't last long.
            </span>
          </div>
        </div>
      )}

      {/* Price Comparison */}
      <div className="price-comparison">
        <h4>Why Subscribe & Save?</h4>
        <div className="comparison-table">
          <div className="comparison-row">
            <span className="comparison-label">One-time purchase:</span>
            <span className="comparison-price">${originalPrice.toFixed(2)}</span>
          </div>
          <div className="comparison-row highlight">
            <span className="comparison-label">Subscribe & Save:</span>
            <span className="comparison-price">
              ${subscriptionPrice.toFixed(2)}
              <span className="savings-badge">Save ${savings.toFixed(2)}</span>
            </span>
          </div>
          <div className="comparison-benefits">
            <ul>
              <li>✓ 15% off every order</li>
              <li>✓ Free shipping always</li>
              <li>✓ Skip or cancel anytime</li>
              <li>✓ Never run out</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="trust-signals">
        <div className="trust-item">
          <span className="trust-icon">🔒</span>
          <span className="trust-text">Secure Checkout</span>
        </div>
        <div className="trust-item">
          <span className="trust-icon">💳</span>
          <span className="trust-text">All Major Cards Accepted</span>
        </div>
        <div className="trust-item">
          <span className="trust-icon">📞</span>
          <span className="trust-text">24/7 Customer Support</span>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="recently-viewed">
        <h4>Customers who viewed this also bought:</h4>
        <div className="related-items">
          <div className="related-item">
            <span className="item-name">Complete Routine Bundle</span>
            <span className="item-badge">POPULAR</span>
          </div>
          <div className="related-item">
            <span className="item-name">Face Moisturizer</span>
            <span className="item-badge">BESTSELLER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionOptimization;
