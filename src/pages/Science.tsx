import React from 'react';
import './Science.css';

interface Product {
  name: string;
  description: string;
  keyIngredients: string[];
  function: string;
}

interface CompetitorData {
  brand: string;
  seedOils: boolean;
  endocrineDisruptors: boolean;
  carcinogenLinks: boolean;
  microplastics: boolean;
  syntheticFragrance: boolean;
  positioning: string;
}

const Science: React.FC = () => {
  const products: Product[] = [
    {
      name: "Hydrating Facial Cleanser",
      description: "A sophisticated, low-foaming milky cleanser designed to purify without stripping the skin's natural moisture barrier.",
      keyIngredients: [
        "Cocamidopropyl Betaine - Gentle coconut-derived surfactant",
        "Squalane & Glycerin - High-quality humectants and emollients",
        "Betaine Salicylate - Gentle BHA for mild exfoliation",
        "Panthenol & Allantoin - Soothing agents that calm and heal"
      ],
      function: "Gently removes surface oils and impurities while delivering hydration"
    },
    {
      name: "Face Moisturizer with Beef Tallow",
      description: "Lightweight, fast-absorbing moisturizer showcasing the unique blend of ancestral wisdom and modern science.",
      keyIngredients: [
        "Beef Tallow - Biomimetic lipid profile rich in vitamins A, D, E, and K",
        "Ceramide NP - Skin-identical ceramide for barrier reinforcement",
        "Niacinamide - Multi-tasking powerhouse for oil regulation and pore appearance",
        "Comprehensive NMF Complex - Natural Moisturizing Factors for deep hydration"
      ],
      function: "Strengthens skin's protective barrier and provides balanced hydration"
    },
    {
      name: "Caffeine Under Eye Cream",
      description: "Targeted AM treatment engineered to deliver both immediate and long-term results for the delicate eye area.",
      keyIngredients: [
        "Caffeine - Vasoconstrictor that reduces fluid retention and puffiness",
        "SYN-AKE Peptide - Neuromodulating peptide that relaxes muscle contractions",
        "Argireline - 'Botox-like' peptide for expression line reduction",
        "Zerumbone - Potent antioxidant for brightening and protection"
      ],
      function: "Visibly reduces puffiness, brightens under-eye area, and smooths fine lines"
    }
  ];

  const competitors: CompetitorData[] = [
    {
      brand: "rawdog",
      seedOils: false,
      endocrineDisruptors: false,
      carcinogenLinks: false,
      microplastics: false,
      syntheticFragrance: false,
      positioning: "First and only seed oil-free skincare brand. Built for men. Built for performance. Built for long-term health."
    },
    {
      brand: "Jack Black",
      seedOils: true,
      endocrineDisruptors: true,
      carcinogenLinks: true,
      microplastics: true,
      syntheticFragrance: true,
      positioning: "Premium-looking but ingredient-poor. Relies on synthetic shortcuts while claiming 'clean.'"
    },
    {
      brand: "Cetaphil®",
      seedOils: true,
      endocrineDisruptors: true,
      carcinogenLinks: true,
      microplastics: true,
      syntheticFragrance: true,
      positioning: "'Derm-recommended', but built on cheap synthetics and low-bar safety claims."
    },
    {
      brand: "Kiehl's",
      seedOils: true,
      endocrineDisruptors: true,
      carcinogenLinks: true,
      microplastics: true,
      syntheticFragrance: true,
      positioning: "Legacy apothecary brand masking outdated formulas with heritage marketing."
    },
    {
      brand: "BRICKELL MEN'S PRODUCTS",
      seedOils: true,
      endocrineDisruptors: true,
      carcinogenLinks: true,
      microplastics: true,
      syntheticFragrance: true,
      positioning: "Natural-leaning image, but packed with essential oils, irritating synthetics, and seed oils."
    },
    {
      brand: "hims",
      seedOils: true,
      endocrineDisruptors: true,
      carcinogenLinks: true,
      microplastics: true,
      syntheticFragrance: true,
      positioning: "Claims to lead men's health—formulates with PEGs, fillers, and synthetic fragrance."
    }
  ];

  const exclusions = [
    "NO FOREVER CHEMICALS",
    "NO MICROPLASTICS", 
    "NO PEGS",
    "NO SILICONES",
    "NO SYNTHETIC FRAGRANCE",
    "NO SEED OILS",
    "NO PARABENS",
    "NO SULFATES",
    "NO HARSH PRESERVATIVES",
    "NO FILLERS",
    "NO DYES",
    "NO ENDOCRINE DISRUPTORS"
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              THE SCIENCE OF <span className="highlight">RAW POWER</span>
            </h1>
            <p className="hero-subtitle">
              Unleashing Your Skin's Raw Potential Through Biomimetic Technology
            </p>
            <div className="hero-description">
              <p>
                RAWDOG IS THE FIRST-EVER SEED OIL–FREE SKINCARE BRAND BUILT SPECIFICALLY FOR MEN—CLEAN, CLINICAL, AND DESIGNED PURELY FOR PERFORMANCE. WE FORMULATE FROM SCRATCH USING ONLY WHAT WORKS—AND NOTHING THAT DOESN'T.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raw Power Philosophy */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Raw Power Philosophy</h2>
              <p>
                The core technology behind Rawdog is rooted in the principle of <strong>biomimicry</strong>—the science of creating formulations that imitate the skin's own biological structures and processes.
              </p>
              <p>
                Instead of fighting against the skin with harsh chemicals or layering on occlusive, foreign substances, Rawdog provides the precise, recognizable building blocks the skin needs to function optimally.
              </p>
              <div className="philosophy-points">
                <div className="point">
                  <h3>Support & Repair</h3>
                  <p>Provide skin-identical lipids (Tallow, Ceramides) to rebuild the barrier</p>
                </div>
                <div className="point">
                  <h3>Hydrate & Replenish</h3>
                  <p>Use biomimetic humectants (NMF Complex) to restore moisture systems</p>
                </div>
                <div className="point">
                  <h3>Soothe & Regulate</h3>
                  <p>Employ actives like Niacinamide to help skin balance oil production</p>
                </div>
                <div className="point">
                  <h3>Target & Smooth</h3>
                  <p>Utilize advanced peptides that work with cellular communication pathways</p>
                </div>
              </div>
            </div>
            <div className="biomimetic-visual">
              <div className="placeholder-image">
                [BIOMIMETIC TECHNOLOGY DIAGRAM]
                <p>Visual showing how biomimetic ingredients mirror skin's natural structure</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Non-Negotiable Exclusions */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>NON-NEGOTIABLE EXCLUSIONS</h2>
            <p className="section-subtitle">
              What's NOT in our products is just as important as what IS
            </p>
          </div>
          
          <div className="exclusions-grid">
            {exclusions.map((exclusion, index) => (
              <div key={index} className="exclusion-card">
                <div className="exclusion-icon">✗</div>
                <h3>{exclusion}</h3>
              </div>
            ))}
          </div>

          <div className="exclusions-detail mt-4">
            <p className="text-center">
              <em>Every ingredient had to fight to be on our label. If it didn't serve a clear, proven function, it didn't make the cut. Every choice is backed by data and selected to support both skin and whole body health.</em>
            </p>
            <h3 className="text-center mt-4">NO MEN'S BRAND HAS GONE THIS FAR.</h3>
          </div>

          {/* Hormone Disruption Focus */}
          <div className="hormone-section mt-4">
            <div className="grid grid-2">
              <div>
                <h3>PROTECTING MALE HORMONAL HEALTH</h3>
                <p>
                  We're particularly focused on eliminating <strong>endocrine disruptors</strong> and <strong>hormone-disrupting chemicals</strong> that can interfere with testosterone production and male hormonal balance.
                </p>
                <p>
                  Common skincare ingredients like synthetic fragrances, parabens, and certain preservatives have been linked to hormonal disruption in men. We refuse to compromise on this.
                </p>
                <div className="hormone-benefits">
                  <h4>Why This Matters for Men:</h4>
                  <ul>
                    <li>Synthetic fragrances contain phthalates linked to reduced testosterone</li>
                    <li>Parabens can mimic estrogen and disrupt hormonal balance</li>
                    <li>Certain preservatives interfere with natural hormone production</li>
                    <li>Daily exposure through skincare compounds these effects over time</li>
                  </ul>
                </div>
              </div>
              <div className="testosterone-chart">
                <div className="placeholder-image">
                  [DECLINING TESTOSTERONE LEVELS CHART]
                  <p>Graph showing testosterone decline in men over the past 50 years, with correlation to increased chemical exposure</p>
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
            
            {competitors.map((competitor, index) => (
              <div key={index} className={`table-row ${competitor.brand === 'rawdog' ? 'rawdog-row' : ''}`}>
                <div className="brand-col">
                  <strong>{competitor.brand}</strong>
                </div>
                <div className="risk-col">
                  <span className={competitor.seedOils ? 'has-risk' : 'no-risk'}>
                    {competitor.seedOils ? '✓' : '✗'}
                  </span>
                </div>
                <div className="risk-col">
                  <span className={competitor.endocrineDisruptors ? 'has-risk' : 'no-risk'}>
                    {competitor.endocrineDisruptors ? '✓' : '✗'}
                  </span>
                </div>
                <div className="risk-col">
                  <span className={competitor.carcinogenLinks ? 'has-risk' : 'no-risk'}>
                    {competitor.carcinogenLinks ? '✓' : '✗'}
                  </span>
                </div>
                <div className="risk-col">
                  <span className={competitor.microplastics ? 'has-risk' : 'no-risk'}>
                    {competitor.microplastics ? '✓' : '✗'}
                  </span>
                </div>
                <div className="risk-col">
                  <span className={competitor.syntheticFragrance ? 'has-risk' : 'no-risk'}>
                    {competitor.syntheticFragrance ? '✓' : '✗'}
                  </span>
                </div>
                <div className="positioning-col">
                  {competitor.positioning}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Formulator */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>MEET THE FORMULATOR BEHIND THE PERFORMANCE</h2>
            <p className="section-subtitle">
              RAWDOG'S FORMULAS WERE ENGINEERED BY ONE OF THE SHARPEST MINDS IN MODERN SKINCARE CHEMISTRY.
            </p>
          </div>
          
          <div className="formulator-section">
            <div className="grid grid-2">
              <div className="formulator-image">
                <div className="placeholder-image">
                  [LIZZY SKELDING PROFESSIONAL PHOTO]
                  <p>Professional headshot of formulator</p>
                </div>
              </div>
              <div className="formulator-content">
                <h3>LIZZY SKELDING</h3>
                <p>
                  A physical chemist trained at Columbia University with deep expertise in intentional formulation design. She's built award-winning skincare products sold at CVS, Walmart, and featured in FabFitFun boxes.
                </p>
                <p>
                  As the founding chemist at Potion, she developed foundational logic for AI-assisted formulation. At Fig.1, she led end-to-end product development—from raw material vetting to strategic brand positioning.
                </p>
                <p>
                  Through her consultancy work, she helps brands like Rawdog craft not just standout formulas, but the strategy and story behind them—ensuring every product is as smart as it is effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Science Breakdown */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            <h2>PRODUCT SCIENCE BREAKDOWN</h2>
            <p>Each product is engineered from scratch to embody the "Raw Power" philosophy</p>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <div className="placeholder-image">
                    [{product.name.toUpperCase()} PRODUCT IMAGE]
                    <p>High-quality product photography</p>
                  </div>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-function">
                    <h4>Key Function:</h4>
                    <p>{product.function}</p>
                  </div>
                  <div className="ingredients-list">
                    <h4>Star Ingredients:</h4>
                    <ul>
                      {product.keyIngredients.map((ingredient, idx) => (
                        <li key={idx}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biomimetic Technology Deep Dive */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>BIOMIMETIC TECHNOLOGY</h2>
              <p>
                A prime example of this biomimetic technology is the use of <strong>beef tallow</strong> in our Face Moisturizer. The lipid profile of high-quality, purified tallow is remarkably similar to the composition of human sebum.
              </p>
              <p>
                This includes a balanced ratio of saturated and unsaturated fatty acids, as well as cholesterol, which are all critical components of a healthy skin barrier.
              </p>
              <div className="technology-benefits">
                <h3>Why This Matters:</h3>
                <ul>
                  <li>Superior absorption - skin recognizes these lipids as its own</li>
                  <li>Enhanced barrier repair - patches up weaknesses naturally</li>
                  <li>Prevents transepidermal water loss (TEWL)</li>
                  <li>Restores skin resilience without irritation</li>
                </ul>
              </div>
            </div>
            <div className="technology-visual">
              <div className="placeholder-image">
                [TALLOW VS HUMAN SEBUM COMPARISON CHART]
                <p>Scientific diagram showing lipid profile similarities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Peptide Technology */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            <h2>ADVANCED PEPTIDE TECHNOLOGY</h2>
            <p>Highly targeted neuromodulating peptides that work with your body's existing biological pathways</p>
          </div>
          
          <div className="grid grid-2">
            <div className="peptide-card">
              <h3>SYN-AKE Peptide</h3>
              <p>
                A neuromodulating peptide that mimics a component of temple viper venom to relax muscle contractions, smoothing expression lines.
              </p>
              <div className="placeholder-image">
                [SYN-AKE MECHANISM DIAGRAM]
                <p>Scientific illustration of peptide action</p>
              </div>
            </div>
            <div className="peptide-card">
              <h3>Argireline (Acetyl Hexapeptide-8)</h3>
              <p>
                Another "Botox-like" peptide that targets the neuromuscular pathway to reduce the depth of wrinkles caused by facial movements.
              </p>
              <div className="placeholder-image">
                [ARGIRELINE MECHANISM DIAGRAM]
                <p>Scientific illustration of peptide action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Development Methodology */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            <h2>OUR PRODUCT DEVELOPMENT METHODOLOGY</h2>
            <p className="section-subtitle">
              Performance First, Precision Always - How We Build Different
            </p>
          </div>
          
          <div className="methodology-grid">
            <div className="methodology-card">
              <h3>What Most Brands Do</h3>
              <div className="wrong-approach">
                <ul>
                  <li>Start with trendy marketing claims</li>
                  <li>Use pre-built stock formulas</li>
                  <li>Rely on supplier recommendations</li>
                  <li>"Fairy dust" actives at ineffective levels</li>
                  <li>Add more ingredients to fix texture issues</li>
                </ul>
              </div>
            </div>
            
            <div className="methodology-card rawdog-approach">
              <h3>What Rawdog Does</h3>
              <div className="right-approach">
                <ul>
                  <li>Start with skin needs, not marketing</li>
                  <li>Build formulas from first principles</li>
                  <li>Every ingredient serves multiple purposes</li>
                  <li>Performance-driving actives at effective levels</li>
                  <li>Optimize existing ingredients before adding new ones</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="methodology-detail mt-4">
            <h3>Ingredients in Formation</h3>
            <p>
              Rather than assembling a branded cocktail of actives, Rawdog groups ingredients by biological function. Each formulation delivers focused performance, rather than an unfocused mix of everything at once.
            </p>
            <div className="formation-examples">
              <div className="formation-point">
                <strong>Antioxidants work in formation:</strong> A serum doesn't just spotlight Vitamin C—it's designed with its biochemical allies, ensuring comprehensive protection.
              </div>
              <div className="formation-point">
                <strong>Barrier repair actives work in formation:</strong> Instead of sprinkling ineffective amounts of multiple ingredients, we combine a full system to reinforce the skin barrier.
              </div>
              <div className="formation-point">
                <strong>Hydration works in formation:</strong> Beta-glucan and ferments don't just hydrate—they reinforce long-term skin function.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-light">
        <div className="container text-center">
          <h2>UNLEASH YOUR SKIN'S RAW POTENTIAL</h2>
          <p className="mb-4">
            Experience the power of biomimetic technology and uncompromising purity. Your skin deserves nothing less than the cleanest, most effective skincare on the market.
          </p>
          <div className="cta-buttons">
            <button className="btn">Shop Now</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;
