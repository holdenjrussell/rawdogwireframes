import React, { useState, useEffect } from 'react';
import './StickyAddToCart.css';

interface StickyAddToCartProps {
  productName: string;
  price: number;
  subscriptionPrice: number;
  onAddToCart: () => void;
}

const StickyAddToCart: React.FC<StickyAddToCartProps> = ({
  productName,
  price,
  subscriptionPrice,
  onAddToCart
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'onetime' | 'subscribe'>('subscribe');

  useEffect(() => {
    const handleScroll = () => {
      // Find the product-info section (buy box)
      const productInfo = document.querySelector('.product-info');
      if (!productInfo) return;

      // Get the bottom position of the product info section
      const rect = productInfo.getBoundingClientRect();
      const isOutOfView = rect.bottom < 0;

      setIsVisible(isOutOfView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-add-to-cart">
      <div className="sticky-cart-container">
        <div className="sticky-product-info">
          <h3>{productName}</h3>
          <div className="sticky-price-options">
            <label className={`sticky-option ${selectedOption === 'onetime' ? 'active' : ''}`}>
              <input
                type="radio"
                name="sticky-purchase"
                value="onetime"
                checked={selectedOption === 'onetime'}
                onChange={() => setSelectedOption('onetime')}
              />
              <span className="option-label">One-time</span>
              <span className="option-price">${price.toFixed(2)}</span>
            </label>
            <label className={`sticky-option ${selectedOption === 'subscribe' ? 'active' : ''}`}>
              <input
                type="radio"
                name="sticky-purchase"
                value="subscribe"
                checked={selectedOption === 'subscribe'}
                onChange={() => setSelectedOption('subscribe')}
              />
              <span className="option-label">Subscribe & Save 15%</span>
              <span className="option-price">${subscriptionPrice.toFixed(2)}</span>
            </label>
          </div>
        </div>
        <button className="sticky-add-button" onClick={onAddToCart}>
          ADD TO CART - ${selectedOption === 'subscribe' ? subscriptionPrice.toFixed(2) : price.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default StickyAddToCart;