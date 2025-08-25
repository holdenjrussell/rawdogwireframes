import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Collection.css';

interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  description: string;
  benefits: string[];
  badge?: string;
}

const Collection: React.FC = () => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');

  const products: Product[] = [
    {
      id: 'bundle',
      name: 'Complete Routine Bundle',
      price: 118,
      salePrice: 98,
      image: '[COMPLETE BUNDLE IMAGE]',
      description: 'Everything you need for a complete morning routine. Save $20 when you buy together.',
      benefits: ['Complete 3-step routine', 'Save $20 vs individual', 'Perfect for beginners', 'TSA-approved sizes'],
      badge: 'BEST VALUE'
    },
    {
      id: 'cleanser',
      name: 'Hydrating Facial Cleanser',
      price: 32,
      salePrice: 27.20,
      image: '[CLEANSER BOTTLE IMAGE]',
      description: 'Gentle milky cleanser that purifies without stripping natural oils.',
      benefits: ['Sulfate-free formula', 'Maintains moisture barrier', 'Shave-friendly', 'All skin types'],
      badge: 'BESTSELLER'
    },
    {
      id: 'moisturizer',
      name: 'Face Moisturizer with Beef Tallow',
      price: 48,
      salePrice: 40.80,
      image: '[MOISTURIZER BOTTLE IMAGE]',
      description: 'Lightweight moisturizer with biomimetic tallow technology.',
      benefits: ['Biomimetic technology', 'Fast-absorbing', 'Rich in vitamins A,D,E,K', 'AM/PM use'],
      badge: 'HERO PRODUCT'
    },
    {
      id: 'eyecream',
      name: 'Caffeine Under Eye Cream',
      price: 38,
      salePrice: 32.30,
      image: '[EYE CREAM JAR IMAGE]',
      description: 'Advanced peptide eye cream for puffiness and fine lines.',
      benefits: ['Reduces puffiness', 'Smooths fine lines', 'Advanced peptides', 'Morning routine'],
      badge: 'NEW'
    }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      case 'price-high':
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0; // featured order
    }
  });

  return (
    <div className="page-container">
      <div className="container">
        {/* Collection Header */}
        <div className="collection-header">
          <div className="collection-hero-image">
            <div className="hero-image-placeholder">
              [HERO BACKGROUND IMAGE]
            </div>
            <div className="collection-hero-content">
              <h1>All Products</h1>
              <p>The complete rawdog collection - scientifically formulated, clinically proven, built for men.</p>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="urgency-banner">
          <div className="urgency-content">
            <h2>🔥 LIMITED TIME: 30% OFF EVERYTHING</h2>
            <p>First 1000 customers only • Free shipping on all orders • Ends soon</p>
            <div className="countdown-mini">
              <span>23:59:42</span>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="collection-controls">
          <div className="product-count">
            <span>{products.length} products</span>
          </div>
          
          <div className="sort-controls">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as any)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="collection-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="collection-product-card">
              {product.badge && (
                <div className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
                  {product.badge}
                </div>
              )}
              
              <div className="product-image">
                <div className="placeholder-image">
                  {product.image}
                  <p>Product photography</p>
                </div>
                <div className="product-overlay">
                  <Link to={`/products/${product.id}`} className="quick-view-btn">
                    QUICK VIEW
                  </Link>
                </div>
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-benefits">
                  {product.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="benefit-tag">
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <div className="product-pricing">
                  {product.salePrice ? (
                    <>
                      <span className="sale-price">${product.salePrice}</span>
                      <span className="original-price">${product.price}</span>
                      <span className="savings">Save ${(product.price - product.salePrice).toFixed(0)}</span>
                    </>
                  ) : (
                    <span className="regular-price">${product.price}</span>
                  )}
                </div>
                
                <div className="product-actions">
                  <button className="btn btn-primary add-to-cart">
                    ADD TO CART
                  </button>
                  <Link to={`/products/${product.id}`} className="btn btn-outline">
                    LEARN MORE
                  </Link>
                </div>
                

              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Rawdog */}
        <section className="why-choose-section">
          <h2>Why Choose Rawdog?</h2>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-icon">🚫</div>
              <h3>First Seed Oil-Free Brand</h3>
              <p>The only men's skincare brand that completely eliminates cheap, processed seed oils—choosing stable, proven ingredients over cost-cutting commodity fillers.</p>
            </div>
            <div className="why-choose-item">
              <div className="why-icon">🧬</div>
              <h3>Biomimetic Technology</h3>
              <p>Ingredients that work with your skin's natural biology, not against it, for superior absorption and results.</p>
            </div>
            <div className="why-choose-item">
              <div className="why-icon">🔬</div>
              <h3>Science-Backed Formulas</h3>
              <p>Every ingredient chosen based on clinical evidence and proven results, not marketing trends.</p>
            </div>
            <div className="why-choose-item">
              <div className="why-icon">🛡️</div>
              <h3>Hormone-Safe</h3>
              <p>Free from endocrine disruptors and chemicals that can interfere with male hormonal health.</p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="social-proof-section">
          <h2>Join 10,000+ Men Who've Made The Switch</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p>"Finally, a brand that actually cares about what goes into their products. My skin has never looked better."</p>
              <div className="testimonial-author">- Marcus T., Age 32</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p>"The tallow moisturizer was a game-changer. Skeptical at first, but the results speak for themselves."</p>
              <div className="testimonial-author">- David L., Age 28</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p>"Love that they're transparent about ingredients. No more guessing what I'm putting on my skin."</p>
              <div className="testimonial-author">- James R., Age 35</div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Skin?</h2>
            <p>Join thousands of men who've discovered the power of clean, effective skincare.</p>
            <div className="cta-benefits">

              <div className="cta-benefit">
                <span className="benefit-icon">✓</span>
                <span>Free shipping on orders $50+</span>
              </div>
              <div className="cta-benefit">
                <span className="benefit-icon">✓</span>
                <span>Results in 7-14 days</span>
              </div>
            </div>
            <button className="btn btn-primary cta-button">
              START YOUR TRANSFORMATION - 30% OFF
            </button>
            <p className="cta-urgency">⏰ Limited time offer • First 1000 customers only</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collection;
