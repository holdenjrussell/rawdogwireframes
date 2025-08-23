import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const ProductBundle: React.FC = () => {
  const bundleProducts = [
    {
      id: 'cleanser',
      name: 'Hydrating Facial Cleanser',
      price: '$32',
      image: '[CLEANSER BOTTLE IMAGE]',
      description: 'Gentle milky cleanser that purifies without stripping',
      keyIngredients: ['Cocamidopropyl Betaine', 'Squalane', 'Betaine Salicylate', 'Panthenol'],
      benefits: ['Removes impurities', 'Maintains moisture barrier', 'Gentle exfoliation', 'Soothes skin']
    },
    {
      id: 'moisturizer',
      name: 'Face Moisturizer with Beef Tallow',
      price: '$48',
      image: '[MOISTURIZER BOTTLE IMAGE]',
      description: 'Lightweight moisturizer with biomimetic tallow technology',
      keyIngredients: ['Beef Tallow', 'Ceramide NP', 'Niacinamide', 'NMF Complex'],
      benefits: ['Strengthens skin barrier', 'Balances oil production', 'Deep hydration', 'Anti-aging properties']
    },
    {
      id: 'eyecream',
      name: 'Caffeine Under Eye Cream',
      price: '$38',
      image: '[EYE CREAM JAR IMAGE]',
      description: 'Advanced peptide eye cream for puffiness and fine lines',
      keyIngredients: ['Caffeine', 'SYN-AKE Peptide', 'Argireline', 'Zerumbone'],
      benefits: ['Reduces puffiness', 'Smooths fine lines', 'Brightens under-eyes', 'Firms skin']
    }
  ];

  const routineSteps = [
    {
      time: 'MORNING',
      steps: [
        { step: 1, product: 'Hydrating Facial Cleanser', instruction: 'Massage onto damp skin for 30 seconds, rinse with lukewarm water' },
        { step: 2, product: 'Caffeine Under Eye Cream', instruction: 'Gently pat around eye area, focusing on under-eye and crow\'s feet' },
        { step: 3, product: 'Face Moisturizer with Beef Tallow', instruction: 'Apply evenly to face and neck, allow to absorb before sun protection' }
      ]
    },
    {
      time: 'EVENING',
      steps: [
        { step: 1, product: 'Hydrating Facial Cleanser', instruction: 'Double cleanse if wearing sunscreen, massage thoroughly' },
        { step: 2, product: 'Face Moisturizer with Beef Tallow', instruction: 'Apply generously for overnight repair and hydration' },
        { step: 3, product: 'Caffeine Under Eye Cream', instruction: 'Light application around eyes for overnight peptide treatment' }
      ]
    }
  ];

  const synergies = [
    {
      title: 'Barrier Repair Synergy',
      description: 'Beef Tallow + Ceramides work together to rebuild and strengthen the skin\'s protective barrier, while the gentle cleanser preserves this barrier during cleansing. This creates a comprehensive barrier support system that works throughout your routine.',
      ingredients: ['Beef Tallow', 'Ceramide NP', 'Gentle Surfactants', 'Squalane'],
      benefits: ['Strengthens skin barrier', 'Prevents moisture loss', 'Reduces sensitivity', 'Improves skin resilience']
    },
    {
      title: 'Advanced Anti-Aging Matrix',
      description: 'Peptides from the eye cream work synergistically with Niacinamide in the moisturizer to reduce fine lines and improve skin texture across the entire face. The gentle exfoliation from Betaine Salicylate enhances peptide penetration.',
      ingredients: ['SYN-AKE Peptide', 'Argireline', 'Niacinamide', 'Betaine Salicylate'],
      benefits: ['Reduces expression lines', 'Prevents new wrinkles', 'Improves skin texture', 'Enhances ingredient penetration']
    },
    {
      title: 'Complete Hydration System',
      description: 'The NMF Complex in the moisturizer is enhanced by the hydrating agents in the cleanser and eye cream, creating a comprehensive moisture system that maintains optimal hydration levels 24/7.',
      ingredients: ['NMF Complex', 'Squalane', 'Glycerin', 'Panthenol', 'Betaine'],
      benefits: ['24/7 hydration', 'Prevents water loss', 'Maintains skin plumpness', 'Supports natural moisture factors']
    },
    {
      title: 'Antioxidant Protection Network',
      description: 'Zerumbone from the eye cream, combined with the natural antioxidants in tallow and the protective properties of our preservation system, creates comprehensive defense against environmental damage.',
      ingredients: ['Zerumbone', 'Tallow Vitamins A,D,E,K', 'Sodium Phytate', 'Caffeine'],
      benefits: ['Neutralizes free radicals', 'Prevents premature aging', 'Protects against pollution', 'Supports skin repair']
    }
  ];

  const exclusionsAcrossAllProducts = [
    {
      category: 'Hormone Disruptors',
      excluded: ['Parabens', 'Phthalates', 'Oxybenzone', 'Triclosan', 'BHA/BHT'],
      impact: 'Complete elimination of ingredients linked to endocrine disruption across all three products',
      why: 'These chemicals can interfere with natural hormone function and have been linked to reproductive health concerns. Many competitor brands still use these in their formulations.'
    },
    {
      category: 'Synthetic Fragrances & Allergens',
      excluded: ['Parfum/Fragrance', 'Limonene', 'Linalool', 'Citronellol', 'Essential Oils'],
      impact: 'Zero fragrance-related irritation or sensitization risk',
      why: 'Fragrances are the #1 cause of cosmetic allergic reactions. Our unscented formulas eliminate this risk while allowing the natural, subtle scents of premium ingredients to shine through.'
    },
    {
      category: 'Harsh Surfactants & Emulsifiers',
      excluded: ['SLS/SLES', 'PEG Compounds', 'Polysorbates', 'Harsh Sulfates'],
      impact: 'Gentle cleansing and stable formulations without barrier disruption',
      why: 'These aggressive ingredients can strip the skin\'s natural protective barrier. Our gentle alternatives maintain product efficacy while respecting skin health.'
    },
    {
      category: 'Environmental Pollutants',
      excluded: ['PFAS (Forever Chemicals)', 'Microplastics', 'Non-biodegradable Polymers'],
      impact: 'Zero contribution to environmental pollution or bioaccumulation',
      why: 'We take a proactive stance on emerging environmental concerns, avoiding ingredients that persist in the environment or accumulate in the body.'
    },
    {
      category: 'Petroleum-Derived Ingredients',
      excluded: ['Petrolatum', 'Mineral Oil', 'Paraffin', 'Synthetic Waxes'],
      impact: 'Superior skin compatibility and nourishment',
      why: 'These ingredients sit on the skin\'s surface without providing active benefits. Our biomimetic alternatives integrate with skin\'s natural structure for superior results.'
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="grid grid-2">
            <div className="product-images">
              <div className="main-image">
                <div className="placeholder-image">
                  [THE COMPLETE ROUTINE - ALL THREE PRODUCTS ARRANGED]
                  <p>Professional product photography showing all three products</p>
                </div>
              </div>
              <div className="product-thumbnails">
                {bundleProducts.map((product, index) => (
                  <div key={index} className="thumbnail">
                    <div className="placeholder-image">
                      {product.image}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="product-info">
              <div className="product-badge">COMPLETE ROUTINE</div>
              <h1>The Complete Routine</h1>
              <p className="product-subtitle">
                Everything you need for optimal skin health. Morning and night routine designed to work in perfect synergy.
              </p>
              
              <div className="price-section">
                <div className="bundle-price">
                  <span className="current-price">$98</span>
                  <span className="original-price">$118</span>
                  <span className="savings">Save $20</span>
                </div>
                <div className="individual-prices">
                  <p>Individual prices: $32 + $48 + $38 = $118</p>
                  <p className="savings-text">Bundle savings: 17% off</p>
                </div>
              </div>
              
              <div className="product-actions">
                <button className="btn btn-primary btn-large">ADD BUNDLE TO CART - $98</button>
                <div className="guarantee-text">
                  <p>✓ 60-day money-back guarantee</p>
                  <p>✓ Free shipping on orders over $50</p>
                  <p>✓ Results visible in 7-14 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Bundle Works */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            <h2>WHY THE COMPLETE ROUTINE WORKS</h2>
            <p className="section-subtitle">
              Three products. One system. Maximum results through ingredient synergy.
            </p>
          </div>
          
          <div className="synergy-grid">
            {synergies.map((synergy, index) => (
              <div key={index} className="synergy-card">
                <h3>{synergy.title}</h3>
                <p>{synergy.description}</p>
                <div className="ingredient-tags">
                  {synergy.ingredients.map((ingredient, idx) => (
                    <span key={idx} className="ingredient-tag">{ingredient}</span>
                  ))}
                </div>
                <div className="synergy-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {synergy.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Daily Routine */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>YOUR DAILY ROUTINE</h2>
            <p className="section-subtitle">
              Simple, effective, and designed for the modern man
            </p>
          </div>
          
          <div className="routine-grid">
            {routineSteps.map((routine, index) => (
              <div key={index} className="routine-card">
                <h3>{routine.time} ROUTINE</h3>
                <div className="routine-steps">
                  {routine.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="routine-step">
                      <div className="step-number">{step.step}</div>
                      <div className="step-content">
                        <h4>{step.product}</h4>
                        <p>{step.instruction}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Products Breakdown */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            <h2>WHAT'S INCLUDED</h2>
            <p className="section-subtitle">
              Each product is a powerhouse on its own, unstoppable together
            </p>
          </div>
          
          <div className="bundle-products-grid">
            {bundleProducts.map((product, index) => (
              <div key={index} className="bundle-product-card">
                <div className="product-image">
                  <div className="placeholder-image">
                    {product.image}
                    <p>High-quality product photography</p>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price} value</p>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="ingredients-section">
                    <h4>Key Ingredients:</h4>
                    <div className="ingredient-list">
                      {product.keyIngredients.map((ingredient, idx) => (
                        <span key={idx} className="ingredient-tag">{ingredient}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="benefits-section">
                    <h4>Benefits:</h4>
                    <ul>
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={`/products/${product.id}`} className="btn btn-outline">
                    VIEW INDIVIDUAL PRODUCT
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section section-light">
        <div className="container">
          <div className="value-proposition">
            <div className="grid grid-2">
              <div className="value-content">
                <h2>THE SMARTEST INVESTMENT IN YOUR SKIN</h2>
                <div className="value-points">
                  <div className="value-point">
                    <div className="value-icon">💰</div>
                    <div>
                      <h3>Save $20 Immediately</h3>
                      <p>17% off compared to buying individually. That's like getting the cleanser for just $12.</p>
                    </div>
                  </div>
                  <div className="value-point">
                    <div className="value-icon">⚡</div>
                    <div>
                      <h3>Faster Results</h3>
                      <p>Products designed to work together deliver visible improvements 40% faster than single products.</p>
                    </div>
                  </div>
                  <div className="value-point">
                    <div className="value-icon">🎯</div>
                    <div>
                      <h3>Complete Solution</h3>
                      <p>No guesswork. No compatibility issues. Just a complete routine that works.</p>
                    </div>
                  </div>
                  <div className="value-point">
                    <div className="value-icon">🔬</div>
                    <div>
                      <h3>Ingredient Synergy</h3>
                      <p>Each product amplifies the others. Beef tallow + ceramides + peptides = maximum efficacy.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="value-visual">
                <div className="comparison-chart">
                  <h3>Bundle vs Individual</h3>
                  <div className="chart-item">
                    <span>Individual Products</span>
                    <span className="chart-bar individual">$118</span>
                  </div>
                  <div className="chart-item">
                    <span>Complete Routine Bundle</span>
                    <span className="chart-bar bundle">$98</span>
                  </div>
                  <div className="savings-highlight">
                    <strong>You Save: $20</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's NOT in Our Complete Routine */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>WHAT'S NOT IN OUR COMPLETE ROUTINE</h2>
            <p className="section-subtitle">
              The Rawdog Standard: What we exclude is just as important as what we include
            </p>
          </div>
          
          <div className="exclusions-overview">
            <div className="exclusions-intro">
              <p>
                Across all three products in our Complete Routine, we've systematically excluded ingredients that compromise skin health, environmental safety, or long-term wellness. Here's our comprehensive exclusion list and why these omissions matter:
              </p>
            </div>
            
            <div className="exclusions-grid">
              {exclusionsAcrossAllProducts.map((exclusion, index) => (
                <div key={index} className="exclusion-card">
                  <h3>{exclusion.category}</h3>
                  <div className="excluded-list">
                    <strong>Excluded:</strong> {exclusion.excluded.join(', ')}
                  </div>
                  <div className="exclusion-impact">
                    <strong>Impact:</strong> {exclusion.impact}
                  </div>
                  <p><strong>Why:</strong> {exclusion.why}</p>
                </div>
              ))}
            </div>
            
            <div className="clean-commitment">
              <h3>Our Clean Commitment</h3>
              <div className="commitment-stats">
                <div className="stat">
                  <h4>0</h4>
                  <p>Hormone disruptors</p>
                </div>
                <div className="stat">
                  <h4>0</h4>
                  <p>Synthetic fragrances</p>
                </div>
                <div className="stat">
                  <h4>0</h4>
                  <p>Forever chemicals</p>
                </div>
                <div className="stat">
                  <h4>0</h4>
                  <p>Microplastics</p>
                </div>
              </div>
              <p>
                Every ingredient in our Complete Routine has been rigorously vetted for safety, efficacy, and environmental impact. We don't just meet clean beauty standards - we set them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            <h2>HOW WE COMPARE TO COMPETITORS</h2>
            <p className="section-subtitle">
              The only men's skincare routine that delivers clinical results without compromise
            </p>
          </div>
          
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="feature-column">Feature</div>
              <div className="brand-column">Rawdog</div>
              <div className="brand-column">Hims</div>
              <div className="brand-column">Lumin</div>
              <div className="brand-column">Tiege Hanley</div>
            </div>
            
            <div className="comparison-row">
              <div className="feature">Hormone Disruptor Free</div>
              <div className="rawdog">✓</div>
              <div className="competitor">✗</div>
              <div className="competitor">✗</div>
              <div className="competitor">✗</div>
            </div>
            
            <div className="comparison-row">
              <div className="feature">Fragrance Free</div>
              <div className="rawdog">✓</div>
              <div className="competitor">✗</div>
              <div className="competitor">✗</div>
              <div className="competitor">✗</div>
            </div>
            
            <div className="comparison-row">
              <div className="feature">Advanced Peptides</div>
              <div className="rawdog">✓</div>
              <div className="competitor">✗</div>
              <div className="competitor">✗</div>
              <div className="competitor">✗</div>
            </div>
            
            <div className="comparison-row">
              <div className="feature">Biomimetic Ingredients</div>
              <div className="rawdog">✓</div>
              <div className="competitor">✗</div>
              <div className="competitor">✗</div>
              <div className="competitor">✗</div>
            </div>
            
            <div className="comparison-row">
              <div className="feature">PFAS Free</div>
              <div className="rawdog">✓</div>
              <div className="competitor">?</div>
              <div className="competitor">?</div>
              <div className="competitor">?</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-light">
        <div className="container text-center">
          <h2>READY TO TRANSFORM YOUR SKIN?</h2>
          <p className="mb-4">
            Join thousands of men who've discovered the power of a complete, synergistic skincare routine that's as clean as it is effective.
          </p>
          <div className="final-cta">
            <button className="btn btn-primary btn-large">
              GET THE COMPLETE ROUTINE - $98
            </button>
            <p className="guarantee-text">60-day money-back guarantee • Free shipping • Results in 7-14 days</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductBundle;
