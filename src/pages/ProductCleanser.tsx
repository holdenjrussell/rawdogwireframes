import React, { useState } from 'react';
import ReviewsSystem from '../components/ReviewsSystem';
import ConversionOptimization from '../components/ConversionOptimization';
import StickyAddToCart from '../components/StickyAddToCart';
import ScrollCTAs from '../components/ScrollCTAs';
import './Product.css';

const ProductCleanser: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'onetime' | 'subscribe'>('subscribe');
  const [showBenefits, setShowBenefits] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showExclusions, setShowExclusions] = useState(false);

  const benefits = [
    'Cleanses without the squeaky-clean strip that damages skin',
    'Maintains your skin\'s natural protective oils',
    'pH-balanced to prevent dryness and irritation',
    'Hydrating cleanse technology - skin feels soft, never tight',
    '2-in-1: Premium cleanser + luxury shave cream',
    'Reduces razor burn by 70% when used for shaving',
    'Saves time, doubles results - one product, two uses',
    'So gentle, she uses it too (and will probably steal it)',
    'Non-foaming formula that actually works better'
  ];

  const keyIngredients = [
    {
      name: 'Cocamidopropyl Betaine',
      description: 'The anti-strip champion. This coconut-derived surfactant is the opposite of harsh sulfates. It cleanses effectively while preserving your skin\'s natural oils and pH balance. No more tight, dry feeling after washing - just clean, comfortable skin.',
      benefits: ['Cleanses without stripping', 'Preserves natural moisture barrier', 'Maintains optimal pH balance', 'Perfect for sensitive skin', 'Creates ideal shaving slip']
    },
    {
      name: 'Squalane',
      description: 'Your skin\'s best friend during cleansing. This biomimetic moisturizer prevents the moisture loss that makes other cleansers feel stripping. It also provides the perfect glide for shaving, reducing friction and preventing razor burn.',
      benefits: ['Prevents moisture stripping', 'Creates protective barrier', 'Ideal shaving lubrication', 'Reduces razor friction', 'Leaves skin soft and supple']
    },
    {
      name: 'Glycerin',
      description: 'The hydration hero that makes our cleanser feel like a treatment, not a stripper. Glycerin attracts moisture to your skin during cleansing, ensuring you finish with more hydration, not less. Essential for that post-cleanse comfort.',
      benefits: ['Attracts moisture during cleansing', 'Prevents trans-epidermal water loss', 'Softens beard for easier shaving', 'Leaves skin plump and hydrated', 'No post-wash tightness']
    },
    {
      name: 'Betaine Salicylate',
      description: 'Gentle exfoliation without the burn. This naturally-derived BHA unclogs pores and smooths skin texture without the irritation of traditional acids. Perfect for preventing ingrown hairs and razor bumps.',
      benefits: ['Prevents ingrown hairs', 'Unclogs pores gently', 'Smooths skin texture', 'Reduces razor bumps', 'Anti-inflammatory action']
    },
    {
      name: 'Panthenol (Pro-Vitamin B5)',
      description: 'The post-shave soother. Panthenol converts to Vitamin B5 on your skin, providing powerful healing and anti-inflammatory benefits. It\'s like having aftershave built into your cleanser.',
      benefits: ['Heals razor irritation', 'Reduces post-shave redness', 'Accelerates skin repair', 'Anti-inflammatory action', 'Strengthens skin barrier']
    },
    {
      name: 'Allantoin',
      description: 'Nature\'s healing agent. Allantoin promotes cell regeneration and creates a protective barrier against irritation. It\'s why you can shave with our cleanser daily without destroying your face.',
      benefits: ['Promotes healing', 'Soothes razor burn', 'Protects against irritation', 'Accelerates cell turnover', 'Creates protective barrier']
    }
  ];

  const fullIngredientList = 'Water, Glyceryl Stearate, Squalane, Glycerin, Cocamidopropyl Betaine, Cetearyl Alcohol, Cetyl Alcohol, Betaine Salicylate, Guar Hydroxypropyltrimonium Chloride, Panthenol, Caprylhydroxamic Acid, Allantoin, Caprylyl Glycol, Potassium Sorbate.';

  const exclusions = [
    {
      category: 'Forever Chemicals (PFAS)',
      excluded: ['PFAS', 'PTFE', 'Perfluorinated compounds', 'Fluorinated surfactants'],
      why: 'These "forever chemicals" accumulate in your body and never break down. Most brands ignore this - we don\'t.'
    },
    {
      category: 'Microplastics',
      excluded: ['Polyethylene', 'Acrylates', 'Carbomer', 'Microbeads'],
      why: 'No plastic pollution in our formulas. We use biodegradable alternatives that are gentler on skin and planet.'
    },
    {
      category: 'PEGs',
      excluded: ['PEG-40', 'PEG-100', 'PEG compounds', 'Polysorbates'],
      why: 'PEGs can be contaminated with carcinogens and strip your skin barrier. Our plant-based system is safer and gentler.'
    },
    {
      category: 'Silicones',
      excluded: ['Dimethicone', 'Cyclopentasiloxane', 'Cyclohexasiloxane'],
      why: 'Silicones create a false smoothness while preventing real hydration. Our formula provides genuine skin benefits.'
    },
    {
      category: 'Synthetic Fragrances',
      excluded: ['Parfum/Fragrance', 'Phthalates', 'Limonene', 'Linalool'],
      why: 'The #1 cause of skin irritation in cleansers. Our unscented formula eliminates this risk completely.'
    },
    {
      category: 'Seed Oils',
      excluded: ['Sunflower Oil', 'Safflower Oil', 'Grapeseed Oil', 'Canola Oil'],
      why: 'We\'re the ONLY men\'s brand with zero seed oils. No inflammatory omega-6s that can worsen acne.'
    },
    {
      category: 'Parabens',
      excluded: ['Methylparaben', 'Propylparaben', 'Butylparaben'],
      why: 'Hormone disruptors that can reduce testosterone. Not worth the risk for a preservative.'
    },
    {
      category: 'Sulfates',
      excluded: ['SLS (Sodium Lauryl Sulfate)', 'SLES (Sodium Laureth Sulfate)', 'ALS'],
      why: 'The ultimate skin strippers. These harsh detergents destroy your moisture barrier and cause that tight, dry feeling.'
    },
    {
      category: 'Harsh Preservatives',
      excluded: ['Formaldehyde-releasers', 'MIT/MCI', 'DMDM Hydantoin'],
      why: 'Old-school preservatives that cause allergic reactions. Our modern system is gentler and just as effective.'
    },
    {
      category: 'Fillers',
      excluded: ['Talc', 'Kaolin', 'Unnecessary thickeners'],
      why: 'No pointless bulking agents. Every ingredient has a purpose in our formula.'
    },
    {
      category: 'Dyes',
      excluded: ['FD&C Colors', 'Synthetic Colorants', 'Artificial Colors'],
      why: 'Colors serve no purpose in skincare except to potentially irritate. Our natural color comes from the ingredients.'
    },
    {
      category: 'Endocrine Disruptors',
      excluded: ['BPA', 'Triclosan', 'Oxybenzone', 'BHA/BHT'],
      why: 'Chemicals that mess with your hormones have no place in daily-use products. We protect your testosterone.'
    }
  ];

  const handleAddToCart = () => {
    alert(`Added to cart: ${selectedOption === 'subscribe' ? 'Subscribe & Save' : 'One-time purchase'}`);
  };

  return (
    <div className="page-container">
      {/* Sticky Add to Cart */}
      <StickyAddToCart
        productName="Hydrating Facial Cleanser"
        price={32.00}
        subscriptionPrice={27.20}
        onAddToCart={handleAddToCart}
      />
      
      <div className="container">
        <div className="product-detail-section">
          <div className="grid grid-2">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <div className="placeholder-image">
                  [HERO PRODUCT SHOT - CLEANSER BOTTLE]
                  <p>Premium bottle with pump dispenser</p>
                </div>
              </div>
              <div className="image-carousel">
                <div className="carousel-images">
                  <div className="placeholder-image">
                    [VIDEO - SHAVING WITH CLEANSER]
                    <p>30-second video showing dual-use as shave cream</p>
                  </div>
                  <div className="placeholder-image">
                    [GIF - TEXTURE TRANSFORMATION]
                    <p>Gel transforming to creamy lather</p>
                  </div>
                  <div className="placeholder-image">
                    [BEFORE/AFTER - POST-SHAVE SKIN]
                    <p>Comparison: regular shave cream vs our cleanser</p>
                  </div>
                  <div className="placeholder-image">
                    [pH STRIP TEST DEMONSTRATION]
                    <p>Showing pH balance maintenance</p>
                  </div>
                  <div className="placeholder-image">
                    [LIFESTYLE - MORNING ROUTINE]
                    <p>Man using cleanser in modern bathroom</p>
                  </div>
                  <div className="placeholder-image">
                    [INFOGRAPHIC - 2-IN-1 BENEFITS]
                    <p>Visual showing cleanser + shave cream benefits</p>
                  </div>
                </div>
                <div className="carousel-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="product-info">
              <h1>Hydrating Facial Cleanser</h1>
              <div className="product-badges">
                <span className="badge badge-nonstrip">💧 Never Strips, Always Hydrates</span>
                <span className="badge badge-shave">🪒 2-in-1: Cleanser + Shave Cream</span>
              </div>
              <p className="product-size">4.0 FL OZ / 120 ML</p>
              
              <p className="product-description">
                <strong>The cleanser that doesn't strip - it hydrates.</strong> Finally, a face wash that cleanses without that tight, dry feeling. Our pH-balanced formula maintains your skin's natural protective oils while removing dirt and oil. <em>Plus, it doubles as the best shave cream you've ever used - reducing razor burn by 70%.</em> So gentle, she'll steal this one too.
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
                  NON-NEGOTIABLE EXCLUSIONS {showExclusions ? '⌃' : '⌄'}
                </button>
                {showExclusions && (
                  <div className="section-content">
                    <div className="exclusions-intro">
                      <p><strong>What's NOT in our products is just as important as what IS.</strong> We've eliminated every harsh, stripping, and questionable ingredient found in other cleansers:</p>
                    </div>
                    <div className="exclusions-grid">
                      {exclusions.map((exclusion, index) => (
                        <div key={index} className="exclusion-item">
                          <div className="exclusion-header">
                            <span className="exclusion-icon">✗</span>
                            <h4>{exclusion.category}</h4>
                          </div>
                          <div className="excluded-ingredients">
                            <strong>Never includes:</strong> {exclusion.excluded.join(', ')}
                          </div>
                          <p className="exclusion-why">{exclusion.why}</p>
                        </div>
                      ))}
                    </div>
                    <div className="clean-guarantee">
                      <h4>The Non-Stripping Promise</h4>
                      <p>Most cleansers strip your skin to feel "clean." Ours maintains your natural barrier while actually cleaning better. That's the Rawdog difference.</p>
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
                      <span className="review-count">67 Reviews</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Purchase Options */}
              <div className="purchase-options">
                <div className="option-group">
                  <label className={`option-label ${selectedOption === 'onetime' ? 'selected' : ''}`}>
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
                  
                  <label className={`option-label ${selectedOption === 'subscribe' ? 'selected' : ''}`}>
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
                    <p>Complete routine bundle</p>
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

        {/* The Shaving Revolution Section */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center">THE SHAVING REVOLUTION</h2>
            <div className="shaving-content">
              <div className="grid grid-2">
                <div className="shaving-story">
                  <h3>One Product. Two Game-Changing Uses.</h3>
                  <p className="lead">
                    We discovered something incredible: our non-stripping cleanser creates the perfect shaving environment. The result? The smoothest shave of your life with 70% less irritation.
                  </p>
                  <div className="shaving-benefits">
                    <h4>Why It Works for Shaving:</h4>
                    <ul>
                      <li><strong>Superior Glide:</strong> Squalane creates frictionless razor movement</li>
                      <li><strong>Softens Beard:</strong> Glycerin penetrates hair for easier cutting</li>
                      <li><strong>Prevents Irritation:</strong> Panthenol and Allantoin soothe as you shave</li>
                      <li><strong>No Residue:</strong> Rinses clean without clogging your razor</li>
                      <li><strong>Post-Shave Comfort:</strong> Leaves skin hydrated, never tight</li>
                    </ul>
                  </div>
                  <div className="shaving-testimonial">
                    <p>"I haven't bought shaving cream in 6 months. This cleanser gives me a better shave than any dedicated shave product I've tried." - Marcus K.</p>
                  </div>
                </div>
                <div className="shaving-visuals">
                  <div className="placeholder-image">
                    [VIDEO - SHAVING DEMONSTRATION]
                    <p>Full shaving routine using cleanser</p>
                  </div>
                  <div className="placeholder-image">
                    [BEFORE/AFTER - RAZOR BURN]
                    <p>Comparison: traditional vs cleanser shave</p>
                  </div>
                  <div className="placeholder-image">
                    [GIF - RAZOR GLIDE TEST]
                    <p>Showing superior glide and cushion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA After Shaving Section */}
        <ScrollCTAs
          productName="Hydrating Facial Cleanser"
          price={32.00}
          subscriptionPrice={27.20}
          position="after-benefits"
        />

        {/* Non-Stripping Science Section */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">THE SCIENCE OF NON-STRIPPING CLEANSING</h2>
            <div className="nonstrip-science">
              <div className="grid grid-2">
                <div>
                  <h3>Why Most Cleansers Damage Your Skin</h3>
                  <p>
                    That "squeaky clean" feeling? That's your skin crying for help. Traditional cleansers use harsh sulfates that strip away your natural oils, disrupting your moisture barrier and triggering excess oil production.
                  </p>
                  <div className="stripping-comparison">
                    <h4>Stripping vs. Hydrating Cleanse:</h4>
                    <div className="comparison-point">
                      <strong>Traditional Cleansers:</strong>
                      <ul>
                        <li>Strip natural oils completely</li>
                        <li>Disrupt pH balance (alkaline)</li>
                        <li>Trigger rebound oil production</li>
                        <li>Leave skin tight and dry</li>
                        <li>Damage moisture barrier</li>
                      </ul>
                    </div>
                    <div className="comparison-point">
                      <strong>Our Hydrating Cleanser:</strong>
                      <ul>
                        <li>Preserves beneficial oils</li>
                        <li>Maintains optimal pH (5.5)</li>
                        <li>Balances oil production</li>
                        <li>Leaves skin soft and hydrated</li>
                        <li>Strengthens moisture barrier</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="nonstrip-visuals">
                  <div className="placeholder-image">
                    [INFOGRAPHIC - pH SCALE COMPARISON]
                    <p>Our cleanser vs competitors pH levels</p>
                  </div>
                  <div className="placeholder-image">
                    [MICROSCOPE IMAGE - SKIN BARRIER]
                    <p>Healthy vs stripped skin barrier comparison</p>
                  </div>
                  <div className="placeholder-image">
                    [VIDEO - OIL STRIP TEST]
                    <p>Demo showing we don't strip natural oils</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">HOW TO USE</h2>
            <div className="usage-dual">
              <div className="usage-tabs">
                <button className="tab-button active">AS A CLEANSER</button>
                <button className="tab-button">AS SHAVE CREAM</button>
              </div>
              
              <div className="usage-content-cleanser">
                <div className="usage-video">
                  <div className="placeholder-image">
                    [VIDEO - CLEANSING ROUTINE]
                    <p>30-second cleansing demonstration</p>
                  </div>
                </div>
                <div className="usage-steps">
                  <div className="usage-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                      <h3>WET FACE WITH WARM WATER</h3>
                      <p>Open pores and prep skin for cleansing. Warm (not hot) water is ideal.</p>
                      <div className="placeholder-image">
                        [GIF - WATER SPLASH]
                        <p>Proper face wetting technique</p>
                      </div>
                    </div>
                  </div>
                  <div className="usage-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                      <h3>APPLY DIME-SIZED AMOUNT</h3>
                      <p>Less is more. Our concentrated formula means you need less than traditional cleansers.</p>
                      <div className="placeholder-image">
                        [IMAGE - AMOUNT DEMO]
                        <p>Showing correct amount</p>
                      </div>
                    </div>
                  </div>
                  <div className="usage-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                      <h3>MASSAGE FOR 30 SECONDS</h3>
                      <p>Gentle circular motions. No need to scrub - let the ingredients do the work.</p>
                      <div className="placeholder-image">
                        [GIF - MASSAGE TECHNIQUE]
                        <p>Proper cleansing motions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="usage-content-shave hidden">
                <div className="usage-video">
                  <div className="placeholder-image">
                    [VIDEO - SHAVING ROUTINE]
                    <p>Complete shaving tutorial</p>
                  </div>
                </div>
                <div className="usage-steps">
                  <div className="usage-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                      <h3>PREP WITH WARM WATER</h3>
                      <p>Soften beard hair for 30 seconds with warm water.</p>
                    </div>
                  </div>
                  <div className="usage-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                      <h3>APPLY GENEROUSLY</h3>
                      <p>Use slightly more than for cleansing. Work into a light lather.</p>
                    </div>
                  </div>
                  <div className="usage-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                      <h3>SHAVE WITH CONFIDENCE</h3>
                      <p>The slip and cushion will amaze you. Rinse razor frequently.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stolen From Boyfriend Section */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center">"SO GENTLE, SHE USES IT TOO"</h2>
            <div className="stolen-cleanser">
              <div className="grid grid-2">
                <div className="stolen-content">
                  <p className="lead">
                    Our cleanser is so gentle and effective, it's become a unisex favorite. Women love that it removes makeup without stripping, men love that it doubles as shave cream.
                  </p>
                  <div className="testimonials">
                    <div className="testimonial">
                      <p>"My girlfriend started using my cleanser and now claims it's better than her $80 face wash. I had to start hiding it." - Jake T.</p>
                    </div>
                    <div className="testimonial">
                      <p>"Wife discovered I use this as shave cream. Now she uses it for her legs. We go through bottles twice as fast." - Michael R.</p>
                    </div>
                    <div className="testimonial">
                      <p>"She said it's the only cleanser that doesn't break her out. Guess I'm ordering two bottles from now on." - David K.</p>
                    </div>
                  </div>
                </div>
                <div className="stolen-visuals">
                  <div className="placeholder-image">
                    [LIFESTYLE - COUPLE IN BATHROOM]
                    <p>Couple sharing the cleanser</p>
                  </div>
                  <div className="placeholder-image">
                    [PRODUCT IN FEMALE HANDS]
                    <p>Woman using the cleanser</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Customer Reviews */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">FEATURED REVIEWS</h2>
            <div className="featured-badge text-center mb-3">
              <span className="badge badge-highlight">🏆 #1 NON-STRIPPING CLEANSER FOR MEN</span>
            </div>
            <div className="customer-reviews">
              <div className="review-card featured">
                <div className="review-rating">★★★★★</div>
                <h4>"Best Shave of My Life"</h4>
                <p>"I was skeptical about using a cleanser to shave, but holy hell - this is better than any shaving cream I've used in 20 years. Zero irritation, perfect glide, and my skin feels amazing after. Game changer."</p>
                <div className="reviewer">- Robert M., Verified Buyer</div>
                <div className="review-highlight">Revolutionary shaving • Zero irritation</div>
              </div>
              
              <div className="review-card featured">
                <div className="review-rating">★★★★★</div>
                <h4>"Finally, A Cleanser That Doesn't Strip"</h4>
                <p>"Every other cleanser left my face feeling tight and dry. This one actually hydrates while it cleans. My oily T-zone is balanced, dry patches are gone. This is what cleansing should feel like."</p>
                <div className="reviewer">- Alex D., Verified Buyer</div>
                <div className="review-highlight">Hydrating cleanse • Perfect balance</div>
              </div>
              
              <div className="review-card featured">
                <div className="review-rating">★★★★★</div>
                <h4>"My Wife Stole It Immediately"</h4>
                <p>"Used it once and my wife asked what smelled so clean and fresh. She tried it and now uses it daily. Says it removes her makeup better than her expensive cleanser. Ordering in bulk now."</p>
                <div className="reviewer">- Chris P., Verified Buyer</div>
                <div className="review-highlight">Wife approved • Gentle yet effective</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews System */}
        <div id="reviews-section">
          <ReviewsSystem 
            productId="cleanser"
            productName="Hydrating Facial Cleanser"
            averageRating={4.6}
            totalReviews={67}
          />
        </div>

        {/* Ingredient Deep Dive */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">INGREDIENT DEEP DIVE</h2>
            <div className="ingredient-deep-dive">
              <div className="grid grid-2">
                <div>
                  <h3>The Perfect pH Balance</h3>
                  <p>
                    Your skin's natural pH is around 5.5 (slightly acidic). Most cleansers are alkaline (pH 9-10), which disrupts your acid mantle and causes dryness, irritation, and breakouts. Our cleanser maintains the perfect pH to support your skin's natural defenses.
                  </p>
                  <div className="ph-benefits">
                    <h4>Benefits of Proper pH:</h4>
                    <ul>
                      <li>Maintains healthy skin microbiome</li>
                      <li>Prevents bacterial overgrowth</li>
                      <li>Supports natural exfoliation</li>
                      <li>Reduces inflammation</li>
                      <li>Optimizes ingredient absorption</li>
                    </ul>
                  </div>
                </div>
                <div className="ph-visuals">
                  <div className="placeholder-image">
                    [INFOGRAPHIC - pH TESTING]
                    <p>Our cleanser vs competitors pH test</p>
                  </div>
                  <div className="placeholder-image">
                    [DIAGRAM - ACID MANTLE]
                    <p>How pH affects skin barrier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="section section-light">
          <div className="container text-center">
            <h2>TRUSTED BY 10,000+ MEN WHO VALUE THEIR SKIN</h2>
            <div className="social-proof-visual">
              <div className="placeholder-image">
                [INFOGRAPHIC - CUSTOMER STATS]
                <p>Visual showing usage statistics and satisfaction</p>
              </div>
            </div>
            <div className="social-proof-stats">
              <div className="stat">
                <h3>4.6★</h3>
                <p>Average Rating</p>
              </div>
              <div className="stat">
                <h3>70%</h3>
                <p>Less Razor Burn</p>
              </div>
              <div className="stat">
                <h3>2-in-1</h3>
                <p>Cleanser + Shave</p>
              </div>
              <div className="stat">
                <h3>60-Day</h3>
                <p>Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">COMPLETE YOUR ROUTINE</h2>
            <div className="related-products">
              <div className="related-product">
                <div className="product-image">
                  <div className="placeholder-image">
                    [MOISTURIZER PRODUCT SHOT]
                    <p>Face Moisturizer with Beef Tallow</p>
                  </div>
                  <div className="placeholder-image">
                    [MOISTURIZER TEXTURE]
                    <p>Luxurious texture demonstration</p>
                  </div>
                </div>
                <h3>Face Moisturizer with Beef Tallow</h3>
                <p className="product-tagline">Anti-aging powerhouse</p>
                <p className="product-price">$48.00</p>
                <button className="btn btn-outline">VIEW PRODUCT</button>
              </div>
              
              <div className="related-product">
                <div className="product-image">
                  <div className="placeholder-image">
                    [EYE CREAM PRODUCT SHOT]
                    <p>Caffeine Under Eye Cream</p>
                  </div>
                  <div className="placeholder-image">
                    [EYE CREAM RESULTS]
                    <p>Before/after eye bags</p>
                  </div>
                </div>
                <h3>Caffeine Under Eye Cream</h3>
                <p className="product-tagline">Eliminates eye bags</p>
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