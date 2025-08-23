import React from 'react';
import './About.css';

interface TeamMember {
  name: string;
  title: string;
  description: string[];
  image: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "AMANDA SCHOEP",
      title: "CEO, CO-FOUNDER",
      description: [
        "Amanda is an accomplished leader in the beauty and personal care industry, with a proven track record of launching multiple 8-figure flagship products that have driven 65% year-over-year revenue growth.",
        "She has expertly led cross-functional teams to introduce category-defining skincare devices in new product verticals, achieving Amazon's Best Seller status by GMV and profitability within just 90 days.",
        "With deep expertise in customer value and cross-functional collaboration, Amanda has successfully led hyper-growth teams in roles such as Head of Lifecycle and Retention, as well as Head of Customer Experience, driving innovation and ensuring exceptional customer satisfaction."
      ],
      image: "[AMANDA SCHOEP PROFESSIONAL PHOTO]"
    },
    {
      name: "HOLDEN RUSSELL",
      title: "PRESIDENT, CO-FOUNDER",
      description: [
        "Holden is the Former Director of Growth at Michael Todd Beauty, an 8-figure e-commerce skincare brand. At Beauty Industry Group, he oversaw growth for a portfolio of 10+ beauty and cosmetics brands, scaling the company from less than $50MM to over $500MM in annual revenue through strategic paid advertising.",
        "He successfully launched three new beauty brands on e-commerce, growing each to $14–30MM in annual revenue within two years. At iRESTORE, Holden doubled annual revenue from $24MM to $48MM.",
        "Over his career, he has managed more than $100MM in digital ad spend, driving scalable growth with data-driven strategies and performance marketing expertise."
      ],
      image: "[HOLDEN RUSSELL PROFESSIONAL PHOTO]"
    },
    {
      name: "DANIEL MCCLELLAN",
      title: "CHIEF CREATIVE OFFICER",
      description: [
        "With extensive experience with e-commerce, fashion, and CPG brands, Daniel excels at navigating the spectrum from launching small startups to optimizing the systems of large, established companies.",
        "Specializing in the intersection of design and strategy, he currently serves as the Associate Design Director of Paid Media at Alo Yoga, where he led creative initiatives that drove over $360MM in revenue during Alo's Black Friday Sale.",
        "Daniel brings a unique perspective on creating brand experiences that resonate with modern consumers while maintaining authentic brand identity."
      ],
      image: "[DANIEL MCCLELLAN PROFESSIONAL PHOTO]"
    },
    {
      name: "LIZZY SKELDING",
      title: "LEAD FORMULATOR",
      description: [
        "A physical chemist trained at Columbia University with deep expertise in intentional formulation design. She's built award-winning skincare products sold at CVS, Walmart, and featured in FabFitFun boxes.",
        "As the founding chemist at Potion, she developed foundational logic for AI-assisted formulation. At Fig.1, she led end-to-end product development—from raw material vetting to strategic brand positioning.",
        "Through her consultancy work, she helps brands like Rawdog craft not just standout formulas, but the strategy and story behind them—ensuring every product is as smart as it is effective."
      ],
      image: "[LIZZY SKELDING PROFESSIONAL PHOTO]"
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>ABOUT RAWDOG</h1>
            <p className="hero-subtitle">
              Built by a team that's tired of profit-driven brands that laugh at their customers
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="mission-content">
            <h2 className="text-center mb-4">OUR MISSION</h2>
            <div className="grid grid-2">
              <div>
                <h3>Why We Started Rawdog</h3>
                <p>
                  We've worked for some of the biggest names in e-commerce and beauty—from corporate giants to dropshipping operations. We've seen it all: brands that prioritize profit margins over product quality, companies that laugh at their customers behind closed doors, and businesses that treat employees as expendable resources.
                </p>
                <p>
                  We got tired of it. Tired of working for companies that didn't give a damn about the people using their products. Tired of seeing brands cut corners on ingredients while charging premium prices. Tired of the industry treating men's skincare as an afterthought.
                </p>
                <p>
                  <strong>We decided to build something different.</strong>
                </p>
              </div>
              <div>
                <h3>The Movement from Food to Beauty</h3>
                <p>
                  We're witnessing a revolution in consumer awareness. It started with food—people began questioning harmful dyes, seed oils, and processed ingredients. They demanded transparency and better options.
                </p>
                <p>
                  Now that same consciousness is moving into beauty and skincare. People are realizing that what you put ON your body is just as important as what you put IN your body.
                </p>
                <p>
                  <strong>Rawdog is leading this transition</strong>—bringing the same ingredient scrutiny and health-first approach that transformed the food industry into men's skincare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>OUR VALUES</h2>
            <p className="section-subtitle">What drives everything we do</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Customer-First, Always</h3>
              <p>
                We genuinely care about the people using our products. Every decision is made with your health and satisfaction in mind—not our profit margins.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3>Science-Backed Performance</h3>
              <p>
                No marketing fluff. Every ingredient is chosen based on clinical evidence and proven results. If it doesn't work, it doesn't make it into our products.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Radical Transparency</h3>
              <p>
                We tell you exactly what's in our products and why. No hiding behind proprietary blends or marketing speak. You deserve to know what you're putting on your skin.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Uncompromising Quality</h3>
              <p>
                We refuse to cut corners. From sourcing the finest raw materials to rigorous testing, we maintain the highest standards at every step.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Long-Term Health Focus</h3>
              <p>
                We're not just about immediate results. We're committed to protecting your long-term health by eliminating ingredients linked to hormonal disruption and systemic toxicity.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3>Built for Men</h3>
              <p>
                Men's skin has unique needs. We formulate specifically for male skin biology, not just repackage women's products in black bottles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            <h2>MEET THE TEAM</h2>
            <p className="section-subtitle">
              The people behind the products—experienced professionals who've worked across the industry and decided to do better
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <div className="placeholder-image">
                    {member.image}
                    <p>Professional headshot</p>
                  </div>
                </div>
                <div className="member-content">
                  <h3>{member.name}</h3>
                  <h4>{member.title}</h4>
                  {member.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>OUR INDUSTRY EXPERIENCE</h2>
            <p className="section-subtitle">
              We've worked across the spectrum—from Fortune 500 companies to scrappy startups
            </p>
          </div>
          
          <div className="experience-content">
            <div className="grid grid-2">
              <div>
                <h3>Corporate Beauty Giants</h3>
                <p>
                  Our team has worked with some of the biggest names in beauty and e-commerce. We've seen how these companies operate from the inside—the good, the bad, and the ugly.
                </p>
                <p>
                  We learned valuable lessons about scale, operations, and what it takes to build successful brands. But we also witnessed the dark side: profit-first mentalities, corner-cutting on ingredients, and a fundamental disconnect from customer needs.
                </p>
              </div>
              <div>
                <h3>Startup & E-commerce World</h3>
                <p>
                  We've also worked in the fast-paced world of e-commerce startups and dropshipping operations. This experience taught us agility, customer acquisition, and how to move quickly in competitive markets.
                </p>
                <p>
                  However, we also saw how the pressure for quick profits often led to compromised product quality and customer service. Many brands were more focused on the next sale than the next satisfied customer.
                </p>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            <h2>THE RAWDOG DIFFERENCE</h2>
            <p className="section-subtitle">
              What happens when you combine industry expertise with genuine care for customers and employees
            </p>
          </div>
          
          <div className="difference-content">
            <div className="difference-point">
              <h3>We Actually Use Our Products</h3>
              <p>
                Unlike many beauty executives who wouldn't be caught dead using their own products, our entire team uses Rawdog daily. We formulate for ourselves first, then share it with the world.
              </p>
            </div>
            
            <div className="difference-point">
              <h3>We Read Every Customer Email</h3>
              <p>
                Customer feedback doesn't disappear into a black hole. Our founders personally read customer emails and use that feedback to improve products and processes.
              </p>
            </div>
            
            <div className="difference-point">
              <h3>Our Employees Aren't Just Numbers</h3>
              <p>
                We've worked for companies that treat employees as expendable resources. At Rawdog, we actually care about the people we work with. Our team is made up of good people who want to do good in the world and genuinely believe in our mission.
              </p>
            </div>
            
            <div className="difference-point">
              <h3>We Invest in Ingredients, Not Marketing Gimmicks</h3>
              <p>
                While other brands spend millions on influencer partnerships and flashy campaigns, we invest in the finest raw materials and rigorous testing. Our products speak for themselves.
              </p>
            </div>
            
            <div className="difference-point">
              <h3>We're Building for the Long Term</h3>
              <p>
                We're not looking for a quick exit or acquisition. We're building a brand that will still be improving men's lives decades from now. Every decision is made with longevity in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-light">
        <div className="container text-center">
          <h2>JOIN THE MOVEMENT</h2>
          <p className="mb-4">
            Be part of the shift toward cleaner, more effective skincare. Experience what happens when a brand actually gives a damn about its customers.
          </p>
          <div className="cta-buttons">
            <button className="btn">Shop Products</button>
            <button className="btn btn-outline">Learn About Our Science</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
