import React, { useState } from 'react';
import ReviewsSystem from '../components/ReviewsSystem';

import StickyAddToCart from '../components/StickyAddToCart';
import ScrollCTAs from '../components/ScrollCTAs';
import './Product.css';

const ProductEyeCream: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'onetime' | 'subscribe'>('subscribe');
  const [showBenefits, setShowBenefits] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showExclusions, setShowExclusions] = useState(false);

  const benefits = [
    'Helps to eliminate under eye bags, dark circles, and crows feet',
    'Immediate caffeine tightening',
    'Lightweight, non-greasy formula',
    'Delivers both instant and lasting results'
  ];

  const keyIngredients = [
    {
      name: 'Caffeine',
      description: 'Your secret weapon against all-nighters. This clinically-proven vasoconstrictor immediately tightens blood vessels to eliminate fluid retention and puffiness. Perfect for those early morning meetings after late night work sessions. Caffeine also provides powerful antioxidant protection against screen-induced oxidative stress.'
    },
    {
      name: 'SYN-AKE (Dipeptide Diaminobutyroyl Benzylamide Diacetate)',
      description: 'A revolutionary biomimetic peptide inspired by temple viper venom. This advanced ingredient works by relaxing the tiny muscles around your eyes that cause wrinkles when you squint or smile. Think of it as a gentler, topical alternative to injections that helps smooth out crow\'s feet over time.'
    },
    {
      name: 'Argireline (Acetyl Hexapeptide-8)',
      description: 'Often called "Botox in a jar," this peptide helps relax facial muscles to reduce the appearance of expression lines. It works by limiting how intensely your muscles contract when you make facial expressions, which helps prevent new wrinkles from forming and softens existing ones.'
    },
    {
      name: 'Zerumbone',
      description: 'A rare compound from wild ginger that helps brighten dark under-eye circles. This powerful antioxidant targets the inflammation and damage caused by stress, lack of sleep, and screen time - the main culprits behind those stubborn dark circles that make you look tired even when you\'re not.'
    },

    {
      name: 'Hydration & Barrier Complex',
      description: 'A blend of moisturizing ingredients that keeps the delicate eye area hydrated without feeling heavy or greasy. This complex helps strengthen your skin\'s natural protective barrier - think of it as a shield that keeps moisture in and irritants out, which is especially important for the thin skin around your eyes.'
    }
  ];

  const fullIngredientList = 'Water, Caprylic/Capric Triglyceride, Squalane, Cetyl Alcohol, Glyceryl Stearate, Cetearyl Olivate, Diheptyl Succinate, Sorbitan Olivate, Capryloyl Glycerin/Sebacic Acid Copolymer, Glycerin, Methylheptylglycerin, Caffeine, Butylene Glycol, Zerumbone, Persea Gratissima (Avocado) Oil, Caprylhydroxamic Acid, Arginine/Lysine Polypeptide, Caprylyl Glycol, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetyl Hexapeptide-8, Xanthan Gum, Sodium Phytate, Glyceryl Glucoside, Pentylene Glycol, Betaine, Propanediol.';

  const exclusions = [
    {
      category: 'No Added Forever Chemicals (PFAS)',
      excluded: ['PFAS', 'PTFE', 'Perfluorinated compounds', 'Fluorinated surfactants'],
      why: 'These "forever chemicals" accumulate in your body and never break down. Most brands ignore this - we don\'t.'
    },
    {
      category: 'No Added Microplastics',
      excluded: ['Polyethylene', 'Acrylates', 'Carbomer', 'Microbeads'],
      why: 'We never add microplastics to our formulas. Instead, we use biodegradable alternatives that are safer for skin and better for the planet.'
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
      excluded: ['Sunflower (Helianthus Annuus)', 'Safflower (Carthamus Tinctorius)', 'Soybean (Glycine Soja)', 'Grapeseed (Vitis Vinifera)', 'Canola (Brassica Napus)'],
      why: 'Men\'s brands rely on these cheap, over-processed oils because they\'re easy to source, not because they\'re best for skin. We cut them entirely—no unstable fillers, no shortcuts.'
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
                <span className="badge badge-eyebags">💼 Fights Bags & Dark Circles</span>
                <span className="badge badge-stolen">⚡ Instant Wake Up Effect</span>
              </div>
              <p className="product-size">0.50 FL OZ / 15 ML</p>
              
              <p className="product-description">
                Your secret weapon against work stress and screen fatigue. This targeted treatment helps to eliminate under eye bags and dark circles, without leaving a film like other creams. Advanced peptides work like "Botox in a jar" to reduce crow's feet. From exhausted to executive in 5 minutes.
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
                      <span className="option-price">$38.00</span>
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


            </div>
          </div>
        </div>



        {/* Eye Bag Science Section */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">THE SCIENCE OF EYE BAG ELIMINATION</h2>
            <div className="eyebag-science">
              <div className="grid grid-2">
                <div>
                  <h3>Why Eye Bags Form (And How We Fix Them)</h3>
                  <p>
                    Under eye bags aren't just about lack of sleep. They're caused by fluid retention, weakened skin structure, and poor circulation - all amplified by stress, screen time, and lack of sleep.
                  </p>
                  <div className="solution-timeline">
                    <h4>Immediate Effects, Long-Lasting Results</h4>
                    <div className="phase">
                      <strong>Day-of Benefits:</strong>
                      <p>Caffeine tightens blood vessels for an instantly refreshed look</p>
                      <p>Improved circulation reduces swelling and smooths under the eyes</p>
                    </div>
                    <div className="phase">
                      <strong>Ongoing Benefits:</strong>
                      <p>Peptides strengthen skin to help stop bags from coming back</p>
                      <p>Consistent use boosts collagen, firming and brightening the under eye area over time</p>
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





        {/* How to Use Section with Professional Focus */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4 how-to-use-title">HOW TO USE</h2>
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
                    <h3 className="usage-step-title">Wash Face</h3>
                    <p>Start with clean skin for optimal absorption. Use our Hydrating Facial Cleanser for best results.</p>
                    <div className="placeholder-image">
                      [GIF - FACE WASHING]
                      <p>Clean skin preparation</p>
                    </div>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3 className="usage-step-title">Apply Minimal Amount</h3>
                    <p>With our concentrated formula, a little goes a long way. Gently tap under the eyes and around crow's feet.</p>
                    <div className="placeholder-image">
                      [GIF - TAPPING TECHNIQUE]
                      <p>Proper application technique</p>
                    </div>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3 className="usage-step-title">Wake Up Your Eyes</h3>
                    <p>Let the formula work instantly, and look more alert in minutes.</p>
                    <div className="placeholder-image">
                      [BEFORE/AFTER - INSTANT RESULTS]
                      <p>Immediate transformation</p>
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
                      <strong>Safety:</strong> No needles, no toxins
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
                      <strong>Long-term:</strong> Actually helps to improve skin health over time
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

        {/* CTA Before Reviews */}
        <ScrollCTAs
          productName="Caffeine Under Eye Cream"
          price={38.00}
          subscriptionPrice={32.30}
          position="after-benefits"
        />

        {/* Reviews System */}
        <div id="reviews-section">
          <ReviewsSystem 
            productId="eyecream"
            productName="Caffeine Under Eye Cream"
            averageRating={4.7}
            totalReviews={89}
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