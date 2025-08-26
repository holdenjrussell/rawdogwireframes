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
    'Helps to reduce appearance of fine lines and wrinkles',
    'Boosts natural collagen production for firmer skin',
    'Reverses signs of premature aging and sun damage',
    'Biomimetic tallow technology mimics natural skin lipids',
    'Lightweight, fast-absorbing formula perfect for daily use',
    'Strengthens skin\'s protective barrier against environmental damage',
    'Rich in vitamins A, D, E, and K for deep nourishment',
    'Regulates oil production with clinical-grade Niacinamide',
    'No added toxins - clean, effective skincare for men'
  ];

  const keyIngredients = [
    {
      name: 'Beef Tallow',
      description: 'Think of this as nature\'s perfect match for your skin. Tallow is like a VIP pass that your skin immediately recognizes and welcomes in. It\'s packed with the same fats your skin naturally produces, plus vitamins that fight aging. Unlike cheap oils that sit on top of your skin, this absorbs deep and gets to work.'
    },
    {
      name: 'Ceramide NP',
      description: 'Your skin\'s protective shield needs ceramides like a wall needs bricks. When your skin gets damaged (from sun, shaving, or harsh products), ceramides fill in the cracks and rebuild that protection. This keeps moisture in and irritants out, so your skin stays strong and comfortable.'
    },
    {
      name: 'Niacinamide (Vitamin B3)',
      description: 'The multitasker that controls shine without drying you out. If your forehead gets oily by noon but your cheeks feel dry, this ingredient helps balance everything out. It also calms redness, shrinks the look of pores, and helps your skin build its own protective layer. Plus, it\'s proven to reduce signs of aging.'
    },
    {
      name: 'Natural Moisturizing Factor (NMF) Complex',
      description: 'Your skin naturally holds water using special molecules called NMF. As you age or damage your skin, you lose these molecules and get dry. We\'ve recreated the exact same molecules your skin uses, so this moisturizer doesn\'t just sit on top - it actually restores your skin\'s ability to stay hydrated all day.'
    },
    {
      name: 'Squalane',
      description: 'The lightweight moisture that sinks in fast. While heavy creams leave you looking greasy, squalane absorbs instantly and leaves your skin soft without shine. It fights aging by protecting against damage, and helps all the other ingredients penetrate deeper where they can actually work.'
    },
    {
      name: 'Advanced Emulsifier System',
      description: 'Most moisturizers use silicones to feel smooth, but silicones just coat your skin like plastic wrap - they don\'t actually moisturize. Our plant-based system gives you that same smooth, non-greasy feel while actually letting your skin breathe and absorb nutrients. It\'s the difference between real results and fake smoothness.'
    }
  ];

  const fullIngredientList = 'Water, Caprylic/Capric Triglyceride, Cetearyl Olivate, Glycerin, Sorbitan Olivate, Squalane, Methylheptylglycerin, Persea Gratissima (Avocado) Oil, Tallow, Ceramide NP, Diheptyl Succinate, Sodium PCA, Betaine, Sodium Lactate, PCA, Fructose, Serine, Glycine, Alanine, Niacinamide, Glutamic Acid, Urea, Lysine HCL, Inositol, Threonine, Caprylhydroxamic Acid, Capryloyl Glycerin/Sebacic Acid Copolymer, Caprylyl Glycol, Arginine, Proline, Xanthan Gum, Sodium Phytate.';

  const exclusions = [
    {
      category: 'No Added Forever Chemicals (PFAS)',
      excluded: ['PFAS', 'PTFE', 'Perfluorinated compounds', 'Fluorinated surfactants'],
      why: 'These "forever chemicals" accumulate in your body and never break down. Most brands ignore this - we don\'t.'
    },
    {
      category: 'No Added Microplastics',
      excluded: ['Polyethylene', 'Acrylates', 'Carbomer', 'Nylon-12'],
      why: 'We never add microplastics to our formulas. Instead, we use biodegradable alternatives that are safer for skin and better for the planet.'
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
      excluded: ['Sunflower (Helianthus Annuus)', 'Safflower (Carthamus Tinctorius)', 'Soybean (Glycine Soja)', 'Grapeseed (Vitis Vinifera)', 'Canola (Brassica Napus)'],
      why: 'Men\'s brands rely on these cheap, over-processed oils because they\'re easy to source, not because they\'re best for skin. We cut them entirely—no unstable fillers, no shortcuts.'
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
    },
    {
      category: 'Alcohol',
      excluded: ['Denatured Alcohol', 'SD Alcohol', 'Isopropyl Alcohol', 'Ethanol'],
      why: 'Drying alcohols strip your skin and damage the barrier. Our formula hydrates without any harsh, drying ingredients.'
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
                <span className="badge badge-tsa">✈️ TSA-Approved</span>
                <span className="badge badge-antiaging">⚡ Anti-Aging Powerhouse</span>
              </div>
              <p className="product-size">1.69 FL OZ / 50 ML</p>
              
              <p className="product-description">
                This revolutionary moisturizer combines ancestral wisdom with cutting-edge science. Biomimetic beef tallow delivers unmatched anti-aging benefits while Ceramide NP and Niacinamide visibly helps to reduce fine lines, boost collagen production, and reverse signs of premature aging.
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


        {/* Anti-Aging Science Section */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">PROVEN ANTI-AGING RESULTS</h2>
            <div className="anti-aging-content">
              <div className="grid grid-2">
                <div>
                  <h3>Turn Back The Clock</h3>
                  <p>
                    Our biomimetic formula doesn't just moisturize - it actively reverses signs of aging at the cellular level. The combination of beef tallow's natural retinol content, ceramides for barrier repair, and niacinamide for collagen boosting creates a powerful anti-aging complex that visibly reduces fine lines and wrinkles.
                  </p>
                  <div className="anti-aging-benefits">
                    <h4>Clinical Results:</h4>
                    <ul>
                      <li>Visibly reduces appearance of fine lines and wrinkles</li>
                      <li>Boosts natural collagen production</li>
                      <li>Improves skin firmness and elasticity</li>
                      <li>Reverses signs of sun damage</li>
                      <li>Delivers deep hydration for plumper skin</li>
                    </ul>
                  </div>
                </div>
                <div className="anti-aging-visuals">
                  <div className="placeholder-image">
                    [BEFORE/AFTER GALLERY - TRANSFORMATION]
                    <p>Before/after showing visible improvement</p>
                  </div>
                  <div className="placeholder-image">
                    [CLINICAL STUDY INFOGRAPHIC]
                    <p>Key anti-aging benefits visualization</p>
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
            <h2 className="text-center mb-4 how-to-use-title">HOW TO USE</h2>
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
                    <h3 className="usage-step-title">CLEANSE FIRST</h3>
                    <p>Start with clean skin for optimal absorption. Use our Hydrating Facial Cleanser for best results.</p>
                    <div className="placeholder-image">
                      [GIF - CLEANSING MOTION]
                      <p>Animation showing cleansing technique</p>
                    </div>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3 className="usage-step-title">APPLY 2-3 PUMPS</h3>
                    <p>Use 2-3 pumps for your entire face. Our concentrated formula means you need less than traditional moisturizers.</p>
                    <div className="placeholder-image">
                      [IMAGE - AMOUNT DEMONSTRATION]
                      <p>Showing correct amount on fingertip</p>
                    </div>
                  </div>
                </div>
                <div className="usage-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3 className="usage-step-title">RUB IT IN</h3>
                    <p>Apply until fully absorbed. No grease, no shine, and no residue.</p>
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
                  <h3>Why Our Tallow Formula Beats "Pure" Tallow</h3>
                  <p>
                    Straight tallow is a phenomenal raw material, but a terrible final product. It's greasy, smelly, and while it contains good natural molecules, it's missing critical components your skin needs. That's why we engineered the perfect formula around it.
                  </p>
                  <div className="tallow-benefits">
                    <h4>The Problem with "100% Tallow" Brands:</h4>
                    <ul>
                      <li><strong>Greasy & Heavy:</strong> Straight tallow sits on your skin like a thick layer of grease</li>
                      <li><strong>Smells Like Beef:</strong> Without proper formulation, you'll smell like a steakhouse</li>
                      <li><strong>Only an Occlusive:</strong> Tallow alone only traps moisture - it doesn't add hydration</li>
                      <li><strong>Missing Key Ingredients:</strong> No peptides, ceramides, or omega acids for complete skin health</li>
                      <li><strong>Poor Absorption:</strong> Without emulsifiers, it doesn't penetrate properly</li>
                    </ul>
                  </div>
                  <div className="tallow-benefits">
                    <h4>Our Scientifically Enhanced Formula:</h4>
                    <ul>
                      <li><strong>Perfect Balance:</strong> Tallow + hydrators (glycerin, NMF) + occlusives work together</li>
                      <li><strong>Fine-Tuned Omega Acids:</strong> Added 3, 6, and 9 for all skin types</li>
                      <li><strong>Advanced Delivery:</strong> Our emulsifier system ensures deep penetration</li>
                      <li><strong>No Grease or Smell:</strong> Lightweight, fast-absorbing, unscented formula</li>
                      <li><strong>Complete Moisturization:</strong> Both brings in water AND locks it in</li>
                    </ul>
                  </div>
                  <p className="disclaimer-note">
                    <em>Note: Most "pure" or "100% tallow" moisturizers are actually emulsions - they mean the tallow they use is 100% tallow, not that the formula is 100% tallow. And it's clear that time and attention wasn't paid to those other ingredients.</em>
                  </p>
                </div>
                <div className="tallow-visuals">
                  <div className="placeholder-image">
                    [INFOGRAPHIC - FORMULA COMPARISON]
                    <p>Our complete formula vs straight tallow</p>
                  </div>
                  <div className="placeholder-image">
                    [VIDEO - WHY FORMULATION MATTERS]
                    <p>2-minute video explaining the science</p>
                  </div>
                  <div className="placeholder-image">
                    [COMPARISON CHART - ABSORPTION RATES]
                    <p>Visual showing absorption difference</p>
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

        {/* Reviews System */}
        <div id="reviews-section">
          <ReviewsSystem 
            productId="moisturizer"
            productName="Face Moisturizer with Beef Tallow"
            averageRating={4.8}
            totalReviews={112}
          />
        </div>



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