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
        "The signature biomimetic occlusive ingredient in our Face Moisturizer. Rich in skin-compatible fatty acids and vitamins A, D, E, & K, it provides unparalleled barrier support and nourishment with a lipid profile remarkably similar to human sebum.",
        "This powerhouse ingredient closely resembles the natural composition of human skin, delivering deep hydration while strengthening the skin's natural barrier. Unlike synthetic alternatives, tallow is instantly recognized and absorbed by your skin."
      ],
      image: "[BLACK AND WHITE IMAGE OF BEEF TALLOW TEXTURE]",
      imageDesc: "Artistic texture shot of tallow"
    },
    {
      name: "NIACINAMIDE (VITAMIN B3)",
      description: [
        "A versatile active found in our Face Moisturizer that helps regulate sebum, reduce inflammation, minimize the appearance of pores, and improve overall skin tone. This multi-functional ingredient is ideal for men's typically oilier skin.",
        "Clinically proven to strengthen the skin barrier and reduce the appearance of fine lines, niacinamide works synergistically with our other actives to deliver comprehensive skin improvement while being gentle enough for daily use."
      ],
      image: "[MOLECULAR STRUCTURE OF NIACINAMIDE]",
      imageDesc: "Scientific visualization of niacinamide molecule"
    },
    {
      name: "CERAMIDE NP",
      description: [
        "A crucial skin-identical ceramide in our Face Moisturizer that reinforces the skin's natural barrier, locking in moisture and protecting against environmental stressors. This is the same ceramide naturally found in healthy skin.",
        "As we age, natural ceramide production decreases, leading to dryness and sensitivity. By replenishing with Ceramide NP, we help restore the skin's natural defense system and maintain optimal hydration levels throughout the day."
      ],
      image: "[MICROSCOPIC VIEW OF SKIN BARRIER WITH CERAMIDES]",
      imageDesc: "Cross-section showing ceramide structure in skin"
    },
    {
      name: "CAFFEINE",
      description: [
        "A well-known vasoconstrictor in our Under Eye Cream that helps reduce fluid retention and puffiness for a tighter, more toned appearance around the eyes. This powerful antioxidant provides immediate visible results.",
        "Beyond its de-puffing properties, caffeine stimulates circulation and helps diminish the appearance of dark circles while providing protection against environmental stressors. Perfect for men who want to look alert and refreshed."
      ],
      image: "[CLOSE-UP OF COFFEE BEANS AND MOLECULAR STRUCTURE]",
      imageDesc: "Artistic composition of caffeine source and structure"
    },
    {
      name: "SYN-AKE PEPTIDE",
      description: [
        "A neuromodulating peptide in our Under Eye Cream that mimics a component of temple viper venom to relax muscle contractions, smoothing expression lines and crow's feet. This cutting-edge ingredient works like 'topical botox'.",
        "This biomimetic peptide communicates with skin cells to reduce the depth of wrinkles caused by facial movements. The result is visibly smoother, firmer skin with reduced appearance of fine lines, especially around the eyes."
      ],
      image: "[3D VISUALIZATION OF PEPTIDE CHAINS]",
      imageDesc: "Scientific rendering of peptide molecular structure"
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
      description: 'Gentle milky cleanser that purifies without stripping'
    },
    {
      id: 'moisturizer',
      name: 'Face Moisturizer with Beef Tallow',
      price: '$48',
      image: '[MOISTURIZER BOTTLE IMAGE]',
      description: 'Lightweight moisturizer with biomimetic tallow technology'
    },
    {
      id: 'eyecream',
      name: 'Caffeine Under Eye Cream',
      price: '$38',
      image: '[EYE CREAM JAR IMAGE]',
      description: 'Advanced peptide eye cream for puffiness and fine lines'
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
              Elevate your skincare routine with rawdog's powerful, natural formulations. 
              Discover the confidence that comes from products designed to perform.
            </p>
            <div className="hero-buttons">
              <Link to="/collection" className="btn btn-primary">START YOUR TRANSFORMATION - 30% OFF</Link>
              <Link to="/science" className="btn btn-outline">SEE THE SCIENCE</Link>
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
          <h2 className="section-title text-center">FEATURED</h2>
          
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
                  <h3>The Complete Routine</h3>
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

      {/* The Raw Power of Ingredients */}
      <section className="section section-light">
        <div className="container">
          <div className="raw-power-section">
            <div className="grid grid-2">
              <div className="raw-power-content">
                <h2>THE RAW POWER OF INGREDIENTS</h2>
                
                <div className="power-points">
                  <div className="power-point">
                    <div className="point-number">01.</div>
                    <div className="point-content">
                      <h3>POWERED BY NATURE</h3>
                      <p>Our products harness the raw, unfiltered power of nature's most effective ingredients. We obsessively select each element for its potency and ability to deliver visible, real results.</p>
                    </div>
                  </div>
                  
                  <div className="power-point">
                    <div className="point-number">02.</div>
                    <div className="point-content">
                      <h3>ELEVATED SKINCARE, SIMPLIFIED</h3>
                      <p>We redefine men's skincare with clean, high-performance products that streamline your routine without compromising on effectiveness. No clutter, just top-tier formulations that work.</p>
                    </div>
                  </div>
                  
                  <div className="power-point">
                    <div className="point-number">03.</div>
                    <div className="point-content">
                      <h3>DESIGNED FOR THE MODERN MAN</h3>
                      <p>Today's men demand more from their skincare. rawdog meets that challenge with clean, premium products crafted to boost confidence and prioritize health, giving you the confidence to take on the world.</p>
                    </div>
                  </div>
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

      {/* Philosophy Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="philosophy-section">
            <div className="grid grid-2">
              <div className="philosophy-visual">
                <div className="placeholder-image">
                  [CLOSE-UP IMAGE OF MAN'S FACE]
                  <p>Artistic black and white portrait</p>
                </div>
              </div>
              
              <div className="philosophy-content">
                <p className="philosophy-text">
                  ...most assume "raw" refers to the source of something, but it can also refer to something's innate potential, or source of natural power. rawdog's unique combination of natural ingredients to create performance products is the result of obsessively choosing ingredients raw in source and raw in power, with proven results.
                </p>
                <Link to="/about" className="btn">LEARN MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Spotlight */}
      <section className="section section-light">
        <div className="container">
          <div className="ingredient-spotlight">
            <div className="grid grid-2">
              <div className="ingredient-content">
                <div className="ingredient-header">
                  <span className="ingredient-label">INGREDIENTS</span>
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

      {/* Featured In */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2>FEATURED IN</h2>
          <div className="featured-logos">
            <div className="logo-placeholder">GQ</div>
            <div className="logo-placeholder">Esquire</div>
            <div className="logo-placeholder">Men's Health</div>
            <div className="logo-placeholder">Another Man</div>
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

      {/* Science Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="science-section">
            <h2 className="section-title text-center">SCIENCE BACKED INGREDIENTS</h2>
            
            <div className="science-visual text-center">
              <div className="placeholder-image">
                [IMAGE OF WHITE CREAM SMEAR]
                <p>Product texture showcase</p>
              </div>
            </div>
            
            <div className="science-points">
              <div className="science-point">
                <div className="point-number">01.</div>
                <div className="point-content">
                  <h3>Beef Tallow: Nature's Moisture Powerhouse</h3>
                  <p>Our hero ingredient, beef tallow, is packed with essential fatty acids and vitamins that mimic the skin's natural oils, delivering intense hydration and nourishment.</p>
                </div>
              </div>
              
              <div className="science-point">
                <div className="point-number">02.</div>
                <div className="point-content">
                  <h3>Raw Ingredients, Maximum Potency</h3>
                  <p>We source ingredients in their purest forms to ensure their natural power remains intact, providing you with skincare that genuinely works.</p>
                </div>
              </div>
              
              <div className="science-point">
                <div className="point-number">03.</div>
                <div className="point-content">
                  <h3>Clean & Effective Formulations</h3>
                  <p>No unnecessary fillers—just powerful, natural ingredients that deliver uncompromised results for healthier, more resilient skin.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/science" className="btn">LEARN MORE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Whole Body Health Risk Matrix */}
      <section className="section section-light">
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
              <Link to="/collection" className="btn btn-outline">TRY RISK-FREE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Trust */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title text-center">TRUSTED BY EXPERTS</h2>
          
          <div className="experts-grid">
            {experts.map((expert, index) => (
              <div key={index} className="expert-card">
                <div className="expert-image">
                  <div className="placeholder-image">
                    {expert.image}
                    <p>Professional headshot</p>
                  </div>
                </div>
                <div className="expert-content">
                  <h3>{expert.name}</h3>
                  <h4>{expert.title}</h4>
                  <p>"{expert.testimonial}"</p>
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

      {/* Brand Ambassadors */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title text-center">RAWDOG REPS</h2>
          
          <div className="ambassadors-grid">
            {ambassadors.map((ambassador, index) => (
              <div key={index} className="ambassador-card">
                <div className="ambassador-image">
                  <div className="placeholder-image">
                    {ambassador.image}
                    <p>Ambassador portrait</p>
                  </div>
                </div>
                <div className="ambassador-info">
                  <h3>{ambassador.name}</h3>
                  <p>{ambassador.title}</p>
                </div>
              </div>
            ))}
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
