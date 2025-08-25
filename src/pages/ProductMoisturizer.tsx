import React, { useState } from 'react';
import ReviewsSystem from '../components/ReviewsSystem';

import StickyAddToCart from '../components/StickyAddToCart';
import ScrollCTAs from '../components/ScrollCTAs';
import './Product.css';

const ProductMoisturizer: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'onetime' | 'subscribe'>('subscribe');
  const [showBenefits, setShowBenefits] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showExclusions, setShowExclusions] = useState(false);

  const benefits = [
    'Reduces appearance of fine lines by up to 40% in 4 weeks',
    'Boosts natural collagen production for firmer skin',
    'Reverses signs of premature aging and sun damage',
    'Biomimetic tallow technology mimics natural skin lipids',
    'Lightweight, fast-absorbing formula perfect for daily use',
    'Strengthens skin\'s protective barrier against environmental damage',
    'Rich in vitamins A, D, E, and K for deep nourishment',
    'Regulates oil production with clinical-grade Niacinamide',
    'Zero toxins - clean, effective skincare for men'
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
      category: 'Forever Chemicals (PFAS)',
      excluded: ['PFAS', 'PTFE', 'Perfluorinated compounds', 'Fluorinated surfactants'],
      why: 'These "forever chemicals" accumulate in the body and environment, never breaking down. While many brands ignore this emerging concern, we take a proactive stance on long-term health.'
    },
    {
      category: 'Microplastics',
      excluded: ['Polyethylene', 'Acrylates', 'Carbomer', 'Nylon-12'],
      why: 'Microplastics contribute to environmental pollution and may accumulate in the body. Our formulas use natural alternatives that are fully biodegradable.'
    },
    {
      category: 'PEGs (Polyethylene Glycols)',
      excluded: ['PEG-40', 'PEG-100', 'PEG compounds', 'Polysorbates'],
      why: 'PEGs can be contaminated with carcinogenic compounds and compromise the skin barrier. Our plant-derived emulsifiers provide superior safety and performance.'
    },
    {
      category: 'Silicones',
      excluded: ['Dimethicone', 'Cyclopentasiloxane', 'Cyclohexasiloxane', 'Phenyl Trimethicone'],
      why: 'While generally considered safe, silicones can create a barrier that prevents other beneficial ingredients from penetrating. Our advanced emulsifier system provides the same smooth feel with better ingredient compatibility.'
    },
    {
      category: 'Synthetic Fragrances',
      excluded: ['Parfum/Fragrance', 'Phthalates', 'Limonene', 'Linalool', 'Citronellol'],
      why: 'The #1 cause of cosmetic allergic reactions. Synthetic fragrances can contain hundreds of undisclosed chemicals, including hormone disruptors.'
    },
    {
      category: 'Seed Oils',
      excluded: ['Sunflower Oil', 'Safflower Oil', 'Grapeseed Oil', 'Canola Oil', 'Soybean Oil', 'Corn Oil', 'Cottonseed Oil', 'Evening Primrose Oil', 'Pumpkin Seed Oil', 'Hemp Seed Oil'],
      why: 'Cheap, mass-produced commodity ingredients that are solvent-extracted, deodorized, and heat-processed—degrading antioxidants and leaving trace impurities. These unstable oils oxidize easily, generating free radicals that stress your skin. We build formulas on proven, stable ingredients, not cost-cutting fillers.'
    },
    {
      category: 'Parabens',
      excluded: ['Methylparaben', 'Propylparaben', 'Butylparaben', 'Ethylparaben'],
      why: 'These preservatives mimic estrogen and can disrupt male hormonal balance. Studies link them to reduced testosterone and fertility issues in men.'
    },
    {
      category: 'Sulfates',
      excluded: ['SLS (Sodium Lauryl Sulfate)', 'SLES (Sodium Laureth Sulfate)', 'ALS'],
      why: 'Harsh detergents that strip the skin\'s natural protective barrier. Not needed in a moisturizer but often used as cheap emulsifiers.'
    },
    {
      category: 'Harsh Preservatives',
      excluded: ['Phenoxyethanol', 'MIT/MCI', 'Formaldehyde-releasers', 'DMDM Hydantoin'],
      why: 'These can cause allergic reactions and skin sensitization. Our modern preservation system is gentler and just as effective.'
    },
    {
      category: 'Fillers',
      excluded: ['Talc', 'Kaolin', 'Bismuth Oxychloride', 'Mica'],
      why: 'Cheap bulking agents that provide no skin benefit. Every ingredient in our formula has a purpose - no fillers, ever.'
    },
    {
      category: 'Dyes',
      excluded: ['FD&C Colors', 'Synthetic Colorants', 'Coal Tar Dyes', 'Lake Dyes'],
      why: 'Artificial colors serve no skincare purpose and can cause irritation. Our natural color comes from the ingredients themselves.'
    },
    {
      category: 'Endocrine Disruptors',
      excluded: ['BPA', 'Triclosan', 'Oxybenzone', 'BHA/BHT', 'Resorcinol'],
      why: 'These chemicals interfere with hormone function, particularly concerning for men\'s testosterone levels. We prioritize your long-term hormonal health.'
    }
  ];

  const handleAddToCart = () => {
    alert(`Added to cart: ${selectedOption === 'subscribe' ? 'Subscribe & Save' : 'One-time purchase'}`);
  };

  return (
    <div className="page-container">
      {/* Sticky Add to Cart */}
      <StickyAddToCart
        productName="Face Moisturizer with Beef Tallow"
        price={48.00}
        subscriptionPrice={40.80}
        onAddToCart={handleAddToCart}
      />
      
      <div className="container">
        <div className="product-detail-section">
          <div className="grid grid-2">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <div className="placeholder-image">
                  [HERO PRODUCT SHOT - TALLOW MOISTURIZER]
                  <p>Premium bottle shot with dramatic lighting showing texture</p>
                </div>
              </div>
              <div className="image-carousel">
                <div className="carousel-images">
                  <div className="placeholder-image">
                    [TEXTURE SHOT - CREAM SWIRL]
                    <p>Close-up of luxurious cream texture</p>
                  </div>
                  <div className="placeholder-image">
                    [360° VIEW - ROTATING BOTTLE]
                    <p>Interactive 360-degree product view</p>
                  </div>
                  <div className="placeholder-image">
                    [SIZE COMPARISON - IN HAND]
                    <p>Product held in masculine hand for scale</p>
                  </div>
                  <div className="placeholder-image">
                    [LIFESTYLE - BATHROOM COUNTER]
                    <p>Product in upscale bathroom setting</p>
                  </div>
                  <div className="placeholder-image">
                    [BEFORE/AFTER - SKIN TEXTURE]
                    <p>Split image showing skin improvement after 4 weeks</p>
                  </div>
                </div>
                <div className="carousel-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="product-info">
              <h1>Face Moisturizer with Beef Tallow</h1>
              <div className="product-badges">
                <span className="badge badge-stolen">🔥 "Skincare So Good I Stole It From My Boyfriend"</span>
                <span className="badge badge-antiaging">⚡ Anti-Aging Powerhouse</span>
              </div>
              <p className="product-size">1.7 FL OZ / 50 ML</p>
              
              <p className="product-description">
                <strong>The moisturizer she'll want to steal.</strong> This revolutionary formula combines ancestral wisdom with cutting-edge science. Biomimetic beef tallow delivers unmatched anti-aging benefits while Ceramide NP and Niacinamide visibly reduce fine lines, boost collagen production, and reverse signs of premature aging. <em>Clinically proven to reduce appearance of wrinkles by up to 40% in just 4 weeks.</em>
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
                      <p><strong>What's NOT in our products is just as important as what IS.</strong> We've eliminated every questionable ingredient that could compromise your skin health, hormonal balance, or long-term wellness:</p>
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
                      <h4>The Rawdog Standard</h4>
                      <p>We're the ONLY men's skincare brand that eliminates ALL of these harmful ingredients. No compromises, no exceptions, no BS.</p>
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
                      <span className="review-count">112 Reviews</span>
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
                      <span className="option-price">$48.00</span>
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
                    <p>Three product bundle - The Complete Routine</p>
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

        {/* CTA After Benefits/Ingredients */}
        <ScrollCTAs
          productName="Face Moisturizer with Beef Tallow"
          price={48.00}
          subscriptionPrice={40.80}
          position="after-ingredients"
        />



        {/* Anti-Aging Science Section */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">PROVEN ANTI-AGING RESULTS</h2>
            <div className="anti-aging-content">
              <div className="grid grid-2">
                <div>
                  <h3>Turn Back The Clock</h3>
                  <p>
                    Our biomimetic formula doesn't just moisturize - it actively reverses signs of aging at the cellular level. The combination of beef tallow's natural retinol content, ceramides for barrier repair, and niacinamide for collagen boosting creates a powerful anti-aging complex.
                  </p>
                  <div className="results-timeline">
                    <h4>Visible Results Timeline:</h4>
                    <ul>
                      <li><strong>Week 1:</strong> Skin feels more hydrated, looks brighter</li>
                      <li><strong>Week 2:</strong> Fine lines begin to soften, texture improves</li>
                      <li><strong>Week 4:</strong> Up to 40% reduction in wrinkle appearance</li>
                      <li><strong>Week 8:</strong> Dramatic improvement in skin firmness and elasticity</li>
                      <li><strong>Week 12:</strong> Complete skin transformation - look 5 years younger</li>
                    </ul>
                  </div>
                </div>
                <div className="anti-aging-visuals">
                  <div className="placeholder-image">
                    [BEFORE/AFTER GALLERY - 4 WEEK TRANSFORMATION]
                    <p>Dramatic before/after showing wrinkle reduction</p>
                  </div>
                  <div className="placeholder-image">
                    [CLINICAL STUDY INFOGRAPHIC]
                    <p>40% wrinkle reduction visualization</p>
                  </div>
                  <div className="placeholder-image">
                    [TIME-LAPSE GIF - ABSORPTION]
                    <p>Product absorbing and skin transforming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section with Media */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">HOW TO USE</h2>
            <div className="usage-content">
              <div className="usage-video">
                <div className="placeholder-image">
                  [VIDEO - 30 SECOND APPLICATION TUTORIAL]
                  <p>Quick video showing proper application technique</p>
                </div>
              </div>
              <div className="usage-steps">
                <div className="usage-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3>CLEANSE FIRST</h3>
                    <p>Start with clean, slightly damp skin for optimal absorption. Use our Hydrating Facial Cleanser for best results.</p>
                    <div className="placeholder-image">
                      [GIF - CLEANSING MOTION]
                      <p>Animation showing cleansing technique</p>
                    </div>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3>APPLY SPARINGLY</h3>
                    <p>A little goes a long way. Use a dime-sized amount for your entire face and neck.</p>
                    <div className="placeholder-image">
                      [IMAGE - AMOUNT DEMONSTRATION]
                      <p>Showing correct amount on fingertip</p>
                    </div>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3>MASSAGE UPWARD</h3>
                    <p>Apply in upward strokes to fight gravity and promote circulation. Focus on areas with fine lines.</p>
                    <div className="placeholder-image">
                      [GIF - APPLICATION TECHNIQUE]
                      <p>Animation showing upward massage motions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tallow Science Deep Dive with Visuals */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">WHY BEEF TALLOW?</h2>
            <div className="tallow-science">
              <div className="grid grid-2">
                <div>
                  <h3>The Perfect Match for Human Skin</h3>
                  <p>
                    Beef tallow isn't just another trendy ingredient - it's a biomimetic powerhouse that your skin recognizes as its own. The fatty acid profile of grass-fed tallow is nearly identical to human sebum, containing the perfect ratio of saturated and unsaturated fats.
                  </p>
                  <div className="tallow-benefits">
                    <h4>Tallow vs. Processed Seed Oils:</h4>
                    <ul>
                      <li><strong>Stability:</strong> Won't oxidize or generate free radicals like mass-produced seed oils</li>
                      <li><strong>Absorption:</strong> Penetrates 3x deeper than commodity plant-based moisturizers</li>
                      <li><strong>Vitamins:</strong> Naturally rich in A, D, E, K - no synthetic additions needed</li>
                      <li><strong>Compatibility:</strong> Zero comedogenic rating despite being an animal fat</li>
                      <li><strong>Anti-aging:</strong> Contains natural retinol (Vitamin A) for collagen production</li>
                      <li><strong>Purity:</strong> No solvent extraction, deodorization, or heat processing that degrades antioxidants</li>
                    </ul>
                  </div>
                </div>
                <div className="tallow-visuals">
                  <div className="placeholder-image">
                    [INFOGRAPHIC - TALLOW VS HUMAN SEBUM]
                    <p>Scientific comparison showing identical fatty acid profiles</p>
                  </div>
                  <div className="placeholder-image">
                    [VIDEO - WHY TALLOW EDUCATIONAL CONTENT]
                    <p>2-minute educational video on tallow benefits</p>
                  </div>
                  <div className="placeholder-image">
                    [COMPARISON CHART - TALLOW VS SYNTHETICS]
                    <p>Visual comparison of tallow vs petroleum-based moisturizers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA After Science Section */}
        <ScrollCTAs
          productName="Face Moisturizer with Beef Tallow"
          price={48.00}
          subscriptionPrice={40.80}
          position="after-science"
        />

        {/* Featured Customer Reviews - Moved here from below */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">FEATURED REVIEWS</h2>
            <div className="featured-badge text-center mb-3">
              <span className="badge badge-highlight">🏆 #1 RATED ANTI-AGING MOISTURIZER FOR MEN</span>
            </div>
            <div className="customer-reviews">
              <div className="review-card featured">
                <div className="review-rating">★★★★★</div>
                <h4>"My Girlfriend Keeps Stealing This!"</h4>
                <p>"Started using this 2 months ago and the results are insane. Fine lines around my eyes have practically disappeared. My girlfriend loved how my skin looked so much she started using it too. Now I have to hide it from her!"</p>
                <div className="reviewer">- James D., Verified Buyer</div>
                <div className="review-highlight">Visible anti-aging results • Girlfriend approved</div>
              </div>
              
              <div className="review-card featured">
                <div className="review-rating">★★★★★</div>
                <h4>"Erased 5 Years From My Face"</h4>
                <p>"I'm 38 and was starting to look tired all the time. After 4 weeks with this moisturizer, multiple people have asked what I'm doing differently. The deep lines on my forehead have softened dramatically. This is the real deal for anti-aging."</p>
                <div className="reviewer">- Marcus T., Verified Buyer</div>
                <div className="review-highlight">Dramatic wrinkle reduction • Visible in 4 weeks</div>
              </div>
              
              <div className="review-card featured">
                <div className="review-rating">★★★★★</div>
                <h4>"Better Than My $200 Moisturizer"</h4>
                <p>"I've used La Mer, SK-II, you name it. This beats them all. The tallow is a game-changer - my skin has never been this smooth and firm. Plus no toxic ingredients. Worth every penny and then some."</p>
                <div className="reviewer">- David L., Verified Buyer</div>
                <div className="review-highlight">Outperforms luxury brands • Clean ingredients</div>
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
            totalReviews={112}
          />
        </div>

        {/* Ingredient Deep Dive with Visuals */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">INGREDIENT DEEP DIVE</h2>
            <div className="ingredient-deep-dive">
              <div className="ingredient-spotlight">
                <h3>Natural Moisturizing Factor (NMF) Complex</h3>
                <div className="grid grid-2">
                  <div>
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
                        <p>These water-binding molecules draw moisture from the environment and deeper skin layers to the surface.</p>
                      </div>
                    </div>
                  </div>
                  <div className="nmf-visuals">
                    <div className="placeholder-image">
                      [INFOGRAPHIC - NMF COMPLEX BREAKDOWN]
                      <p>Visual showing how NMF components work together</p>
                    </div>
                    <div className="placeholder-image">
                      [MICROSCOPE IMAGE - SKIN HYDRATION]
                      <p>Before/after microscopic view of hydrated skin cells</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof with Visual Stats */}
        <section className="section section-dark">
          <div className="container text-center">
            <h2>JOIN 10,000+ MEN WHO CHOSE RAWDOG</h2>
            <div className="social-proof-visual">
              <div className="placeholder-image">
                [INFOGRAPHIC - CUSTOMER STATS]
                <p>Visual representation of customer satisfaction metrics</p>
              </div>
            </div>
            <div className="social-proof-stats">
              <div className="stat">
                <h3>4.8★</h3>
                <p>Average Rating</p>
              </div>
              <div className="stat">
                <h3>10,000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>40%</h3>
                <p>Wrinkle Reduction</p>
              </div>
              <div className="stat">
                <h3>60-Day</h3>
                <p>Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products with Enhanced Visuals */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">COMPLETE YOUR ROUTINE</h2>
            <div className="related-products">
              <div className="related-product">
                <div className="product-image">
                  <div className="placeholder-image">
                    [CLEANSER PRODUCT SHOT]
                    <p>Hydrating Facial Cleanser bottle</p>
                  </div>
                  <div className="placeholder-image">
                    [CLEANSER IN USE GIF]
                    <p>GIF showing cleanser lathering</p>
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
                    [EYE CREAM PRODUCT SHOT]
                    <p>Caffeine Under Eye Cream jar</p>
                  </div>
                  <div className="placeholder-image">
                    [EYE CREAM BEFORE/AFTER]
                    <p>Before/after eye bag reduction</p>
                  </div>
                </div>
                <h3>Caffeine Under Eye Cream</h3>
                <p className="product-tagline">Eliminates eye bags • Anti-aging</p>
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