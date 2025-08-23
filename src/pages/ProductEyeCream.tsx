import React, { useState } from 'react';
import ReviewsSystem from '../components/ReviewsSystem';
import ConversionOptimization from '../components/ConversionOptimization';
import StickyAddToCart from '../components/StickyAddToCart';
import ScrollCTAs from '../components/ScrollCTAs';
import './Product.css';

const ProductEyeCream: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'onetime' | 'subscribe'>('subscribe');
  const [showBenefits, setShowBenefits] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showExclusions, setShowExclusions] = useState(false);

  const benefits = [
    'Eliminates under-eye bags from late nights and screen fatigue',
    'Erases evidence of all-nighters and startup stress',
    'Board-room ready in 5 minutes - instant puffiness reduction',
    'Reduces crow\'s feet by up to 30% in 8 weeks',
    'Peptides proven to rival injectable treatments',
    'Reverses 5 years of eye aging naturally',
    'Immediate caffeine tightening effect for morning meetings',
    'Non-greasy formula perfect under concealer',
    'So effective, she\'ll steal it for herself'
  ];

  const keyIngredients = [
    {
      name: 'Caffeine',
      description: 'Your secret weapon against all-nighters. This clinically-proven vasoconstrictor immediately tightens blood vessels to eliminate fluid retention and puffiness. Perfect for those early morning meetings after late night work sessions. Caffeine also provides powerful antioxidant protection against screen-induced oxidative stress.',
      benefits: ['Instant eye bag reduction in 5 minutes', 'Eliminates puffiness from lack of sleep', 'Improves microcirculation', 'Protects against blue light damage', 'Energizes tired-looking eyes']
    },
    {
      name: 'SYN-AKE (Dipeptide Diaminobutyroyl Benzylamide Diacetate)',
      description: 'A revolutionary biomimetic peptide inspired by temple viper venom that targets specific ion channels in nerve endings. This neuromodulating peptide reduces the frequency and intensity of muscle contractions that cause expression lines, providing a non-invasive alternative to injectable treatments.',
      benefits: ['Reduces muscle contraction frequency', 'Smooths dynamic wrinkles', 'Targets crow\'s feet specifically', 'Non-invasive wrinkle reduction', 'Cumulative anti-aging effects']
    },
    {
      name: 'Argireline (Acetyl Hexapeptide-8)',
      description: 'Often called "Botox in a jar," this hexapeptide interferes with the SNARE complex that enables neurotransmitter release. By reducing the intensity of muscle contractions, Argireline helps prevent the formation of new expression lines while smoothing existing ones.',
      benefits: ['Interferes with neurotransmitter release', 'Reduces muscle contraction intensity', 'Prevents new wrinkle formation', 'Smooths existing expression lines', 'Synergistic with SYN-AKE']
    },
    {
      name: 'Zerumbone',
      description: 'A rare and potent bioactive compound extracted from Zingiber zerumbet (wild ginger). This powerful antioxidant and anti-inflammatory agent helps brighten dark under-eye circles caused by stress and lack of sleep, protects against environmental damage, and supports the skin\'s natural repair processes.',
      benefits: ['Brightens stress-induced dark circles', 'Reduces inflammation from eye strain', 'Protects against screen radiation', 'Supports overnight repair', 'Superior antioxidant activity']
    },
    {
      name: 'Advanced Peptide Complex',
      description: 'Our eye cream features an additional Arginine/Lysine Polypeptide that supports collagen synthesis and skin repair. This multi-peptide approach ensures comprehensive anti-aging benefits targeting different aspects of skin aging around the delicate eye area.',
      benefits: ['Supports collagen synthesis', 'Enhances skin repair processes', 'Improves skin firmness', 'Complements neuromodulating peptides', 'Provides comprehensive anti-aging']
    },
    {
      name: 'Hydration & Barrier Complex',
      description: 'A sophisticated blend including Glyceryl Glucoside (a natural osmoprotectant), Betaine, and our signature emollient system. This complex provides immediate and long-lasting hydration while supporting the delicate eye area\'s barrier function.',
      benefits: ['Immediate and long-term hydration', 'Supports delicate eye area barrier', 'Provides osmoprotection', 'Non-greasy formula', 'Compatible with makeup application']
    }
  ];

  const fullIngredientList = 'Water, Caprylic/Capric Triglyceride, Squalane, Cetyl Alcohol, Glyceryl Stearate, Cetearyl Olivate, Diheptyl Succinate, Sorbitan Olivate, Capryloyl Glycerin/Sebacic Acid Copolymer, Glycerin, Methylheptylglycerin, Caffeine, Butylene Glycol, Zerumbone, Persea Gratissima (Avocado) Oil, Caprylhydroxamic Acid, Arginine/Lysine Polypeptide, Caprylyl Glycol, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetyl Hexapeptide-8, Xanthan Gum, Sodium Phytate, Glyceryl Glucoside, Pentylene Glycol, Betaine, Propanediol.';

  const exclusions = [
    {
      category: 'Forever Chemicals (PFAS)',
      excluded: ['PFAS', 'PTFE', 'Perfluorinated compounds', 'Fluorinated surfactants'],
      why: 'These "forever chemicals" accumulate in the body and environment. The delicate eye area is particularly susceptible to absorption.'
    },
    {
      category: 'Microplastics',
      excluded: ['Polyethylene', 'Acrylates', 'Carbomer', 'Nylon-12'],
      why: 'Microplastics can cause irritation and environmental damage. Our natural alternatives are gentler on sensitive eye skin.'
    },
    {
      category: 'PEGs',
      excluded: ['PEG-40', 'PEG-100', 'PEG compounds', 'Polysorbates'],
      why: 'PEGs can increase penetration of harmful ingredients and may be contaminated with carcinogens. Not worth the risk around your eyes.'
    },
    {
      category: 'Silicones',
      excluded: ['Dimethicone', 'Cyclopentasiloxane', 'Cyclohexasiloxane', 'Phenyl Trimethicone'],
      why: 'While not harmful, silicones can prevent beneficial ingredients from penetrating and may cause milia around the eyes.'
    },
    {
      category: 'Synthetic Fragrances',
      excluded: ['Parfum/Fragrance', 'Phthalates', 'Limonene', 'Linalool', 'Essential Oils'],
      why: 'The #1 cause of eye area irritation and allergic reactions. Our formula is completely unscented for maximum tolerance.'
    },
    {
      category: 'Seed Oils',
      excluded: ['Sunflower Oil', 'Safflower Oil', 'Grapeseed Oil', 'Canola Oil'],
      why: 'High in inflammatory omega-6s that can worsen puffiness. We use stable, non-inflammatory alternatives.'
    },
    {
      category: 'Parabens',
      excluded: ['Methylparaben', 'Propylparaben', 'Butylparaben', 'Ethylparaben'],
      why: 'Hormone disruptors that can affect testosterone levels. Particularly concerning for daily use products.'
    },
    {
      category: 'Sulfates',
      excluded: ['SLS', 'SLES', 'ALS'],
      why: 'Harsh detergents that can severely irritate the delicate eye area. No place for these in eye care.'
    },
    {
      category: 'Harsh Preservatives',
      excluded: ['Phenoxyethanol', 'MIT/MCI', 'Formaldehyde-releasers', 'Methylisothiazolinone'],
      why: 'Can cause severe allergic reactions around sensitive eye area. Our gentle preservation system is safer.'
    },
    {
      category: 'Harsh Actives',
      excluded: ['Retinol', 'Glycolic Acid', 'Salicylic Acid', 'L-Ascorbic Acid'],
      why: 'Too aggressive for the delicate eye area. Our peptide approach is gentler yet more effective.'
    },
    {
      category: 'Drying Alcohols',
      excluded: ['Denatured Alcohol', 'SD Alcohol', 'Isopropyl Alcohol'],
      why: 'Can severely dry the already thin eye area skin, worsening fine lines. We use only beneficial fatty alcohols.'
    },
    {
      category: 'Endocrine Disruptors',
      excluded: ['BPA', 'Triclosan', 'Oxybenzone', 'BHA/BHT'],
      why: 'Chemicals that interfere with hormone function. Your testosterone levels are safe with us.'
    }
  ];

  const handleAddToCart = () => {
    alert(`Added to cart: ${selectedOption === 'subscribe' ? 'Subscribe & Save' : 'One-time purchase'}`);
  };

  return (
    <div className="page-container">
      {/* Sticky Add to Cart */}
      <StickyAddToCart
        productName="Caffeine Under Eye Cream"
        price={38.00}
        subscriptionPrice={32.30}
        onAddToCart={handleAddToCart}
      />
      
      <div className="container">
        <div className="product-detail-section">
          <div className="grid grid-2">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <div className="placeholder-image">
                  [HERO PRODUCT SHOT - EYE CREAM JAR]
                  <p>Premium jar with dramatic lighting showing texture</p>
                </div>
              </div>
              <div className="image-carousel">
                <div className="carousel-images">
                  <div className="placeholder-image">
                    [BEFORE/AFTER - EYE BAGS TRANSFORMATION]
                    <p>Dramatic reduction in under-eye bags after 30 minutes</p>
                  </div>
                  <div className="placeholder-image">
                    [LIFESTYLE - LATE NIGHT WORKER]
                    <p>Man at laptop late at night, tired eyes</p>
                  </div>
                  <div className="placeholder-image">
                    [SPLIT SCREEN - TIRED VS REFRESHED]
                    <p>Same person: exhausted vs. after using eye cream</p>
                  </div>
                  <div className="placeholder-image">
                    [APPLICATION GIF]
                    <p>Proper application technique around eye area</p>
                  </div>
                  <div className="placeholder-image">
                    [TIME-LAPSE VIDEO - PUFFINESS REDUCTION]
                    <p>30-minute time-lapse showing bag reduction</p>
                  </div>
                  <div className="placeholder-image">
                    [INFOGRAPHIC - FROM BOARDROOM TO DATE NIGHT]
                    <p>24-hour eye transformation timeline</p>
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
              <h1>Caffeine Under Eye Cream</h1>
              <div className="product-badges">
                <span className="badge badge-eyebags">💼 Erases All-Nighter Evidence</span>
                <span className="badge badge-stolen">🔥 "So Good She Steals It"</span>
              </div>
              <p className="product-size">0.5 FL OZ / 15 ML</p>
              
              <p className="product-description">
                <strong>Your secret weapon against startup stress and screen fatigue.</strong> This targeted treatment eliminates under-eye bags in minutes, erases evidence of all-nighters, and gets you board-room ready fast. Advanced peptides work like "Botox in a jar" to reduce crow's feet by up to 30% in 8 weeks. <em>From exhausted to executive in 5 minutes.</em>
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
                      <p><strong>What's NOT in our products is just as important as what IS.</strong> The delicate eye area demands the highest standards - we eliminate every questionable ingredient:</p>
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
                      <h4>Gentle Yet Powerful</h4>
                      <p>Our peptide-based approach delivers dramatic results without harsh ingredients. Perfect for the sensitive eye area.</p>
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
                      <span className="review-count">89 Reviews</span>
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
                      <span className="option-price">$38.00</span>
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
                        $32.30 <span className="original-price">$38.00</span>
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
                    <p>Complete routine for total transformation</p>
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
                productName="Caffeine Under Eye Cream"
                originalPrice={38.00}
                subscriptionPrice={32.30}
                savings={5.70}
              />
            </div>
          </div>
        </div>

        {/* The Professional's Secret Section */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center">THE PROFESSIONAL'S SECRET WEAPON</h2>
            <div className="professional-content">
              <div className="grid grid-2">
                <div className="professional-story">
                  <h3>From All-Nighter to All-Star</h3>
                  <p className="lead">
                    We get it. Late nights are part of the hustle. Whether you're closing deals, shipping code, or building your empire, those eye bags tell a story you'd rather keep to yourself.
                  </p>
                  <div className="use-cases">
                    <div className="use-case">
                      <strong>The Startup Founder:</strong>
                      <p>"3 hours of sleep, 9am pitch meeting. This eye cream saved my Series A." - Tech CEO</p>
                    </div>
                    <div className="use-case">
                      <strong>The Investment Banker:</strong>
                      <p>"All-nighter on a deal. Client meeting at 7am. Looked fresh as hell." - VP, Goldman</p>
                    </div>
                    <div className="use-case">
                      <strong>The Creative Director:</strong>
                      <p>"Deadline crunch had me looking rough. 5 minutes later, ready for client presentation." - Agency Partner</p>
                    </div>
                  </div>
                </div>
                <div className="professional-visuals">
                  <div className="placeholder-image">
                    [LIFESTYLE - EXECUTIVE AT DESK]
                    <p>Professional applying eye cream before important meeting</p>
                  </div>
                  <div className="placeholder-image">
                    [BEFORE/AFTER - CONFERENCE ROOM]
                    <p>Split image: tired vs. refreshed in business setting</p>
                  </div>
                  <div className="placeholder-image">
                    [VIDEO - MORNING ROUTINE]
                    <p>Quick morning routine for busy professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eye Bag Science Section */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">THE SCIENCE OF EYE BAG ELIMINATION</h2>
            <div className="eyebag-science">
              <div className="grid grid-2">
                <div>
                  <h3>Why Eye Bags Form (And How We Fix Them)</h3>
                  <p>
                    Under-eye bags aren't just about lack of sleep. They're caused by fluid retention, weakened skin structure, and poor circulation - all amplified by stress, screen time, and yes, those all-nighters.
                  </p>
                  <div className="solution-timeline">
                    <h4>Our Multi-Phase Approach:</h4>
                    <div className="phase">
                      <strong>Phase 1 (0-5 minutes):</strong>
                      <p>Caffeine immediately constricts blood vessels, reducing fluid retention and puffiness</p>
                    </div>
                    <div className="phase">
                      <strong>Phase 2 (5-30 minutes):</strong>
                      <p>Improved microcirculation drains excess fluid, visibly reducing bag size</p>
                    </div>
                    <div className="phase">
                      <strong>Phase 3 (Daily use):</strong>
                      <p>Peptides strengthen skin structure, preventing future bag formation</p>
                    </div>
                    <div className="phase">
                      <strong>Phase 4 (4-8 weeks):</strong>
                      <p>Collagen production increases, permanently improving eye area appearance</p>
                    </div>
                  </div>
                </div>
                <div className="eyebag-visuals">
                  <div className="placeholder-image">
                    [INFOGRAPHIC - EYE BAG FORMATION]
                    <p>Scientific diagram showing how bags form</p>
                  </div>
                  <div className="placeholder-image">
                    [TIME-LAPSE GIF - BAG REDUCTION]
                    <p>Real-time reduction over 30 minutes</p>
                  </div>
                  <div className="placeholder-image">
                    [CLINICAL STUDY RESULTS]
                    <p>Graph showing 70% reduction in puffiness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="section section-light">
          <div className="container text-center">
            <div className="urgency-banner">
              <h3>🔥 LIMITED TIME: Save 15% with Subscribe & Save</h3>
              <p>Join 10,000+ professionals who never look tired (even when they are)</p>
              <button className="btn btn-primary btn-large">SUBSCRIBE & SAVE - $32.30</button>
            </div>
          </div>
        </section>

        {/* How to Use Section with Professional Focus */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">HOW TO USE FOR MAXIMUM RESULTS</h2>
            <div className="usage-professional">
              <div className="usage-video">
                <div className="placeholder-image">
                  [VIDEO - QUICK APPLICATION FOR BUSY MORNINGS]
                  <p>30-second application technique for professionals</p>
                </div>
              </div>
              <div className="usage-steps">
                <div className="usage-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3>MORNING EMERGENCY PROTOCOL</h3>
                    <p>Rough night? Apply immediately upon waking. The caffeine works fastest on morning puffiness.</p>
                    <div className="placeholder-image">
                      [GIF - WAKE UP APPLICATION]
                      <p>Quick application right after waking</p>
                    </div>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3>GENTLE TAPPING TECHNIQUE</h3>
                    <p>Use ring finger to gently tap (never rub) around orbital bone. This stimulates drainage.</p>
                    <div className="placeholder-image">
                      [GIF - TAPPING TECHNIQUE]
                      <p>Proper tapping motion demonstration</p>
                    </div>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3>5-MINUTE TRANSFORMATION</h3>
                    <p>Let it work while you shower/shave. By the time you're dressed, bags are gone.</p>
                    <div className="placeholder-image">
                      [BEFORE/AFTER - 5 MINUTES]
                      <p>Dramatic change in just 5 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Peptide Technology */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">ADVANCED PEPTIDE TECHNOLOGY</h2>
            <div className="peptide-science">
              <div className="grid grid-2">
                <div>
                  <h3>Like Botox, But Better</h3>
                  <p>
                    Our dual-peptide system (SYN-AKE + Argireline) works like injectable treatments but without needles, downtime, or that "frozen" look. These neuromodulating peptides naturally relax the muscles that cause crow's feet and expression lines.
                  </p>
                  <div className="peptide-comparison">
                    <h4>Peptides vs. Injectables:</h4>
                    <div className="comparison-point">
                      <strong>Safety:</strong> No needles, no toxins, no side effects
                    </div>
                    <div className="comparison-point">
                      <strong>Natural Results:</strong> Gradual improvement, maintains natural expressions
                    </div>
                    <div className="comparison-point">
                      <strong>Cost:</strong> Fraction of the price of regular injections
                    </div>
                    <div className="comparison-point">
                      <strong>Convenience:</strong> Apply at home in seconds
                    </div>
                    <div className="comparison-point">
                      <strong>Long-term:</strong> Actually improves skin health over time
                    </div>
                  </div>
                </div>
                <div className="peptide-visuals">
                  <div className="placeholder-image">
                    [INFOGRAPHIC - PEPTIDE MECHANISM]
                    <p>How peptides work vs. Botox comparison</p>
                  </div>
                  <div className="placeholder-image">
                    [BEFORE/AFTER - CROW'S FEET]
                    <p>8-week transformation showing 30% reduction</p>
                  </div>
                  <div className="placeholder-image">
                    [CLINICAL DATA VISUALIZATION]
                    <p>Study results showing peptide efficacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stolen From Boyfriend Angle */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center">"MY GIRLFRIEND DISCOVERED MY SECRET"</h2>
            <div className="stolen-eye-cream">
              <div className="grid grid-2">
                <div className="stolen-stories">
                  <p className="lead">
                    It's not just the moisturizer she's stealing anymore. Women are discovering that our eye cream works better than their $300 luxury brands.
                  </p>
                  <div className="testimonial">
                    <p>"She noticed my eyes looked less tired and asked what I was using. Now we fight over the jar every morning." - Daniel K.</p>
                  </div>
                  <div className="testimonial">
                    <p>"My wife threw out her La Prairie eye cream after trying mine. Says the results are better and faster." - Robert M.</p>
                  </div>
                  <div className="testimonial">
                    <p>"Started hiding it in my gym bag. She still found it. Ordering two from now on." - Chris T.</p>
                  </div>
                </div>
                <div className="stolen-visuals">
                  <div className="placeholder-image">
                    [LIFESTYLE - COUPLE SHARING BATHROOM]
                    <p>Couple both reaching for the eye cream</p>
                  </div>
                  <div className="placeholder-image">
                    [PRODUCT IN FEMALE HANDS]
                    <p>Woman applying Rawdog eye cream</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Customer Reviews - Moved Above Main Reviews */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">FEATURED REVIEWS</h2>
            <div className="featured-badge text-center mb-3">
              <span className="badge badge-highlight">💼 #1 RATED EYE CREAM FOR PROFESSIONALS</span>
            </div>
            <div className="customer-reviews">
              <div className="review-card featured">
                <div className="review-rating">★★★★★</div>
                <h4>"Saved My Career Presentation"</h4>
                <p>"Pulled an all-nighter preparing for a board presentation. Applied this at 6am, looked fresh and alert by 8am meeting. The board never knew I hadn't slept. This stuff is magic for us workaholics."</p>
                <div className="reviewer">- Michael S., Investment Banker</div>
                <div className="review-highlight">Instant results • Professional lifesaver</div>
              </div>
              
              <div className="review-card featured">
                <div className="review-rating">★★★★★</div>
                <h4>"Better Than My Injections"</h4>
                <p>"Was getting Botox every 3 months for crow's feet. Decided to try this first. After 2 months, my crow's feet are barely visible and the eye bags I've had since my 30s are gone. Saved me thousands."</p>
                <div className="reviewer">- James P., CEO</div>
                <div className="review-highlight">Rivals injectables • Dramatic anti-aging</div>
              </div>
              
              <div className="review-card featured">
                <div className="review-rating">★★★★★</div>
                <h4>"My Secret Weapon for Video Calls"</h4>
                <p>"Remote work had me on camera all day looking exhausted. This eye cream is my secret weapon. Apply 5 minutes before calls and I look like I got 8 hours of sleep (even on 4). Game changer."</p>
                <div className="reviewer">- David L., Tech Executive</div>
                <div className="review-highlight">Zoom-ready • Instant transformation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews System */}
        <div id="reviews-section">
          <ReviewsSystem 
            productId="eyecream"
            productName="Caffeine Under Eye Cream"
            averageRating={4.7}
            totalReviews={89}
          />
        </div>

        {/* Supporting Ingredients Deep Dive */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">SUPPORTING INGREDIENTS DEEP DIVE</h2>
            <div className="supporting-ingredients">
              <div className="ingredient-grid">
                <div className="ingredient-card">
                  <h3>Zerumbone: The Stress Fighter</h3>
                  <p><strong>Why it matters:</strong> This rare compound from wild ginger specifically targets inflammation caused by stress and lack of sleep. It's 5x more potent than Vitamin E at neutralizing the free radicals generated by blue light exposure.</p>
                  <div className="placeholder-image">
                    [INFOGRAPHIC - ZERUMBONE VS VITAMIN E]
                    <p>Antioxidant potency comparison</p>
                  </div>
                </div>
                
                <div className="ingredient-card">
                  <h3>Glyceryl Glucoside: The Protector</h3>
                  <p><strong>Why it matters:</strong> This natural osmoprotectant helps cells maintain water balance even under stress conditions (like dehydration from alcohol or caffeine). Perfect for maintaining eye area hydration during long work sessions.</p>
                  <div className="placeholder-image">
                    [DIAGRAM - CELLULAR HYDRATION]
                    <p>How osmoprotection works</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="section section-light">
          <div className="container text-center">
            <h2>TRUSTED BY 10,000+ HIGH PERFORMERS</h2>
            <div className="social-proof-visual">
              <div className="placeholder-image">
                [INFOGRAPHIC - USER DEMOGRAPHICS]
                <p>CEOs, founders, bankers, consultants who trust Rawdog</p>
              </div>
            </div>
            <div className="social-proof-stats">
              <div className="stat">
                <h3>4.7★</h3>
                <p>Average Rating</p>
              </div>
              <div className="stat">
                <h3>5 MIN</h3>
                <p>To Visible Results</p>
              </div>
              <div className="stat">
                <h3>30%</h3>
                <p>Wrinkle Reduction</p>
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
                    [CLEANSER PRODUCT SHOT]
                    <p>Hydrating Facial Cleanser</p>
                  </div>
                  <div className="placeholder-image">
                    [CLEANSER SHAVING DEMO]
                    <p>Dual-use as shave cream</p>
                  </div>
                </div>
                <h3>Hydrating Facial Cleanser</h3>
                <p className="product-tagline">Non-stripping • Shave-friendly</p>
                <p className="product-price">$32.00</p>
                <button className="btn btn-outline">VIEW PRODUCT</button>
              </div>
              
              <div className="related-product">
                <div className="product-image">
                  <div className="placeholder-image">
                    [MOISTURIZER PRODUCT SHOT]
                    <p>Face Moisturizer with Beef Tallow</p>
                  </div>
                  <div className="placeholder-image">
                    [MOISTURIZER TEXTURE]
                    <p>Luxurious texture shot</p>
                  </div>
                </div>
                <h3>Face Moisturizer with Beef Tallow</h3>
                <p className="product-tagline">Anti-aging • "Girlfriend-approved"</p>
                <p className="product-price">$48.00</p>
                <button className="btn btn-outline">VIEW PRODUCT</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductEyeCream;