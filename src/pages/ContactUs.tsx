import React, { useState, FormEvent } from 'react';
import './ContactUs.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  orderNumber: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    subject: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In production, this would send to your backend API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        orderNumber: '',
        subject: 'general',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help with any questions about your skincare journey</p>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Our customer service team is available to assist you with orders, 
              product questions, and skincare advice.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>support@rawdog.com</p>
                <p className="response-time">Response within 24 hours</p>
              </div>

              <div className="contact-method">
                <h3>📱 Phone</h3>
                <p>1-800-RAWDOG1 (1-800-729-3641)</p>
                <p className="response-time">Mon-Fri: 9AM-6PM EST</p>
                <p className="response-time">Sat-Sun: 10AM-4PM EST</p>
              </div>

              <div className="contact-method">
                <h3>💬 Live Chat</h3>
                <p>Available on our website</p>
                <p className="response-time">Mon-Fri: 9AM-8PM EST</p>
              </div>

              <div className="contact-method">
                <h3>📮 Mailing Address</h3>
                <p>
                  rawdog Skincare<br />
                  123 Commerce Street, Suite 100<br />
                  Wilmington, DE 19801<br />
                  United States
                </p>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://instagram.com/rawdog" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  📷 Instagram
                </a>
                <a href="https://facebook.com/rawdog" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  📘 Facebook
                </a>
                <a href="https://twitter.com/rawdog" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  🐦 Twitter
                </a>
                <a href="https://tiktok.com/@rawdog" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  🎵 TikTok
                </a>
              </div>
            </div>

            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <ul>
                <li><a href="#shipping">Shipping & Delivery</a></li>
                <li><a href="#returns">Returns & Refunds</a></li>
                <li><a href="#subscription">Subscription Management</a></li>
                <li><a href="#ingredients">Product Ingredients</a></li>
                <li><a href="#skincare">Skincare Routine Help</a></li>
              </ul>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                Thank you for contacting us! We'll get back to you within 24 hours.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert alert-error">
                There was an error submitting your message. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Optional"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="orderNumber">Order Number</label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleInputChange}
                  placeholder="If applicable"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="return">Returns & Refunds</option>
                  <option value="subscription">Subscription</option>
                  <option value="product">Product Question</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  disabled={isSubmitting}
                  placeholder="How can we help you today?"
                />
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="additional-info">
          <div className="info-card">
            <h3>Business Hours</h3>
            <p>
              <strong>Customer Service:</strong><br />
              Monday - Friday: 9:00 AM - 6:00 PM EST<br />
              Saturday - Sunday: 10:00 AM - 4:00 PM EST
            </p>
            <p>
              <strong>Live Chat:</strong><br />
              Monday - Friday: 9:00 AM - 8:00 PM EST<br />
              Saturday - Sunday: Offline
            </p>
          </div>

          <div className="info-card">
            <h3>Response Times</h3>
            <p>
              We strive to respond to all inquiries as quickly as possible:
            </p>
            <ul>
              <li>Email: Within 24 hours</li>
              <li>Phone: Immediate during business hours</li>
              <li>Live Chat: Immediate during chat hours</li>
              <li>Social Media: Within 48 hours</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>For Press & Media</h3>
            <p>
              For press inquiries, product samples, or partnership opportunities, 
              please email us at <a href="mailto:press@rawdog.com">press@rawdog.com</a>
            </p>
          </div>

          <div className="info-card">
            <h3>Wholesale Inquiries</h3>
            <p>
              Interested in carrying rawdog products in your store? 
              Contact our wholesale team at <a href="mailto:wholesale@rawdog.com">wholesale@rawdog.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

