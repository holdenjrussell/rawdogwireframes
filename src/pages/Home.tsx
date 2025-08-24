import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface Review {
  product: string;
  rating: number;
  text: string;
  image: string;
}

interface Expert {
  name: string;
  title: string;
  testimonial: string;
  image: string;
}

interface Ambassador {
  name: string;
  title: string;
  image: string;
}

const Home: React.FC = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 42
  });

  // Initialize countdown timer
  useEffect(() => {
    // Get or set end time (24 hours from now)
    const getEndTime = () => {
      const stored = localStorage.getItem('rawdog-sale-end');
      if (stored) {
        return new Date(stored);
      } else {
        const endTime = new Date();
        endTime.setHours(endTime.getHours() + 24);
        localStorage.setItem('rawdog-sale-end', endTime.toISOString());
        return endTime;
      }
    };

    const endTime = getEndTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Timer expired, reset for another 24 hours
        const newEndTime = new Date();
        newEndTime.setHours(newEndTime.getHours() + 24);
        localStorage.setItem('rawdog-sale-end', newEndTime.toISOString());
        setTimeLeft({ hours: 23, minutes: 59, seconds: 59 });
      }
    };

    // Update immediately
    updateTimer();

    // Update every second
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const ingredients = [
    {
      name: "BEEF TALLOW",
      description: [
        "The signature biomimetic occlusive in our Face Moisturizer. With a fatty acid profile that mirrors human sebum—containing optimal ratios of palmitic, stearic, and oleic acids—tallow is instantly recognized and utilized by your skin. Rich in fat-soluble vitamins A, D, E, and K naturally occurring in grass-fed sources.",
        "Unlike plant oils that oxidize or synthetic occlusives that sit on the surface, tallow integrates with your skin's lipid matrix for true barrier repair. This ancestral ingredient provides deep nourishment while being completely non-comedogenic—a rare combination in skincare."
      ],
      image: "[MICROSCOPIC VIEW OF TALLOW LIPID STRUCTURE]",
      imageDesc: "Biomimetic lipid structure visualization"
    },
    {
      name: "BETAINE SALICYLATE",
      description: [
        "The game-changing BHA in our Hydrating Facial Cleanser. This naturally-derived alternative to harsh salicylic acid provides gentle exfoliation without irritation, unclogging pores while maintaining skin comfort. Perfect for preventing ingrown hairs and razor bumps.",
        "What makes it revolutionary for men's skincare: it works at a higher pH than traditional BHAs, meaning it exfoliates effectively without disrupting your skin barrier. The result? Smoother texture, fewer breakouts, and no post-cleanse tightness."
      ],
      image: "[MOLECULAR STRUCTURE WITH SKIN PENETRATION VISUALIZATION]",
      imageDesc: "BHA molecule penetrating pore structure"
    },
    {
      name: "NMF COMPLEX",
      description: [
        "Our Face Moisturizer features a comprehensive Natural Moisturizing Factor complex—including Sodium PCA, amino acids (Serine, Glycine, Alanine, Arginine, Proline), Sodium Lactate, and Urea. This isn't just hydration; it's literally rebuilding your skin's own water-holding system.",
        "While competitors use cheap humectants like basic glycerin, we replicate the exact composition of healthy skin's NMF. This means hydration that lasts, improves over time, and actually strengthens your skin rather than creating dependency."
      ],
      image: "[DIAGRAM OF NMF COMPONENTS IN SKIN LAYERS]",
      imageDesc: "Natural Moisturizing Factor distribution in epidermis"
    },
    {
      name: "SYN-AKE PEPTIDE",
      description: [
        "A revolutionary neuromodulating peptide in our Under Eye Cream, inspired by temple viper venom. This dipeptide (Diaminobutyroyl Benzylamide Diacetate) targets specific ion channels to reduce muscle contraction frequency—essentially relaxing crow's feet from the inside out.",
        "Clinical studies show up to 52% reduction in wrinkle depth after 28 days. Unlike topical fillers that temporarily plump, SYN-AKE actually prevents the muscle movements that create expression lines, providing cumulative anti-aging benefits."
      ],
      image: "[3D ANIMATION OF PEPTIDE BLOCKING NERVE SIGNALS]",
      imageDesc: "Neuromodulation mechanism visualization"
    },
    {
      name: "ZERUMBONE",
      description: [
        "The secret weapon in our Under Eye Cream—a rare bioactive compound from wild ginger (Zingiber zerumbet). This potent antioxidant doesn't just protect; it actively brightens dark circles by inhibiting melanin transfer and reducing hemoglobin degradation products.",
        "With 10x the antioxidant power of Vitamin E, zerumbone shields the delicate eye area from blue light damage and oxidative stress. It's particularly effective against the purple-brown discoloration common in men who spend long hours in front of screens."
      ],
      image: "[WILD GINGER ROOT WITH MOLECULAR EXTRACTION]",
      imageDesc: "Zerumbone extraction from Zingiber zerumbet"
    }
  ];

  const showIngredient = (index: number) => {
    const ingredient = ingredients[index];
    const titleElement = document.getElementById('ingredient-title');
    const descriptionElement = document.getElementById('ingredient-description');
    const imageElement = document.getElementById('ingredient-image');
    
    // Update active state
    document.querySelectorAll('.nav-item').forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // Update content
    if (titleElement) titleElement.textContent = ingredient.name;
    if (descriptionElement) {
      descriptionElement.innerHTML = ingredient.description.map(p => `<p>${p}</p>`).join('');
    }
    if (imageElement) {
      imageElement.innerHTML = `${ingredient.image}<p>${ingredient.imageDesc}</p>`;
    }
  };

  const products: Product[] = [
    {
      id: 'cleanser',
      name: 'Hydrating Facial Cleanser',
      price: '$32',
      image: '[CLEANSER BOTTLE IMAGE]',
      description: 'Made for all skin types, this cleanser removes excess oil without drying, leaves skin hydrated, and is shave-friendly.'
    },
    {
      id: 'moisturizer',
      name: 'Facial Moisturizer with Beef Tallow',
      price: '$48',
      image: '[MOISTURIZER BOTTLE IMAGE]',
      description: 'Non-greasy and fast-absorbing, this beef tallow-powered moisturizer hydrates deeply and helps fight fine lines and wrinkles.'
    },
    {
      id: 'eyecream',
      name: 'Caffeine Under Eye Cream',
      price: '$38',
      image: '[EYE CREAM JAR IMAGE]',
      description: 'Caffeine-powered to fix tired eyes, this under eye cream helps to reduce dark circles, puffiness, and wrinkles.'
    }
  ];

  const reviews: Review[] = [
    {
      product: 'The Hydrating Ritual Cleanser',
      rating: 5,
      text: 'This cleanser is a game-changer. Leaves my skin feeling clean but never tight or dry. The texture is perfect and it doesn\'t irritate my sensitive skin.',
      image: '[PRODUCT ON SKIN NEAR EYE IMAGE]'
    },
    {
      product: 'The Face Moisturizer',
      rating: 5,
      text: 'I was skeptical about tallow in skincare, but this moisturizer is incredible. Absorbs quickly, no greasy feeling, and my skin looks healthier than ever.',
      image: '[MAN WITH PRODUCT ON FACE IMAGE]'
    },
    {
      product: 'The Caffeine Eye Cream',
      rating: 5,
      text: 'Finally an eye cream that actually works. Noticed less puffiness within days and the fine lines around my eyes are definitely smoother.',
      image: '[MAN IN SHOWER WITH WET HAIR IMAGE]'
    }
  ];

  const experts: Expert[] = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'DERMATOLOGIST, MD',
      testimonial: 'Rawdog\'s approach to biomimetic formulation is scientifically sound. The use of tallow and ceramides creates an ideal environment for skin barrier repair.',
      image: '[DR. SARAH MITCHELL PHOTO]'
    },
    {
      name: 'Dr. James Chen',
      title: 'COSMETIC CHEMIST, PhD',
      testimonial: 'The precision in their ingredient selection is impressive. Every component serves a purpose, and the synergy between actives is expertly crafted.',
      image: '[DR. JAMES CHEN PHOTO]'
    },
    {
      name: 'Dr. Maria Rodriguez',
      title: 'CLINICAL RESEARCHER, MD',
      testimonial: 'Their commitment to eliminating endocrine disruptors while maintaining efficacy sets a new standard for men\'s skincare formulation.',
      image: '[DR. MARIA RODRIGUEZ PHOTO]'
    },
    {
      name: 'Dr. Michael Thompson',
      title: 'BIOCHEMIST, PhD',
      testimonial: 'The NMF complex in their moisturizer is one of the most comprehensive I\'ve seen. It truly mimics the skin\'s natural hydration system.',
      image: '[DR. MICHAEL THOMPSON PHOTO]'
    }
  ];

  const ambassadors: Ambassador[] = [
    {
      name: 'James R.',
      title: 'ATHLETE, INFLUENCER',
      image: '[JAMES R. ATHLETE IMAGE]'
    },
    {
      name: 'Kevin G.',
      title: 'MUSICIAN, INFLUENCER',
      image: '[KEVIN G. MUSICIAN IMAGE]'
    },
    {
      name: 'Michael M.',
      title: 'ATHLETE, INFLUENCER',
      image: '[MICHAEL M. ATHLETE IMAGE]'
    },
    {
      name: 'David L.',
      title: 'ACTOR, INFLUENCER',
      image: '[DAVID L. ACTOR IMAGE]'
    }
  ];

  return (
    <div className="page-container">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-scroll">
          🔥 LIMITED TIME: 30% OFF EVERYTHING + FREE SHIPPING • FIRST 1000 CUSTOMERS ONLY • ENDS SOON • 🔥 LIMITED TIME: 30% OFF EVERYTHING + FREE SHIPPING • FIRST 1000 CUSTOMERS ONLY • ENDS SOON •
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <div className="hero-intro">INTRODUCING</div>
            <h1 className="hero-title">rawdog</h1>
            <p className="hero-description">
              Elevated, easy skincare for your everyday routine.<br />
              Formulated around raw performance—stripped down to only what works.<br />
              Simple. Effective. Honest.
            </p>
            <div className="hero-buttons">
              <Link to="/collection" className="btn btn-primary">SHOP NOW - 30% OFF</Link>
            </div>
            <div className="hero-social-proof">
              <div className="rating-stars">★★★★★</div>
              <p>Trusted by 10,000+ men • 4.9/5 rating • 60-day guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title text-center">THE PRODUCT LINEUP</h2>
          
          <div className="products-scroll-container">
            <div className="products-scroll">
              <div className="product-card bundle-card">
                <div className="product-image">
                  <div className="placeholder-image">
                    [FAMILY BUNDLE - THREE PRODUCTS IMAGE]
                    <p>Cleanser, Moisturizer, Eye Cream bundle</p>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Core Set</h3>
                  <p className="product-description">The three essentials in one simple routine: cleanse, moisturize, wake up eyes.</p>
                  <p className="product-price">$98 <span className="original-price">$118</span></p>
                  <div className="product-buttons">
                    <button className="btn">ADD TO CART</button>
                    <Link to="/products/bundle" className="btn btn-outline">VIEW DETAILS</Link>
                  </div>
                </div>
              </div>

              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-image">
                    <div className="placeholder-image">
                      {product.image}
                      <p>{product.description}</p>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price}</p>
                    <div className="product-buttons">
                      <button className="btn">ADD TO CART</button>
                      <Link to={`/products/${product.id}`} className="btn btn-outline">VIEW DETAILS</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="guarantee-section">
            <div className="guarantee-badges">
              <div className="badge">
                <span className="badge-icon">🛡️</span>
                <div>
                  <h4>60-DAY GUARANTEE</h4>
                  <p>Love it or get your money back</p>
                </div>
              </div>
              <div className="badge">
                <span className="badge-icon">🚚</span>
                <div>
                  <h4>FREE SHIPPING</h4>
                  <p>On orders over $50</p>
                </div>
              </div>
              <div className="badge">
                <span className="badge-icon">⚡</span>
                <div>
                  <h4>FAST RESULTS</h4>
                  <p>See improvements in 7-14 days</p>
                </div>
              </div>
            </div>
            <div className="urgency-timer">
              <h3>⏰ LIMITED TIME: 30% OFF ENDS IN</h3>
              <div className="countdown">
                <div className="time-unit">
                  <span className="time-number">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="time-label">HOURS</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="time-label">MINUTES</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="time-label">SECONDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Rawdog Difference */}
      <section className="section section-light">
        <div className="container">
          <div className="raw-power-section">
            <div className="grid grid-2">
              <div className="raw-power-content">
                <h2>THE NEW STANDARD IN MEN'S SKINCARE</h2>
                
                <div className="rawdog-difference-text">
                  <p>Rawdog isn't built on old formulas or marketing fluff—it's built on uncompromising standards no one else in men's skincare has touched.</p>
                  
                  <p>We've cut seed oils, PEGs, and microplastics—ingredients that have no place in a modern routine—and replaced them with clinically validated actives and biomimetic systems, meaning formulas designed to work like your skin does.</p>
                  
                  <p>The result: simple, effective products that are barrier-safe, bioavailable, and built for real results.</p>
                </div>
                
                <div className="rawdog-standard">
                  <h3>THE RAWDOG STANDARD</h3>
                  <ul className="no-list">
                    <li>✗ Seed Oils</li>
                    <li>✗ Fragrance & Dyes</li>
                    <li>✗ PEGs</li>
                    <li>✗ Silicones</li>
                    <li>✗ Sulfates</li>
                    <li>✗ Fillers</li>
                  </ul>
                </div>
                
                <Link to="/science" className="btn">LEARN MORE</Link>
              </div>
              
              <div className="raw-power-visual">
                <div className="placeholder-image">
                  [CLOSE-UP IMAGE OF EYE WITH WATER DROPLET]
                  <p>Dramatic close-up showcasing skin hydration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whole Body Health Risk Matrix */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            <h2>WHOLE BODY HEALTH RISK MATRIX</h2>
            <p>Rawdog is the only brand that eliminates seed oils, synthetic polymers, and systemic toxins—while using clinically validated actives, custom-built for men's skin.</p>
          </div>
          
          <div className="comparison-table">
            <div className="table-header">
              <div className="brand-col">BRAND</div>
              <div className="risk-col">SEED OILS</div>
              <div className="risk-col">ENDOCRINE DISRUPTORS</div>
              <div className="risk-col">CARCINOGEN LINKS</div>
              <div className="risk-col">MICROPLASTICS</div>
              <div className="risk-col">SYNTHETIC FRAGRANCE</div>
              <div className="positioning-col">BRAND POSITIONING</div>
            </div>
            
            <div className="table-row rawdog-row">
              <div className="brand-col">
                <strong>rawdog</strong>
              </div>
              <div className="risk-col">
                <span className="no-risk">✗</span>
              </div>
              <div className="risk-col">
                <span className="no-risk">✗</span>
              </div>
              <div className="risk-col">
                <span className="no-risk">✗</span>
              </div>
              <div className="risk-col">
                <span className="no-risk">✗</span>
              </div>
              <div className="risk-col">
                <span className="no-risk">✗</span>
              </div>
              <div className="positioning-col">
                First and only seed oil-free skincare brand. Built for men. Built for performance. Built for long-term health.
              </div>
            </div>

            <div className="table-row">
              <div className="brand-col">
                <strong>Jack Black</strong>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="positioning-col">
                Premium-looking but ingredient-poor. Relies on synthetic shortcuts while claiming "clean."
              </div>
            </div>

            <div className="table-row">
              <div className="brand-col">
                <strong>Cetaphil®</strong>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="positioning-col">
                "Derm-recommended", but built on cheap synthetics and low-bar safety claims.
              </div>
            </div>

            <div className="table-row">
              <div className="brand-col">
                <strong>Kiehl's</strong>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="positioning-col">
                Legacy apothecary brand masking outdated formulas with heritage marketing.
              </div>
            </div>

            <div className="table-row">
              <div className="brand-col">
                <strong>BRICKELL MEN'S PRODUCTS</strong>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="positioning-col">
                Natural-leaning image, but packed with essential oils, irritating synthetics, and seed oils.
              </div>
            </div>

            <div className="table-row">
              <div className="brand-col">
                <strong>hims</strong>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="risk-col">
                <span className="has-risk">✓</span>
              </div>
              <div className="positioning-col">
                Claims to lead men's health—formulates with PEGs, fillers, and synthetic fragrance.
              </div>
            </div>
          </div>

          <div className="conversion-cta-section">
            <h3>NO MEN'S BRAND HAS GONE THIS FAR.</h3>
            <p>Don't settle for brands that compromise your health. Choose the only seed oil-free, hormone-safe skincare built specifically for men.</p>
            <div className="cta-buttons">
              <Link to="/collection" className="btn btn-primary">SHOP NOW - SAVE 15%</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section section-light">
        <div className="container">
          <div className="proof-section">
            <h2 className="section-title text-center">RESULTS YOU CAN SEE. FORMULAS YOU CAN TRUST.</h2>
            <p className="proof-description text-center">
              Rawdog delivers real, visible results—hydration, smoother texture, fewer lines, and less tired eyes.
            </p>
            
            <div className="before-after-grid">
              <div className="before-after-item">
                <div className="placeholder-image">
                  [BEFORE & AFTER SLIDER - HYDRATION]
                  <p>Skin hydration improvement over 28 days</p>
                </div>
                <h3>HYDRATION</h3>
                <p>Visible moisture improvement in just 7 days</p>
              </div>
              
              <div className="before-after-item">
                <div className="placeholder-image">
                  [BEFORE & AFTER SLIDER - CLARITY]
                  <p>Skin clarity and texture improvement</p>
                </div>
                <h3>CLARITY</h3>
                <p>Smoother texture and reduced pore appearance</p>
              </div>
              
              <div className="before-after-item">
                <div className="placeholder-image">
                  [BEFORE & AFTER SLIDER - UNDER-EYE]
                  <p>Under-eye puffiness and dark circle reduction</p>
                </div>
                <h3>UNDER-EYE APPEARANCE</h3>
                <p>Reduced puffiness and brighter eye area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Spotlight */}
      <section className="section section-dark">
        <div className="container">
          <div className="ingredient-spotlight">
            <div className="grid grid-2">
              <div className="ingredient-content">
                <div className="ingredient-header">
                  <span className="ingredient-label">SCIENCE BACKED INGREDIENTS</span>
                  <h2 id="ingredient-title">BEEF TALLOW</h2>
                </div>
                
                <div id="ingredient-description">
                  <p>
                    Beef tallow is a powerhouse ingredient that closely resembles the natural composition of human skin. Rich in essential fatty acids such as stearic and oleic acid, it provides deep hydration and helps strengthen the skin's natural barrier.
                  </p>
                  
                  <p>
                    These fatty acids are crucial for maintaining soft, supple skin while reducing moisture loss. In addition, beef tallow is abundant in fat-soluble vitamins like A, D, E, and K, which are known for their skin-rejuvenating properties and antioxidant benefits.
                  </p>
                </div>
                
                <div className="ingredient-navigation">
                  <span className="nav-item active" onClick={() => showIngredient(0)}>(01)</span>
                  <span className="nav-item" onClick={() => showIngredient(1)}>(02)</span>
                  <span className="nav-item" onClick={() => showIngredient(2)}>(03)</span>
                  <span className="nav-item" onClick={() => showIngredient(3)}>(04)</span>
                  <span className="nav-item" onClick={() => showIngredient(4)}>(05)</span>
                </div>
              </div>
              
              <div className="ingredient-visual">
                <div className="placeholder-image" id="ingredient-image">
                  [BLACK AND WHITE IMAGE OF BEEF TALLOW TEXTURE]
                  <p>Artistic texture shot of tallow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title text-center">THE REVIEWS ARE IN</h2>
          
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-image">
                  <div className="placeholder-image">
                    {review.image}
                    <p>Customer using product</p>
                  </div>
                </div>
                <div className="review-content">
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}
                  </div>
                  <h3>{review.product}</h3>
                  <p>"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Slogan */}
      <section className="section section-light">
        <div className="container text-center">
          <h1 className="brand-slogan">RAW PERFORMANCE. STRIPPED DOWN TO ONLY WHAT WORKS</h1>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="section section-dark">
        <div className="container">
          <div className="closing-cta-section">
            <div className="grid grid-2">
              <div className="closing-cta-content">
                <h2>UPGRADE YOUR ROUTINE</h2>
                <p className="closing-cta-description">
                  Rawdog sets a new standard in men's skincare—simple, effective, and built for long-term health.
                </p>
                <div className="closing-cta-buttons">
                  <Link to="/collection" className="btn btn-primary">SHOP NOW</Link>
                </div>
              </div>
              
              <div className="closing-cta-visual">
                <div className="placeholder-image">
                  [HERO SHOT OF THE THREE SKUS TOGETHER - CORE SET]
                  <p>Complete rawdog skincare routine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section section-light">
        <div className="container text-center">
          <h2>JOIN THE COMMUNITY</h2>
          <p>Get exclusive content, product updates and free shipping on your first order.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" className="email-input" />
            <button className="btn" onClick={() => alert('Thank you for subscribing! We\'ll be in touch soon.')}>SUBMIT</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

