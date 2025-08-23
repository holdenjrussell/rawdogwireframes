import React, { useState } from 'react';
import ReviewsSystem from '../components/ReviewsSystem';
import './Product.css';

const ProductMoisturizer: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'onetime' | 'subscribe'>('subscribe');
  const [showBenefits, setShowBenefits] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showExclusions, setShowExclusions] = useState(false);

  const benefits = [
    'Biomimetic tallow technology mimics natural skin lipids',
    'Lightweight, fast-absorbing formula',
    'Strengthens skin\'s protective barrier',
    'Suitable for both AM and PM use',
    'Rich in vitamins A, D, E, and K',
    'Comprehensive Natural Moisturizing Factor (NMF) complex',
    'Regulates oil production with Niacinamide',
    'Silicone-free with natural alternatives'
  ];

  const keyIngredients = [
    {
      name: 'Beef Tallow',
      description: 'The signature biomimetic occlusive that revolutionizes moisturization. Tallow contains a fatty acid profile remarkably similar to human sebum, with optimal ratios of palmitic, stearic, and oleic acids. Rich in fat-soluble vitamins A, D, E, and K, it provides deep nourishment while strengthening the skin barrier. Unlike plant oils that can oxidize or clog pores, tallow is naturally stable and non-comedogenic.',
      benefits: ['Biomimetic lipid profile matches human sebum', 'Rich in vitamins A, D, E, K naturally', 'Superior barrier repair and protection', 'Non-comedogenic despite being an animal fat', 'Exceptional stability and shelf-life']
    },
    {
      name: 'Ceramide NP',
      description: 'A crucial skin-identical ceramide (specifically N-stearoyl phytosphingosine) that makes up a significant portion of the skin\'s natural barrier. This bioidentical lipid helps restore and maintain the skin\'s protective function, preventing moisture loss and protecting against environmental damage. Essential for healthy skin barrier function.',
      benefits: ['Restores compromised skin barriers', 'Prevents transepidermal water loss', 'Reduces sensitivity and irritation', 'Supports natural skin repair processes']
    },
    {
      name: 'Niacinamide (Vitamin B3)',
      description: 'A versatile, well-researched active ingredient that addresses multiple skin concerns simultaneously. Niacinamide regulates sebum production, reduces inflammation, minimizes pore appearance, and improves skin tone. It also boosts ceramide synthesis, working synergistically with our Ceramide NP for enhanced barrier function.',
      benefits: ['Regulates oil production without drying', 'Reduces inflammation and redness', 'Minimizes pore appearance', 'Improves skin texture and tone', 'Boosts natural ceramide production']
    },
    {
      name: 'Natural Moisturizing Factor (NMF) Complex',
      description: 'A comprehensive blend of humectants that precisely replicates the skin\'s own Natural Moisturizing Factor. Includes Sodium PCA, amino acids (Serine, Glycine, Alanine, Arginine, Proline), Sodium Lactate, Urea, and other osmolytes. This complex doesn\'t just hydrate the surface - it replenishes the skin\'s own water-binding capacity.',
      benefits: ['Replicates skin\'s natural hydration system', 'Provides both immediate and long-term hydration', 'Supports cellular water balance', 'Enhances skin\'s natural moisture retention']
    },
    {
      name: 'Squalane',
      description: 'A lightweight, plant-derived emollient that closely mimics the squalene naturally produced by human sebaceous glands. This biomimetic ingredient provides excellent spreadability, rapid absorption, and antioxidant protection without any greasy residue. Perfect for all skin types, including acne-prone skin.',
      benefits: ['Biomimetic and readily absorbed', 'Non-comedogenic and lightweight', 'Provides antioxidant protection', 'Enhances other ingredient penetration']
    },
    {
      name: 'Advanced Emulsifier System',
      description: 'Our silicone-free formula uses innovative emulsifiers: Methylheptylglycerin and Diheptyl Succinate combined with Capryloyl Glycerin/Sebacic Acid Copolymer. These plant-derived alternatives provide the smooth, non-greasy feel typically achieved with silicones, but with better skin compatibility and environmental safety.',
      benefits: ['Silicone-free smooth texture', 'Enhanced ingredient stability', 'Better skin compatibility', 'Environmentally sustainable']
    }
  ];

  const fullIngredientList = 'Water, Caprylic/Capric Triglyceride, Cetearyl Olivate, Glycerin, Sorbitan Olivate, Squalane, Methylheptylglycerin, Persea Gratissima (Avocado) Oil, Tallow, Ceramide NP, Diheptyl Succinate, Sodium PCA, Betaine, Sodium Lactate, PCA, Fructose, Serine, Glycine, Alanine, Niacinamide, Glutamic Acid, Urea, Lysine HCL, Inositol, Threonine, Caprylhydroxamic Acid, Capryloyl Glycerin/Sebacic Acid Copolymer, Caprylyl Glycol, Arginine, Proline, Xanthan Gum, Sodium Phytate.';

  const exclusions = [
    {
      category: 'Silicones',
      excluded: ['Dimethicone', 'Cyclopentasiloxane', 'Cyclohexasiloxane', 'Phenyl Trimethicone'],
      why: 'While generally considered safe, silicones can create a barrier that prevents other beneficial ingredients from penetrating. Our advanced emulsifier system provides the same smooth feel with better ingredient compatibility and environmental safety.'
    },
    {
      category: 'Synthetic Fragrances & Allergens',
      excluded: ['Parfum/Fragrance', 'Limonene', 'Linalool', 'Citronellol', 'Geraniol'],
      why: 'These are among the most common cosmetic allergens. Even "natural" fragrances can cause sensitization. Our unscented formula eliminates this risk while allowing the natural, subtle scent of our premium ingredients to shine through.'
    },
    {
      category: 'Petroleum-Derived Ingredients',
      excluded: ['Petrolatum', 'Mineral Oil', 'Paraffin', 'Microcrystalline Wax'],
      why: 'These occlusive agents sit on the skin\'s surface without providing nourishment. Our biomimetic tallow offers superior barrier repair with active vitamins and compatible fatty acids.'
    },
    {
      category: 'Endocrine Disruptors',
      excluded: ['Parabens', 'Phthalates', 'BHA/BHT', 'Triclosan'],
      why: 'These chemicals can interfere with hormone function and have been linked to reproductive health concerns. Found in many competitor moisturizers, including some from Hims and older Lumin formulations.'
    },
    {
      category: 'Harsh Emulsifiers',
      excluded: ['PEG compounds', 'Polysorbates', 'Sodium Lauryl Sulfate'],
      why: 'These can compromise the skin barrier and cause irritation. Our gentle, plant-derived emulsifier system maintains product stability without skin disruption.'
    },
    {
      category: 'Synthetic Polymers & Microplastics',
      excluded: ['Acrylates/C10-30 Alkyl Acrylate Crosspolymer', 'Carbomer', 'Polyethylene'],
      why: 'These synthetic thickeners provide no skin benefit and contribute to environmental pollution. Our natural thickening system using Xanthan Gum is biodegradable and skin-compatible.'
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="product-detail-section">
          <div className="grid grid-2">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <div className="placeholder-image">
                  [FACE MOISTURIZER WITH BEEF TALLOW BOTTLE - MAIN IMAGE]
                  <p>High-quality product photography showing the moisturizer bottle</p>
                </div>
              </div>
              <div className="image-carousel">
                <div className="carousel-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="product-info">
              <h1>Face Moisturizer with Beef Tallow</h1>
              <p className="product-size">1.7 FL OZ / 50 ML</p>
              
              <p className="product-description">
                This lightweight, fast-absorbing moisturizer is the hero product of our lineup, showcasing Rawdog's unique blend of ancestral wisdom and modern science. Formulated to provide deep, lasting hydration and robust barrier support without a greasy residue, making it ideal for both AM and PM use.
              </p>

              {/* Benefits Section */}
              <div className="product-section">
                <button 
                  className="section-toggle"
                  onClick={() => setShowBenefits(!showBenefits)}
                >
                  BENEFITS {showBenefits ? '⌃' : '⌄'}
                </button>
                {showBenefits && (
                  <div className="section-content">
                    <ul className="benefits-list">
                      {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Key Ingredients Section */}
              <div className="product-section">
                <button 
                  className="section-toggle"
                  onClick={() => setShowIngredients(!showIngredients)}
                >
                  KEY INGREDIENTS {showIngredients ? '⌃' : '⌄'}
                </button>
                {showIngredients && (
                  <div className="section-content">
                    <div className="ingredients-list">
                      {keyIngredients.map((ingredient, index) => (
                        <div key={index} className="ingredient-item">
                          <h4>{ingredient.name}</h4>
                          <p>{ingredient.description}</p>
                          <div className="ingredient-benefits">
                            <strong>Key Benefits:</strong>
                            <ul>
                              {ingredient.benefits.map((benefit, idx) => (
                                <li key={idx}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="full-ingredients">
                      <h4>Full Ingredient List (INCI):</h4>
                      <p className="ingredient-list-text">{fullIngredientList}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* What's NOT in This Formula */}
              <div className="product-section">
                <button 
                  className="section-toggle"
                  onClick={() => setShowExclusions(!showExclusions)}
                >
                  WHAT'S NOT IN THIS FORMULA {showExclusions ? '⌃' : '⌄'}
                </button>
                {showExclusions && (
                  <div className="section-content">
                    <div className="exclusions-intro">
                      <p><strong>The Rawdog Standard:</strong> Our moisturizer is formulated without common ingredients that can compromise skin health or environmental safety. Here's what we've deliberately excluded and why:</p>
                    </div>
                    <div className="exclusions-list">
                      {exclusions.map((exclusion, index) => (
                        <div key={index} className="exclusion-item">
                          <h4>{exclusion.category}</h4>
                          <div className="excluded-ingredients">
                            <strong>Excluded:</strong> {exclusion.excluded.join(', ')}
                          </div>
                          <p><strong>Why we exclude them:</strong> {exclusion.why}</p>
                        </div>
                      ))}
                    </div>
                    <div className="clean-guarantee">
                      <h4>Our Commitment to Clean</h4>
                      <p>Every ingredient serves a specific purpose for skin health. We've replaced common problematic ingredients with innovative, safer alternatives that deliver superior results without compromise.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Reviews */}
              <div className="product-reviews">
                <div className="reviews-header">
                  <span className="reviews-label">REVIEWS</span>
                  <div className="reviews-rating">
                    <button 
                      className="reviews-link"
                      onClick={() => {
                        const reviewsSection = document.getElementById('reviews-section');
                        if (reviewsSection) {
                          reviewsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <span className="stars">★★★★★</span>
                      <span className="review-count">203 Reviews</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Purchase Options */}
              <div className="purchase-options">
                <div className="option-group">
                  <label className="option-label">
                    <input
                      type="radio"
                      name="purchase-type"
                      value="onetime"
                      checked={selectedOption === 'onetime'}
                      onChange={() => setSelectedOption('onetime')}
                    />
                    <span className="option-text">
                      <strong>ONE TIME PURCHASE</strong>
                      <span className="option-price">$48.00</span>
                    </span>
                  </label>
                  
                  <label className="option-label selected">
                    <input
                      type="radio"
                      name="purchase-type"
                      value="subscribe"
                      checked={selectedOption === 'subscribe'}
                      onChange={() => setSelectedOption('subscribe')}
                    />
                    <span className="option-text">
                      <strong>SUBSCRIBE & SAVE 15%</strong>
                      <span className="option-price">
                        $40.80 <span className="original-price">$48.00</span>
                      </span>
                    </span>
                  </label>
                </div>

                <button className="add-to-cart-btn">ADD TO CART</button>
              </div>

              {/* Bundle Offer */}
              <div className="bundle-offer">
                <div className="bundle-image">
                  <div className="placeholder-image">
                    [PRODUCT BUNDLE IMAGE]
                    <p>Three product bundle</p>
                  </div>
                </div>
                <div className="bundle-info">
                  <h3>MAKE IT A BUNDLE</h3>
                  <p className="bundle-savings">SAVE 15%</p>
                  <button className="bundle-btn">VIEW BUNDLE</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">HOW TO USE</h2>
            <div className="usage-steps">
              <div className="usage-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>CLEANSE FIRST</h3>
                  <p>Start with clean skin using our Hydrating Facial Cleanser for optimal absorption.</p>
                </div>
              </div>
              <div className="usage-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>APPLY TO FACE</h3>
                  <p>Dispense a small amount and gently massage into face and neck using upward motions.</p>
                </div>
              </div>
              <div className="usage-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>LAYER OR FINISH</h3>
                  <p>Use alone or layer under sunscreen in AM. Perfect as a final step in PM routine.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Science of Tallow */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">THE SCIENCE OF TALLOW</h2>
            <div className="grid grid-2">
              <div>
                <h3>Biomimetic Lipid Technology</h3>
                <p>
                  Beef tallow's lipid profile is remarkably similar to human sebum, containing a balanced ratio of saturated and unsaturated fatty acids, plus cholesterol - all critical components of a healthy skin barrier.
                </p>
                <p>
                  When applied, the skin recognizes these lipids as its own, allowing them to be readily integrated into the stratum corneum to patch up weaknesses, prevent transepidermal water loss (TEWL), and restore resilience.
                </p>
                
                <h3>Superior to Plant Oils</h3>
                <p>
                  Unlike many plant-based oils or petroleum-derived ingredients that can sit on the skin's surface, tallow's compatibility with human skin structure ensures superior absorption and barrier repair without clogging pores.
                </p>
                
                <div className="tallow-benefits">
                  <h4>Why Tallow Works:</h4>
                  <ul>
                    <li>Contains vitamins A, D, E, and K naturally</li>
                    <li>Fatty acid profile matches human sebum</li>
                    <li>Superior absorption and barrier integration</li>
                    <li>Non-comedogenic despite being an animal fat</li>
                    <li>Provides lasting hydration without greasiness</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="placeholder-image">
                  [TALLOW VS HUMAN SEBUM COMPARISON CHART]
                  <p>Scientific comparison showing lipid profile similarities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">WHAT CUSTOMERS SAY</h2>
            <div className="customer-reviews">
              <div className="review-card">
                <div className="review-rating">★★★★★</div>
                <h4>Skeptical at First, Now a Convert</h4>
                <p>"I was hesitant about tallow in skincare, but this moisturizer is incredible. Absorbs quickly, no greasy feeling, and my skin looks healthier than it has in years. The texture is perfect."</p>
                <div className="reviewer">- Alex M., Verified Buyer</div>
              </div>
              
              <div className="review-card">
                <div className="review-rating">★★★★★</div>
                <h4>Perfect for Combination Skin</h4>
                <p>"Finally found a moisturizer that hydrates my dry areas without making my T-zone oily. Been using it for 4 months and my skin barrier feels stronger than ever."</p>
                <div className="reviewer">- Ryan K., Verified Buyer</div>
              </div>
              
              <div className="review-card">
                <div className="review-rating">★★★★★</div>
                <h4>Game Changer for Sensitive Skin</h4>
                <p>"I have reactive skin and most moisturizers either don't hydrate enough or cause breakouts. This one does neither - just pure, effective hydration with zero irritation."</p>
                <div className="reviewer">- Michael T., Verified Buyer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredient Deep Dive */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">INGREDIENT DEEP DIVE</h2>
            <div className="ingredient-deep-dive">
              <div className="ingredient-spotlight">
                <h3>Natural Moisturizing Factor (NMF) Complex</h3>
                <p>
                  Our moisturizer contains a comprehensive NMF complex that precisely replicates the NMF found naturally within skin cells. This complex doesn't just hydrate the surface; it replenishes the skin's own water-binding capacity from within.
                </p>
                <div className="nmf-components">
                  <div className="component">
                    <h4>Amino Acids (40% of NMF)</h4>
                    <p><strong>Included:</strong> Serine, Glycine, Alanine, Arginine, Proline, Glutamic Acid, Lysine HCL, Threonine</p>
                    <p>These building blocks of proteins maintain skin hydration, support barrier function, and provide the raw materials for collagen synthesis.</p>
                  </div>
                  <div className="component">
                    <h4>Humectants (30% of NMF)</h4>
                    <p><strong>Included:</strong> Sodium PCA, Sodium Lactate, Urea, PCA</p>
                    <p>These powerful water-binding molecules attract and hold moisture from the environment and deeper skin layers.</p>
                  </div>
                  <div className="component">
                    <h4>Osmolytes & Sugars (20% of NMF)</h4>
                    <p><strong>Included:</strong> Betaine, Inositol, Fructose</p>
                    <p>These compounds help maintain cellular water balance and protect against environmental stress and dehydration.</p>
                  </div>
                </div>
              </div>
              
              <div className="advanced-ingredients">
                <h3>Advanced Supporting Ingredients</h3>
                <div className="advanced-grid">
                  <div className="advanced-item">
                    <h4>Caprylic/Capric Triglyceride</h4>
                    <p><strong>Source:</strong> Fractionated coconut oil</p>
                    <p><strong>Function:</strong> Lightweight emollient that enhances ingredient penetration without greasiness. Provides antimicrobial properties and extends product shelf life naturally.</p>
                  </div>
                  
                  <div className="advanced-item">
                    <h4>Cetearyl & Sorbitan Olivate</h4>
                    <p><strong>Source:</strong> Olive oil-derived emulsifiers</p>
                    <p><strong>Function:</strong> Creates stable, skin-compatible emulsions while providing additional moisturizing benefits. These are "good" emulsifiers that support rather than compromise the skin barrier.</p>
                  </div>
                  
                  <div className="advanced-item">
                    <h4>Persea Gratissima (Avocado) Oil</h4>
                    <p><strong>Source:</strong> Cold-pressed avocado fruit</p>
                    <p><strong>Function:</strong> Rich in oleic acid and vitamins A, D, and E. Provides deep nourishment and enhances the penetration of other active ingredients.</p>
                  </div>
                  
                  <div className="advanced-item">
                    <h4>Sodium Phytate</h4>
                    <p><strong>Source:</strong> Rice bran extract</p>
                    <p><strong>Function:</strong> Natural chelating agent that prevents oxidation and extends product stability. Also provides gentle exfoliation and brightening effects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews System */}
        <div id="reviews-section">
          <ReviewsSystem 
            productId="moisturizer"
            productName="Face Moisturizer with Beef Tallow"
            averageRating={4.8}
            totalReviews={203}
          />
        </div>

        {/* Related Products */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">COMPLETE YOUR ROUTINE</h2>
            <div className="related-products">
              <div className="related-product">
                <div className="product-image">
                  <div className="placeholder-image">
                    [CLEANSER IMAGE]
                    <p>Cleanser product shot</p>
                  </div>
                </div>
                <h3>Hydrating Facial Cleanser</h3>
                <p className="product-price">$32.00</p>
                <button className="btn btn-outline">VIEW PRODUCT</button>
              </div>
              
              <div className="related-product">
                <div className="product-image">
                  <div className="placeholder-image">
                    [EYE CREAM IMAGE]
                    <p>Eye cream product shot</p>
                  </div>
                </div>
                <h3>Caffeine Under Eye Cream</h3>
                <p className="product-price">$38.00</p>
                <button className="btn btn-outline">VIEW PRODUCT</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductMoisturizer;
