import React, { useState } from 'react';
import ReviewsSystem from '../components/ReviewsSystem';
import ConversionOptimization from '../components/ConversionOptimization';
import './Product.css';

const ProductCleanser: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'onetime' | 'subscribe'>('subscribe');
  const [showBenefits, setShowBenefits] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showExclusions, setShowExclusions] = useState(false);

  const benefits = [
    'Gentle cleansing without stripping natural oils',
    'Maintains skin\'s moisture barrier during cleansing',
    'Suitable for all skin types, especially oily/combination',
    'Low-foaming milky texture for comfortable use',
    'Shave-friendly formula',
    'Leaves skin feeling soft and nourished',
    'Free from harsh sulfates and synthetic fragrances'
  ];

  const keyIngredients = [
    {
      name: 'Cocamidopropyl Betaine',
      description: 'A very gentle amphoteric surfactant derived from coconut oil. Unlike harsh sulfates (SLS/SLES) that strip the skin\'s natural protective barrier, this coconut-derived cleanser effectively lifts away dirt, oil, and impurities while maintaining the skin\'s natural pH balance. Its amphoteric nature means it\'s gentle enough for sensitive skin yet effective for thorough cleansing.',
      benefits: ['Gentle cleansing without stripping', 'Maintains natural pH balance', 'Derived from renewable coconut oil', 'Compatible with all skin types']
    },
    {
      name: 'Squalane',
      description: 'A lightweight, biomimetic emollient that closely resembles the squalene naturally produced by human sebaceous glands. This plant-derived version provides immediate hydration and helps maintain the skin\'s moisture barrier during cleansing, preventing the tight, dry feeling common with traditional cleansers.',
      benefits: ['Biomimetic hydration', 'Non-comedogenic', 'Antioxidant properties', 'Enhances skin barrier function']
    },
    {
      name: 'Glycerin',
      description: 'A powerful humectant that attracts moisture from the environment and deeper skin layers to the surface. In cleansers, glycerin prevents moisture loss during the cleansing process and leaves skin feeling soft and hydrated rather than stripped.',
      benefits: ['Superior moisture retention', 'Prevents transepidermal water loss', 'Improves skin texture', 'Non-irritating for sensitive skin']
    },
    {
      name: 'Betaine Salicylate',
      description: 'A gentle, naturally-derived BHA (beta-hydroxy acid) that provides mild chemical exfoliation without the irritation associated with traditional salicylic acid. It penetrates pores to dissolve excess oil and dead skin cells, helping to prevent breakouts and improve skin texture.',
      benefits: ['Gentle pore cleansing', 'Reduces blackheads and breakouts', 'Improves skin texture', 'Anti-inflammatory properties']
    },
    {
      name: 'Panthenol (Pro-Vitamin B5)',
      description: 'A provitamin that converts to Vitamin B5 in the skin, providing powerful anti-inflammatory and healing properties. Panthenol helps calm irritation, reduce redness, and support the skin\'s natural repair processes, making it ideal for post-shave care.',
      benefits: ['Anti-inflammatory action', 'Accelerates healing', 'Reduces redness and irritation', 'Enhances skin barrier repair']
    },
    {
      name: 'Allantoin',
      description: 'A botanical extract with exceptional soothing and healing properties. Allantoin promotes cell regeneration, helps heal minor skin irritations, and provides a protective barrier against environmental stressors. It\'s particularly beneficial for men who shave regularly.',
      benefits: ['Promotes cell regeneration', 'Soothes razor burn', 'Protects against irritation', 'Accelerates wound healing']
    }
  ];

  const fullIngredientList = 'Water, Glyceryl Stearate, Squalane, Glycerin, Cocamidopropyl Betaine, Cetearyl Alcohol, Cetyl Alcohol, Betaine Salicylate, Guar Hydroxypropyltrimonium Chloride, Panthenol, Caprylhydroxamic Acid, Allantoin, Caprylyl Glycol, Potassium Sorbate.';

  const exclusions = [
    {
      category: 'Harsh Surfactants',
      excluded: ['Sodium Lauryl Sulfate (SLS)', 'Sodium Laureth Sulfate (SLES)', 'Ammonium Lauryl Sulfate'],
      why: 'These aggressive detergents strip the skin\'s natural protective barrier, causing dryness, irritation, and increased sensitivity. Found in many competitor cleansers like Tiege Hanley and some Kiehl\'s formulations.'
    },
    {
      category: 'Synthetic Fragrances & Dyes',
      excluded: ['Parfum/Fragrance', 'Limonene', 'Linalool', 'Artificial Colors (Blue 1, Red 4, etc.)'],
      why: 'Common allergens and irritants that provide no skincare benefit. Many men\'s brands add these for sensory appeal, but they can cause contact dermatitis and sensitization over time.'
    },
    {
      category: 'Endocrine Disruptors',
      excluded: ['Parabens', 'Phthalates', 'Oxybenzone', 'Triclosan'],
      why: 'These chemicals can interfere with hormone function and have been linked to reproductive health concerns. Still found in some Hims and older Lumin formulations.'
    },
    {
      category: 'Forever Chemicals (PFAS)',
      excluded: ['Perfluorinated compounds', 'PTFE', 'Fluorinated surfactants'],
      why: 'These persistent chemicals accumulate in the body and environment. While research on topical absorption is ongoing, we take a precautionary approach that most brands ignore.'
    },
    {
      category: 'Harsh Preservatives',
      excluded: ['Formaldehyde-releasers', 'Diazolidinyl Urea', 'DMDM Hydantoin', 'Methylchloroisothiazolinone (MCI)'],
      why: 'These older preservative systems can cause allergic reactions and skin sensitization. We use modern, gentler alternatives like Caprylhydroxamic Acid.'
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
                  [HYDRATING FACIAL CLEANSER BOTTLE - MAIN IMAGE]
                  <p>High-quality product photography showing the cleanser bottle</p>
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
              <h1>Hydrating Facial Cleanser</h1>
              <p className="product-size">6.7 FL OZ / 200 ML</p>
              
              <p className="product-description">
                A sophisticated, low-foaming milky cleanser designed to purify without stripping the skin's natural moisture barrier. Unlike harsh, sulfate-based cleansers common in the men's market, this formula is engineered to be "shave-friendly" and suitable for all skin types, particularly the oilier, more reactive skin common in men.
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
                      <p><strong>The Rawdog Standard:</strong> We believe what we leave OUT is just as important as what we put IN. Here's what you won't find in our cleanser and why that matters for your skin health:</p>
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
                      <h4>Our Clean Guarantee</h4>
                      <p>Every ingredient in our cleanser has been carefully vetted for safety, efficacy, and environmental impact. We use modern, gentle alternatives that deliver superior results without compromising your long-term skin health.</p>
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
                      <span className="review-count">127 Reviews</span>
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
                      <span className="option-price">$32.00</span>
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
                        $27.20 <span className="original-price">$32.00</span>
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

              {/* Conversion Optimization */}
              <ConversionOptimization 
                productName="Hydrating Facial Cleanser"
                originalPrice={32.00}
                subscriptionPrice={27.20}
                savings={4.80}
              />
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
                  <h3>WET FACE</h3>
                  <p>Start with lukewarm water to open pores and prepare skin for cleansing.</p>
                </div>
              </div>
              <div className="usage-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>APPLY CLEANSER</h3>
                  <p>Dispense a small amount into palm and gently massage onto damp skin in circular motions.</p>
                </div>
              </div>
              <div className="usage-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>RINSE THOROUGHLY</h3>
                  <p>Rinse with cool water to close pores and pat dry with a clean towel.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Science Behind the Formula */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">THE SCIENCE BEHIND THE FORMULA</h2>
            <div className="grid grid-2">
              <div>
                <h3>Biomimetic Cleansing Technology</h3>
                <p>
                  This cleanser utilizes biomimetic technology that works with your skin's natural processes rather than against them. The gentle surfactant system effectively removes impurities while maintaining the skin's essential moisture barrier.
                </p>
                <p>
                  Unlike traditional sulfate-based cleansers that can strip the skin and cause irritation, our formula uses coconut-derived Cocamidopropyl Betaine, which cleanses without disrupting the skin's natural pH balance.
                </p>
                
                <h3>Moisture-Preserving Formula</h3>
                <p>
                  The inclusion of Squalane and Glycerin ensures that while the cleanser removes dirt and excess oil, it simultaneously replenishes moisture. This dual-action approach leaves skin feeling clean but never tight or dry.
                </p>
                
                <h3>Advanced Preservation System</h3>
                <p>
                  Our cleanser uses Caprylhydroxamic Acid and Caprylyl Glycol - modern, gentle preservatives that maintain product integrity without the sensitization risks of traditional preservatives like parabens or formaldehyde-releasers.
                </p>
              </div>
              <div>
                <div className="placeholder-image">
                  [SCIENTIFIC DIAGRAM OF CLEANSING ACTION]
                  <p>Illustration showing how the cleanser works on skin</p>
                </div>
                
                <div className="science-facts">
                  <h4>Clinical Benefits:</h4>
                  <ul>
                    <li><strong>pH Balanced:</strong> Maintains skin's natural 5.5 pH</li>
                    <li><strong>Non-Stripping:</strong> Preserves natural lipid barrier</li>
                    <li><strong>Gentle Exfoliation:</strong> BHA removes dead skin cells</li>
                    <li><strong>Anti-Inflammatory:</strong> Reduces post-shave irritation</li>
                    <li><strong>Microbiome-Friendly:</strong> Doesn't disrupt beneficial bacteria</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredient Spotlight */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">INGREDIENT SPOTLIGHT</h2>
            <div className="ingredient-spotlight-grid">
              <div className="spotlight-item">
                <h3>Guar Hydroxypropyltrimonium Chloride</h3>
                <p><strong>Function:</strong> Natural conditioning agent derived from guar beans</p>
                <p><strong>Benefit:</strong> Provides slip and conditioning without weighing down the skin, making this cleanser particularly effective for pre-shave preparation.</p>
                <p><strong>Why it matters:</strong> Unlike synthetic conditioning agents, this natural polymer is biodegradable and non-irritating.</p>
              </div>
              
              <div className="spotlight-item">
                <h3>Glyceryl Stearate</h3>
                <p><strong>Function:</strong> Plant-derived emulsifier and skin-conditioning agent</p>
                <p><strong>Benefit:</strong> Helps blend oil and water phases while providing additional moisturizing properties.</p>
                <p><strong>Why it matters:</strong> Creates the luxurious, milky texture without relying on harsh emulsifiers that can irritate sensitive skin.</p>
              </div>
              
              <div className="spotlight-item">
                <h3>Cetearyl & Cetyl Alcohol</h3>
                <p><strong>Function:</strong> Fatty alcohols that act as emollients and texture enhancers</p>
                <p><strong>Benefit:</strong> Provide skin-softening properties and help create the rich, creamy texture.</p>
                <p><strong>Why it matters:</strong> These are "good" alcohols that moisturize rather than dry out the skin, unlike denatured alcohol found in many men's products.</p>
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
                <h4>Game Changer for Sensitive Skin</h4>
                <p>"I've always struggled with cleansers that either don't clean well or leave my skin feeling stripped. This one is perfect - gets everything off but my skin feels moisturized after."</p>
                <div className="reviewer">- Marcus T., Verified Buyer</div>
              </div>
              
              <div className="review-card">
                <div className="review-rating">★★★★★</div>
                <h4>Perfect for Daily Use</h4>
                <p>"Use this every morning and evening. The texture is amazing and it doesn't foam up like crazy. My skin looks clearer and feels healthier since I started using it."</p>
                <div className="reviewer">- David L., Verified Buyer</div>
              </div>
              
              <div className="review-card">
                <div className="review-rating">★★★★★</div>
                <h4>Great for Shaving</h4>
                <p>"This works perfectly as a pre-shave cleanser. Softens the beard and prepares the skin without any irritation. Been using it for 3 months now."</p>
                <div className="reviewer">- James R., Verified Buyer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews System */}
        <div id="reviews-section">
          <ReviewsSystem 
            productId="cleanser"
            productName="Hydrating Facial Cleanser"
            averageRating={4.9}
            totalReviews={127}
          />
        </div>

        {/* Related Products */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">COMPLETE YOUR ROUTINE</h2>
            <div className="related-products">
              <div className="related-product">
                <div className="product-image">
                  <div className="placeholder-image">
                    [FACE MOISTURIZER IMAGE]
                    <p>Moisturizer product shot</p>
                  </div>
                </div>
                <h3>Face Moisturizer with Beef Tallow</h3>
                <p className="product-price">$48.00</p>
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

export default ProductCleanser;
