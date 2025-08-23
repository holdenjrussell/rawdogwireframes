import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqItems: FAQItem[] = [
    // Products & Ingredients
    {
      id: '1',
      category: 'products',
      question: 'What makes rawdog different from other skincare brands?',
      answer: 'rawdog is the first and only seed oil-free skincare brand built specifically for men. We use biomimetic ingredients like beef tallow that closely match your skin\'s natural composition, combined with clinically-proven actives. We eliminate all endocrine disruptors, synthetic fragrances, and harmful chemicals while maintaining premium performance.'
    },
    {
      id: '2',
      category: 'products',
      question: 'Is beef tallow really good for skin?',
      answer: 'Yes! Beef tallow has a fatty acid profile remarkably similar to human sebum, making it incredibly compatible with your skin. It\'s rich in vitamins A, D, E, and K, provides deep moisturization without clogging pores, and strengthens the skin barrier. Unlike plant oils that can oxidize and cause irritation, tallow is stable and non-comedogenic.'
    },
    {
      id: '3',
      category: 'products',
      question: 'Are your products suitable for all skin types?',
      answer: 'Yes, our products are formulated to work with all skin types - oily, dry, combination, and sensitive. The biomimetic nature of our ingredients means they work with your skin\'s natural processes rather than against them. However, we always recommend patch testing if you have particularly sensitive skin.'
    },
    {
      id: '4',
      category: 'products',
      question: 'What is your recommended skincare routine?',
      answer: 'Morning: 1) Cleanse with our Hydrating Facial Cleanser, 2) Apply Caffeine Under Eye Cream to reduce puffiness, 3) Moisturize with our Face Moisturizer. Evening: 1) Cleanse to remove daily buildup, 2) Apply Eye Cream focusing on fine lines, 3) Finish with Face Moisturizer for overnight repair.'
    },
    {
      id: '5',
      category: 'products',
      question: 'Are your products cruelty-free?',
      answer: 'Yes, all rawdog products are cruelty-free. We never test on animals and work only with suppliers who share our ethical standards. Our beef tallow is sourced from grass-fed cattle as a byproduct of the food industry, making use of ingredients that would otherwise go to waste.'
    },

    // Shipping & Delivery
    {
      id: '6',
      category: 'shipping',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days within the US. Express shipping (2-3 business days) and overnight options are available. International shipping typically takes 10-15 business days. All orders are processed within 24 hours on business days.'
    },
    {
      id: '7',
      category: 'shipping',
      question: 'Do you offer free shipping?',
      answer: 'Yes! We offer free standard shipping on all US orders over $50. Subscription orders always ship free regardless of order value. International free shipping is available on orders over $100.'
    },
    {
      id: '8',
      category: 'shipping',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 30 countries including the UK, Canada, Australia, and most of Europe. International customers are responsible for any customs duties or taxes. Shipping costs and delivery times vary by location.'
    },
    {
      id: '9',
      category: 'shipping',
      question: 'Can I track my order?',
      answer: 'Absolutely! Once your order ships, you\'ll receive a tracking number via email. You can track your package through the carrier\'s website or in your account dashboard on our site.'
    },

    // Returns & Refunds
    {
      id: '10',
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 60-day money-back guarantee on all products. If you\'re not completely satisfied, return the product (even if partially used) for a full refund. We provide a prepaid return label for US customers.'
    },
    {
      id: '11',
      category: 'returns',
      question: 'How do I return a product?',
      answer: 'Email returns@rawdog.com or call 1-800-RAWDOG1 with your order number. We\'ll send you a prepaid return label within 24 hours. Pack the products and drop off at any authorized shipping location. Refunds are processed within 5-10 business days of receipt.'
    },
    {
      id: '12',
      category: 'returns',
      question: 'Can I return products if I\'ve used them?',
      answer: 'Yes! We understand you need to try our products to know if they work for your skin. Products should be at least 50% full for a full refund. We want you to feel comfortable testing our products risk-free.'
    },
    {
      id: '13',
      category: 'returns',
      question: 'What if my product arrives damaged?',
      answer: 'Contact us immediately with photos of the damage. We\'ll send a replacement right away at no additional cost, and you won\'t need to return the damaged item. Your satisfaction is our priority.'
    },

    // Subscriptions
    {
      id: '14',
      category: 'subscriptions',
      question: 'How do subscriptions work?',
      answer: 'Subscribe to any product and save 15% on every order, plus get free shipping. Choose your delivery frequency (30, 60, or 90 days), and we\'ll automatically send your products when you need them. You can skip, pause, or cancel anytime.'
    },
    {
      id: '15',
      category: 'subscriptions',
      question: 'Can I change my subscription frequency?',
      answer: 'Yes! Log into your account and adjust your delivery frequency anytime. Changes take effect for your next scheduled delivery. You can set different frequencies for different products.'
    },
    {
      id: '16',
      category: 'subscriptions',
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel anytime through your account dashboard or by contacting customer service. There are no cancellation fees or penalties. Consider pausing instead of cancelling to keep your discount for when you\'re ready to resume.'
    },
    {
      id: '17',
      category: 'subscriptions',
      question: 'Can I skip a delivery?',
      answer: 'Absolutely! Skip as many deliveries as you need through your account dashboard. Your next delivery will be pushed out by your regular frequency interval. You\'ll still maintain your subscriber benefits.'
    },

    // Account & Orders
    {
      id: '18',
      category: 'account',
      question: 'Do I need an account to place an order?',
      answer: 'No, you can checkout as a guest. However, creating an account lets you track orders, manage subscriptions, save addresses, view order history, and access exclusive member benefits.'
    },
    {
      id: '19',
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page and enter your email. We\'ll send you a reset link within minutes. For security, the link expires after 24 hours.'
    },
    {
      id: '20',
      category: 'account',
      question: 'Can I change or cancel my order?',
      answer: 'Orders can be modified or cancelled within 1 hour of placement. After that, orders enter our fulfillment process. Contact customer service immediately if you need to make changes - we\'ll do our best to help.'
    },
    {
      id: '21',
      category: 'account',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, Amex, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely through encrypted, PCI-compliant systems.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: '📚' },
    { id: 'products', name: 'Products & Ingredients', icon: '🧴' },
    { id: 'shipping', name: 'Shipping & Delivery', icon: '📦' },
    { id: 'returns', name: 'Returns & Refunds', icon: '↩️' },
    { id: 'subscriptions', name: 'Subscriptions', icon: '🔄' },
    { id: 'account', name: 'Account & Orders', icon: '👤' }
  ];

  const toggleItem = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredItems = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our products, shipping, and more</p>
        
        <div className="faq-search">
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="faq-container">
        <div className="faq-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="faq-content">
          {filteredItems.length === 0 ? (
            <div className="no-results">
              <h3>No results found</h3>
              <p>Try searching with different keywords or browse all categories</p>
            </div>
          ) : (
            <div className="faq-list">
              {filteredItems.map(item => (
                <div key={item.id} className="faq-item">
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={expandedItems.includes(item.id)}
                  >
                    <h3>{item.question}</h3>
                    <span className="toggle-icon">
                      {expandedItems.includes(item.id) ? '−' : '+'}
                    </span>
                  </button>
                  
                  {expandedItems.includes(item.id) && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="faq-contact">
          <h2>Still have questions?</h2>
          <p>Our customer service team is here to help</p>
          
          <div className="contact-options">
            <Link to="/contact" className="contact-card">
              <span className="contact-icon">💬</span>
              <h3>Contact Support</h3>
              <p>Get personalized help from our team</p>
            </Link>
            
            <a href="mailto:support@rawdog.com" className="contact-card">
              <span className="contact-icon">📧</span>
              <h3>Email Us</h3>
              <p>support@rawdog.com</p>
            </a>
            
            <a href="tel:1-800-729-3641" className="contact-card">
              <span className="contact-icon">📱</span>
              <h3>Call Us</h3>
              <p>1-800-RAWDOG1</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
