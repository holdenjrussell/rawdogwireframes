import React, { useState } from 'react';
import './Legal.css';
import './CookiePolicy.css';

const CookiePolicy: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      icon: '🔒',
      required: true,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      cookies: [
        { name: 'session_id', purpose: 'Maintains user session', duration: 'Session' },
        { name: 'cart_items', purpose: 'Stores shopping cart contents', duration: '30 days' },
        { name: 'csrf_token', purpose: 'Security token for form submissions', duration: 'Session' },
        { name: 'cookie_consent', purpose: 'Stores cookie preferences', duration: '1 year' }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      icon: '📊',
      required: false,
      description: 'These cookies help us understand how visitors interact with our website.',
      cookies: [
        { name: '_ga', purpose: 'Google Analytics tracking', duration: '2 years' },
        { name: '_gid', purpose: 'Google Analytics session', duration: '24 hours' },
        { name: '_gat', purpose: 'Google Analytics rate limiting', duration: '1 minute' },
        { name: 'hotjar_id', purpose: 'Hotjar user behavior tracking', duration: '1 year' }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      icon: '📢',
      required: false,
      description: 'These cookies are used to deliver personalized advertisements.',
      cookies: [
        { name: '_fbp', purpose: 'Facebook Pixel tracking', duration: '3 months' },
        { name: 'fr', purpose: 'Facebook advertising', duration: '3 months' },
        { name: '_ttp', purpose: 'TikTok Pixel tracking', duration: '13 months' },
        { name: 'IDE', purpose: 'Google Ads targeting', duration: '13 months' },
        { name: '_pin_unauth', purpose: 'Pinterest advertising', duration: '1 year' },
        { name: '__kla_id', purpose: 'Klaviyo email marketing', duration: '2 years' }
      ]
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      icon: '⚙️',
      required: false,
      description: 'These cookies enable enhanced functionality and personalization.',
      cookies: [
        { name: 'language', purpose: 'Stores language preference', duration: '1 year' },
        { name: 'currency', purpose: 'Stores currency preference', duration: '1 year' },
        { name: 'recently_viewed', purpose: 'Tracks recently viewed products', duration: '30 days' },
        { name: 'wishlist', purpose: 'Stores wishlist items', duration: '1 year' }
      ]
    }
  ];

  return (
    <div className="legal-page cookie-page">
      <div className="legal-container">
        <h1>Cookie Policy</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <section className="legal-section">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences, 
            analyzing how you use our site, and delivering personalized content and advertisements.
          </p>
        </section>

        <section className="legal-section">
          <h2>How We Use Cookies</h2>
          <p>rawdog uses cookies and similar tracking technologies for the following purposes:</p>
          <ul>
            <li>To keep you signed in to your account</li>
            <li>To remember items in your shopping cart</li>
            <li>To analyze website traffic and usage patterns</li>
            <li>To personalize your shopping experience</li>
            <li>To deliver targeted advertisements on our site and others</li>
            <li>To measure the effectiveness of our marketing campaigns</li>
            <li>To prevent fraud and enhance security</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Types of Cookies We Use</h2>
          <div className="cookie-categories">
            {cookieCategories.map((category) => (
              <div key={category.id} className="cookie-category">
                <button
                  className="category-header"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={expandedCategory === category.id}
                >
                  <div className="category-info">
                    <span className="category-icon">{category.icon}</span>
                    <div>
                      <h3>{category.name}</h3>
                      {category.required && <span className="required-badge">Required</span>}
                    </div>
                  </div>
                  <span className="toggle-icon">
                    {expandedCategory === category.id ? '−' : '+'}
                  </span>
                </button>
                
                {expandedCategory === category.id && (
                  <div className="category-content">
                    <p className="category-description">{category.description}</p>
                    <div className="cookie-list">
                      <table>
                        <thead>
                          <tr>
                            <th>Cookie Name</th>
                            <th>Purpose</th>
                            <th>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.cookies.map((cookie, index) => (
                            <tr key={index}>
                              <td><code>{cookie.name}</code></td>
                              <td>{cookie.purpose}</td>
                              <td>{cookie.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="legal-section">
          <h2>Third-Party Cookies</h2>
          <p>
            We work with third-party services that may set their own cookies on your device. 
            These partners include:
          </p>
          
          <div className="third-party-grid">
            <div className="third-party-card">
              <h3>Google Analytics</h3>
              <p>Website analytics and performance monitoring</p>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy →
              </a>
            </div>
            <div className="third-party-card">
              <h3>Facebook/Meta</h3>
              <p>Social media integration and advertising</p>
              <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">
                Privacy Policy →
              </a>
            </div>
            <div className="third-party-card">
              <h3>Klaviyo</h3>
              <p>Email marketing and customer engagement</p>
              <a href="https://www.klaviyo.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy →
              </a>
            </div>
            <div className="third-party-card">
              <h3>TikTok</h3>
              <p>Advertising and audience insights</p>
              <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy →
              </a>
            </div>
            <div className="third-party-card">
              <h3>Pinterest</h3>
              <p>Social sharing and advertising</p>
              <a href="https://policy.pinterest.com/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy →
              </a>
            </div>
            <div className="third-party-card">
              <h3>Stripe</h3>
              <p>Payment processing and fraud prevention</p>
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy →
              </a>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Managing Your Cookie Preferences</h2>
          
          <div className="preference-options">
            <div className="option-card">
              <h3>Cookie Settings</h3>
              <p>
                You can manage your cookie preferences at any time by clicking the "Cookie Settings" 
                link in the footer of our website. You can choose which categories of cookies to 
                accept or reject (except essential cookies).
              </p>
              <button className="btn-secondary">Manage Cookie Settings</button>
            </div>
            
            <div className="option-card">
              <h3>Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings. You can set 
                your browser to refuse cookies or delete certain cookies. However, this may impact 
                your ability to use some features of our website.
              </p>
            </div>
          </div>

          <h3>How to Disable Cookies in Popular Browsers</h3>
          <ul>
            <li>
              <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
            </li>
            <li>
              <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
            </li>
            <li>
              <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
            </li>
            <li>
              <strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Opt-Out of Targeted Advertising</h2>
          <p>
            You can opt out of targeted advertising from many providers through these industry tools:
          </p>
          <ul>
            <li>
              <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">
                Digital Advertising Alliance (DAA) Opt-Out
              </a>
            </li>
            <li>
              <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">
                Network Advertising Initiative (NAI) Opt-Out
              </a>
            </li>
            <li>
              <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">
                European Interactive Digital Advertising Alliance (EDAA)
              </a>
            </li>
          </ul>
          
          <p>
            Please note that opting out of targeted advertising doesn't mean you won't see ads; 
            it means the ads you see won't be personalized based on your interests.
          </p>
        </section>

        <section className="legal-section">
          <h2>Do Not Track Signals</h2>
          <p>
            Some browsers offer a "Do Not Track" (DNT) setting that signals to websites that you 
            do not want to be tracked. Currently, there is no industry standard for how companies 
            should respond to DNT signals. Our website does not currently respond to DNT signals, 
            but you can manage your tracking preferences through our cookie settings.
          </p>
        </section>

        <section className="legal-section">
          <h2>Cookies and Personal Data</h2>
          <p>
            Some cookies we use may collect personal information about you. For details on how we 
            handle personal data, please refer to our <a href="/privacy">Privacy Policy</a>.
          </p>
          <p>
            When we use cookies for analytics and advertising purposes, we may share certain 
            information with our partners. This is typically done in a way that doesn't directly 
            identify you, using hashed or pseudonymized identifiers.
          </p>
        </section>

        <section className="legal-section">
          <h2>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices 
            or for legal, operational, or regulatory reasons. We will notify you of any material 
            changes by updating the "Last Updated" date at the top of this policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <p>
            rawdog Skincare<br />
            Privacy Department<br />
            Email: <a href="mailto:privacy@rawdog.com">privacy@rawdog.com</a><br />
            Phone: 1-800-RAWDOG1<br />
            Address: 123 Commerce Street, Suite 100, Wilmington, DE 19801
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
