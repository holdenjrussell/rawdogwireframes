import React from 'react';
import './Legal.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: January 2025</p>

        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            rawdog ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you visit our 
            website or make a purchase from us. Please read this privacy policy carefully. If you do not 
            agree with the terms of this privacy policy, please do not access the site.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          
          <h3>Personal Information</h3>
          <p>We collect personal information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number, mailing address)</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information (credit card numbers are processed securely through our payment processors)</li>
            <li>Account credentials (username and password)</li>
            <li>Purchase history and preferences</li>
            <li>Communications you send to us</li>
            <li>Reviews and feedback</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our Site, we automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages visited and time spent on pages</li>
            <li>Click-through rates</li>
            <li>Device identifiers</li>
            <li>Location data (with your consent)</li>
          </ul>

          <h3>Cookies and Tracking Technologies</h3>
          <p>
            We use cookies, web beacons, pixels, and similar tracking technologies to collect information 
            about your browsing activities. This includes:
          </p>
          <ul>
            <li>Session cookies (expire when you close your browser)</li>
            <li>Persistent cookies (remain until deleted)</li>
            <li>Analytics cookies (Google Analytics, Facebook Pixel, etc.)</li>
            <li>Advertising cookies for retargeting campaigns</li>
            <li>Performance cookies to improve site functionality</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping notifications</li>
            <li>Manage your account and subscriptions</li>
            <li>Respond to customer service requests</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Personalize your shopping experience</li>
            <li>Improve our products and services</li>
            <li>Conduct analytics and market research</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
            <li>Create custom and lookalike audiences for advertising</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          
          <h3>Service Providers</h3>
          <ul>
            <li>Payment processors (Stripe, PayPal, etc.)</li>
            <li>Shipping and fulfillment partners</li>
            <li>Email and SMS marketing platforms (Klaviyo)</li>
            <li>Customer service software providers</li>
            <li>Analytics providers (Google Analytics)</li>
            <li>Cloud storage and hosting services</li>
          </ul>

          <h3>Advertising Partners</h3>
          <p>
            We share certain information with advertising platforms to create custom audiences and 
            deliver targeted advertisements:
          </p>
          <ul>
            <li>Facebook/Meta (including Instagram)</li>
            <li>Google Ads</li>
            <li>TikTok Ads</li>
            <li>Pinterest</li>
            <li>Other social media and advertising platforms</li>
          </ul>
          <p>
            This information is typically hashed or encrypted before sharing and is used to create 
            lookalike audiences and retargeting campaigns. You can opt out of targeted advertising 
            through your account settings or by using platform-specific opt-out tools.
          </p>

          <h3>Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law or in response to valid 
            requests by public authorities (e.g., court orders, subpoenas).
          </p>

          <h3>Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of assets, your information may be 
            transferred to the acquiring entity.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes 
            outlined in this Privacy Policy, unless a longer retention period is required or 
            permitted by law. Criteria used to determine retention periods include:
          </p>
          <ul>
            <li>The length of time we have an ongoing relationship with you</li>
            <li>Whether there is a legal obligation to which we are subject</li>
            <li>Whether retention is advisable in light of our legal position</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Your Privacy Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information:</p>
          
          <h3>California Residents (CCPA/CPRA)</h3>
          <ul>
            <li>Right to know what personal information we collect, use, and share</li>
            <li>Right to delete personal information (with certain exceptions)</li>
            <li>Right to opt-out of the sale or sharing of personal information</li>
            <li>Right to limit use of sensitive personal information</li>
            <li>Right to correct inaccurate personal information</li>
            <li>Right to non-discrimination for exercising your rights</li>
          </ul>

          <h3>European Residents (GDPR)</h3>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
            <li>Right to lodge a complaint with supervisory authorities</li>
          </ul>

          <h3>Other U.S. State Residents</h3>
          <p>
            Residents of Colorado, Connecticut, Utah, Virginia, and other states with comprehensive 
            privacy laws may have similar rights. Please contact us for more information about your 
            specific rights.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Marketing Communications</h2>
          
          <h3>Email Marketing</h3>
          <p>
            If you have opted in to receive marketing emails, we will send you information about 
            products, promotions, and special offers. You can unsubscribe at any time by clicking 
            the "unsubscribe" link in any marketing email.
          </p>

          <h3>SMS Marketing</h3>
          <p>
            With your consent, we may send you text messages about orders, promotions, and updates. 
            Message and data rates may apply. Text STOP to opt out at any time. Text HELP for help.
          </p>

          <h3>Push Notifications</h3>
          <p>
            With your permission, we may send push notifications to your mobile device. You can 
            disable these at any time in your device settings.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Children's Privacy</h2>
          <p>
            Our Site is not intended for children under 18 years of age. We do not knowingly collect 
            personal information from children under 18. If you are a parent or guardian and believe 
            we have collected information from your child, please contact us immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country 
            of residence. These countries may have data protection laws that are different from the 
            laws of your country. We implement appropriate safeguards for cross-border transfers of 
            personal information.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            These measures include:
          </p>
          <ul>
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure payment processing through PCI-compliant providers</li>
            <li>Regular security audits and updates</li>
            <li>Limited access to personal information on a need-to-know basis</li>
            <li>Employee training on data protection</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure, 
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites. We are not responsible for the privacy 
            practices of these websites. We encourage you to read the privacy policies of any third-party 
            sites you visit.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Do Not Track Signals</h2>
          <p>
            Our Site does not currently respond to Do Not Track (DNT) signals. However, you can manage 
            your cookie preferences through your browser settings and opt out of targeted advertising 
            through industry opt-out tools.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated 
            by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically 
            for any changes. Your continued use of our Site after any modifications indicates your 
            acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or wish to exercise your privacy 
            rights, please contact us at:
          </p>
          <p>
            rawdog Skincare<br />
            Privacy Department<br />
            Email: privacy@rawdog.com<br />
            Phone: 1-800-RAWDOG1<br />
            Address: 123 Commerce Street, Suite 100, Wilmington, DE 19801
          </p>
          <p>
            For California residents: You may also submit requests through our toll-free number: 
            1-800-RAWDOG1
          </p>
        </section>

        <section className="legal-section">
          <h2>15. Accessibility</h2>
          <p>
            We are committed to ensuring this Privacy Policy is accessible to individuals with disabilities. 
            If you need this policy in an alternative format, please contact us using the information above.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

