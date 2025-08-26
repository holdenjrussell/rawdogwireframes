import React from 'react';
import './ScrollCTAs.css';

interface ScrollCTAsProps {
  productName: string;
  price: number;
  subscriptionPrice: number;
  position?: 'after-benefits' | 'after-ingredients' | 'after-science' | 'before-reviews';
}

const ScrollCTAs: React.FC<ScrollCTAsProps> = ({
  productName,
  price,
  subscriptionPrice,
  position = 'after-benefits'
}) => {
  const ctaContent = {
    'after-benefits': {
      headline: "Ready to Experience These Benefits?",
      subheadline: "Join thousands who've transformed their skin",
      urgency: "🔥 Limited time: Save 15% with Subscribe & Save"
    },
    'after-ingredients': {
      headline: "Premium Ingredients, Proven Results",
      subheadline: "Science-backed formulation for visible improvements",
      urgency: "⚡ Most customers see results in 7-14 days"
    },
    'after-science': {
      headline: "Premium Ingredients, Proven Results",
      subheadline: "Science-backed formulation for visible improvements",
      urgency: "💪 60-day money-back guarantee - zero risk"
    },
    'before-reviews': {
      headline: "Join Our Community of Satisfied Customers",
      subheadline: "See why men everywhere are switching to Rawdog",
      urgency: "🏆 #1 rated in clean men's skincare"
    }
  };

  const content = ctaContent[position];

  return (
    <div className="scroll-cta-section">
      <div className="scroll-cta-container">
        <h3 className="cta-headline">{content.headline}</h3>
        <p className="cta-subheadline">{content.subheadline}</p>
        <div className="cta-urgency">{content.urgency}</div>
        
        <div className="cta-price-comparison">
          <div className="price-option">
            <span className="price-label">One-time:</span>
            <span className="price-value">${price.toFixed(2)}</span>
          </div>
          <div className="price-option featured">
            <span className="price-label">Subscribe & Save:</span>
            <span className="price-value">${subscriptionPrice.toFixed(2)}</span>
            <span className="savings-tag">SAVE ${(price - subscriptionPrice).toFixed(2)}</span>
          </div>
        </div>
        
        <div className="cta-buttons">
          <button className="cta-btn-primary">
            SUBSCRIBE & SAVE - ${subscriptionPrice.toFixed(2)}
          </button>
          <button className="cta-btn-secondary">
            ONE-TIME PURCHASE - ${price.toFixed(2)}
          </button>
        </div>
        
        <div className="cta-trust-badges">
          <span className="trust-badge">✓ Free Shipping</span>
          <span className="trust-badge">✓ 60-Day Guarantee</span>
          <span className="trust-badge">✓ Cancel Anytime</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollCTAs;
