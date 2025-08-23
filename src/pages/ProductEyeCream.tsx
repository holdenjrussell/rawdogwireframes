import React, { useState } from 'react';
import ReviewsSystem from '../components/ReviewsSystem';
import './Product.css';

const ProductEyeCream: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'onetime' | 'subscribe'>('subscribe');
  const [showBenefits, setShowBenefits] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showExclusions, setShowExclusions] = useState(false);

  const benefits = [
    'Visibly reduces morning puffiness',
    'Smooths the appearance of fine lines and crow\'s feet',
    'Brightens dark under-eye circles',
    'Advanced peptide technology for expression line reduction',
    'Non-greasy formula perfect for AM use',
    'Caffeine provides immediate tightening effect',
    'Antioxidant protection with Zerumbone',
    'Suitable for the delicate eye area'
  ];

  const keyIngredients = [
    {
      name: 'Caffeine',
      description: 'A clinically-proven vasoconstrictor that immediately tightens blood vessels to reduce fluid retention and puffiness. Caffeine also provides powerful antioxidant protection and enhances microcirculation, making it ideal for morning application when under-eye puffiness is typically most pronounced.',
      benefits: ['Immediate puffiness reduction', 'Improves microcirculation', 'Provides antioxidant protection', 'Tightens and tones skin appearance', 'Enhances other active ingredients']
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
      description: 'A rare and potent bioactive compound extracted from Zingiber zerumbet (wild ginger). This powerful antioxidant and anti-inflammatory agent helps brighten dark under-eye circles, protects against environmental damage, and supports the skin\'s natural repair processes.',
      benefits: ['Potent antioxidant protection', 'Reduces inflammation and redness', 'Brightens dark circles', 'Protects against environmental damage', 'Supports natural skin repair']
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
      category: 'Harsh Actives',
      excluded: ['Retinol', 'Glycolic Acid', 'Salicylic Acid', 'Vitamin C (L-Ascorbic Acid)'],
      why: 'The delicate eye area requires gentler actives. These ingredients can cause irritation, dryness, and sensitivity around the eyes. Our peptide-based approach provides anti-aging benefits without the risk of irritation.'
    },
    {
      category: 'Heavy Oils & Occlusives',
      excluded: ['Petrolatum', 'Mineral Oil', 'Lanolin', 'Heavy Plant Oils'],
      why: 'These can cause milia (white bumps) around the eyes and may interfere with makeup application. Our lightweight emollient system provides hydration without clogging pores or creating heaviness.'
    },
    {
      category: 'Synthetic Fragrances & Essential Oils',
      excluded: ['Parfum/Fragrance', 'Essential Oils', 'Limonene', 'Linalool', 'Citral'],
      why: 'The eye area is particularly sensitive to fragrances and essential oils, which can cause irritation, allergic reactions, and even photosensitivity. Our formula is completely unscented for maximum tolerance.'
    },
    {
      category: 'Drying Alcohols',
      excluded: ['Denatured Alcohol', 'SD Alcohol', 'Isopropyl Alcohol'],
      why: 'These can severely dry out the already delicate eye area, leading to increased fine lines and irritation. We use only beneficial fatty alcohols that moisturize and condition the skin.'
    },
    {
      category: 'Harsh Preservatives',
      excluded: ['Parabens', 'Formaldehyde-releasers', 'Methylisothiazolinone', 'Phenoxyethanol'],
      why: 'These preservatives can cause allergic reactions and sensitization, especially around the sensitive eye area. Our modern preservation system is gentle yet effective.'
    },
    {
      category: 'Silicones',
      excluded: ['Dimethicone', 'Cyclopentasiloxane', 'Phenyl Trimethicone'],
      why: 'While not necessarily harmful, silicones can create a barrier that prevents beneficial ingredients from penetrating. Our silicone-free formula ensures maximum peptide and active ingredient efficacy.'
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
                  [CAFFEINE UNDER EYE CREAM JAR - MAIN IMAGE]
                  <p>High-quality product photography showing the eye cream jar</p>
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
              <h1>Caffeine Under Eye Cream</h1>
              <p className="product-size">0.5 FL OZ / 15 ML</p>
              
              <p className="product-description">
                This targeted AM treatment is engineered to deliver both immediate and long-term results, addressing common male concerns like puffiness, dark circles, and fine lines. The formula is non-greasy and leverages a potent combination of actives to energize and smooth the delicate eye area.
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
                      <p><strong>Eye Area Expertise:</strong> The delicate eye area requires special consideration. We've excluded common ingredients that can cause irritation, sensitivity, or interfere with the efficacy of our advanced peptide system:</p>
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
                      <h4>Gentle Yet Effective</h4>
                      <p>Our eye cream proves that you don't need harsh ingredients to achieve dramatic results. Our peptide-based approach delivers visible improvements while respecting the delicate nature of the eye area.</p>
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
                  <h3>MORNING APPLICATION</h3>
                  <p>Use in your AM routine after cleansing for best results. The caffeine provides an immediate energizing effect.</p>
                </div>
              </div>
              <div className="usage-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>GENTLE APPLICATION</h3>
                  <p>Apply a small amount using your ring finger, gently patting around the eye area. Avoid pulling or stretching the delicate skin.</p>
                </div>
              </div>
              <div className="usage-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>ALLOW ABSORPTION</h3>
                  <p>Let the cream fully absorb before applying other products. Perfect under sunscreen or makeup.</p>
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
                  <h3>Neuromodulating Peptides</h3>
                  <p>
                    Our eye cream features two of the most advanced peptides in skincare: SYN-AKE and Argireline. These "Botox-like" peptides work by interfering with the neuromuscular communication that causes expression lines.
                  </p>
                  <p>
                    Unlike invasive procedures, these peptides work gradually and naturally, relaxing muscle contractions that lead to crow's feet and expression lines around the eyes.
                  </p>
                  
                  <div className="peptide-benefits">
                    <h4>How Peptides Work:</h4>
                    <ul>
                      <li>Target specific neuromuscular pathways</li>
                      <li>Reduce muscle contraction intensity</li>
                      <li>Smooth existing expression lines</li>
                      <li>Prevent formation of new wrinkles</li>
                      <li>Work synergistically for enhanced results</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="placeholder-image">
                    [PEPTIDE MECHANISM DIAGRAM]
                    <p>Scientific illustration showing how peptides work on expression lines</p>
                  </div>
                </div>
              </div>
              
              <div className="peptide-comparison">
                <h3>SYN-AKE vs Argireline</h3>
                <div className="comparison-grid">
                  <div className="peptide-card">
                    <h4>SYN-AKE</h4>
                    <p><strong>Mechanism:</strong> Mimics temple viper venom component</p>
                    <p><strong>Target:</strong> Ion channels in nerve endings</p>
                    <p><strong>Effect:</strong> Reduces muscle contraction frequency</p>
                    <p><strong>Best for:</strong> Dynamic wrinkles and crow's feet</p>
                  </div>
                  <div className="peptide-card">
                    <h4>Argireline</h4>
                    <p><strong>Mechanism:</strong> Interferes with SNARE complex</p>
                    <p><strong>Target:</strong> Neurotransmitter release</p>
                    <p><strong>Effect:</strong> Reduces muscle contraction intensity</p>
                    <p><strong>Best for:</strong> Expression lines and forehead wrinkles</p>
                  </div>
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
                <h4>Finally an Eye Cream That Works</h4>
                <p>"I've tried so many eye creams and this is the first one that actually delivers results. The puffiness reduction is immediate and I can see my crow's feet getting smoother after 6 weeks of use."</p>
                <div className="reviewer">- Chris D., Verified Buyer</div>
              </div>
              
              <div className="review-card">
                <div className="review-rating">★★★★★</div>
                <h4>Perfect for Morning Routine</h4>
                <p>"Love that this is designed for AM use. The caffeine really wakes up my eyes and it layers perfectly under my other products. No greasiness or pilling."</p>
                <div className="reviewer">- Mark S., Verified Buyer</div>
              </div>
              
              <div className="review-card">
                <div className="review-rating">★★★★★</div>
                <h4>Noticeable Results in Weeks</h4>
                <p>"Been using this for 2 months and the difference is remarkable. My under-eye area looks brighter and the fine lines are definitely less noticeable. Worth every penny."</p>
                <div className="reviewer">- Tony R., Verified Buyer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Actives Science */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center mb-4">ADVANCED ACTIVES SCIENCE</h2>
            <div className="actives-science">
              <div className="grid grid-2">
                <div>
                  <h3>Caffeine: Immediate Vasoconstriction</h3>
                  <p>
                    Caffeine works by constricting blood vessels in the delicate under-eye area, immediately reducing the appearance of puffiness and dark circles. This vasoconstriction effect is most pronounced in the morning when fluid retention is typically highest.
                  </p>
                  
                  <h3>Zerumbone: Rare Botanical Powerhouse</h3>
                  <p>
                    Zerumbone is a sesquiterpene compound found exclusively in Zingiber zerumbet (wild ginger). This rare bioactive has been shown in studies to possess potent anti-inflammatory, antioxidant, and skin-brightening properties that surpass many common botanical extracts.
                  </p>
                  
                  <div className="science-benefits">
                    <h4>Clinical Benefits:</h4>
                    <ul>
                      <li><strong>Caffeine:</strong> Immediate puffiness reduction, improved microcirculation</li>
                      <li><strong>Zerumbone:</strong> Superior antioxidant activity, melanin inhibition</li>
                      <li><strong>Peptides:</strong> Cumulative wrinkle reduction over 8-12 weeks</li>
                      <li><strong>Emollient System:</strong> Enhanced ingredient penetration</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="placeholder-image">
                    [BEFORE/AFTER EYE AREA COMPARISON]
                    <p>Visual showing caffeine's effect on under-eye puffiness</p>
                  </div>
                  
                  <div className="ingredient-spotlight-box">
                    <h4>Zerumbone Research</h4>
                    <p><strong>Antioxidant Activity:</strong> 5x more potent than Vitamin E</p>
                    <p><strong>Anti-inflammatory:</strong> Reduces inflammatory markers by 60%</p>
                    <p><strong>Brightening Effect:</strong> Inhibits tyrosinase activity by 40%</p>
                    <p><strong>Stability:</strong> Remains active in cosmetic formulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Ingredients Deep Dive */}
        <section className="section section-dark">
          <div className="container">
            <h2 className="text-center mb-4">SUPPORTING INGREDIENTS DEEP DIVE</h2>
            <div className="supporting-ingredients">
              <div className="ingredient-grid">
                <div className="ingredient-card">
                  <h3>Butylene Glycol</h3>
                  <p><strong>Function:</strong> Humectant and penetration enhancer</p>
                  <p><strong>Benefit:</strong> Helps deliver peptides deeper into the skin while providing lightweight hydration. Less sticky than glycerin, making it ideal for eye area application.</p>
                </div>
                
                <div className="ingredient-card">
                  <h3>Pentylene Glycol</h3>
                  <p><strong>Function:</strong> Antimicrobial humectant</p>
                  <p><strong>Benefit:</strong> Provides natural preservation while adding moisture. Derived from plant sources, it's gentler than traditional preservatives.</p>
                </div>
                
                <div className="ingredient-card">
                  <h3>Propanediol</h3>
                  <p><strong>Function:</strong> Sustainable solvent and humectant</p>
                  <p><strong>Benefit:</strong> Corn-derived alternative to petroleum-based glycols. Enhances ingredient stability and provides smooth application.</p>
                </div>
                
                <div className="ingredient-card">
                  <h3>Glyceryl Glucoside</h3>
                  <p><strong>Function:</strong> Natural osmoprotectant</p>
                  <p><strong>Benefit:</strong> Derived from glucose, this ingredient helps cells maintain water balance under stress conditions, providing long-lasting hydration.</p>
                </div>
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
                    [MOISTURIZER IMAGE]
                    <p>Moisturizer product shot</p>
                  </div>
                </div>
                <h3>Face Moisturizer with Beef Tallow</h3>
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
