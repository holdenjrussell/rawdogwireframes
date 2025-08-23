import React, { useState } from 'react';
import './ManageSubscription.css';

interface Subscription {
  id: string;
  product: string;
  frequency: number;
  nextDelivery: string;
  price: string;
  discount: string;
  status: 'active' | 'paused' | 'cancelled';
}

const ManageSubscription: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: '1',
      product: 'Complete Routine Bundle',
      frequency: 60,
      nextDelivery: 'February 15, 2025',
      price: '$83.30',
      discount: '15%',
      status: 'active'
    },
    {
      id: '2',
      product: 'Face Moisturizer',
      frequency: 30,
      nextDelivery: 'January 28, 2025',
      price: '$40.80',
      discount: '15%',
      status: 'active'
    }
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [showCancelModal, setShowCancelModal] = useState<string | null>(null);

  const handleFrequencyChange = (id: string, newFrequency: number) => {
    setSubscriptions(prev => 
      prev.map(sub => 
        sub.id === id ? { ...sub, frequency: newFrequency } : sub
      )
    );
    setEditingId(null);
  };

  const handlePauseToggle = (id: string) => {
    setSubscriptions(prev => 
      prev.map(sub => 
        sub.id === id 
          ? { ...sub, status: sub.status === 'active' ? 'paused' : 'active' } 
          : sub
      )
    );
  };

  const handleCancel = (id: string) => {
    setSubscriptions(prev => 
      prev.map(sub => 
        sub.id === id ? { ...sub, status: 'cancelled' } : sub
      )
    );
    setShowCancelModal(null);
  };

  const handleSkipDelivery = (id: string) => {
    // Calculate new date (add frequency days to current next delivery)
    const sub = subscriptions.find(s => s.id === id);
    if (sub) {
      const currentDate = new Date(sub.nextDelivery);
      currentDate.setDate(currentDate.getDate() + sub.frequency);
      const newDate = currentDate.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      });
      
      setSubscriptions(prev => 
        prev.map(s => 
          s.id === id ? { ...s, nextDelivery: newDate } : s
        )
      );
    }
  };

  return (
    <div className="subscription-page">
      <div className="subscription-container">
        <h1>Manage Subscriptions</h1>
        <p className="page-subtitle">Control your auto-delivery schedule and save 15% on every order</p>

        <div className="subscription-benefits">
          <div className="benefit">
            <span className="benefit-icon">💰</span>
            <span>15% off every order</span>
          </div>
          <div className="benefit">
            <span className="benefit-icon">🚚</span>
            <span>Free shipping always</span>
          </div>
          <div className="benefit">
            <span className="benefit-icon">⏸️</span>
            <span>Pause or skip anytime</span>
          </div>
          <div className="benefit">
            <span className="benefit-icon">🎁</span>
            <span>Exclusive member perks</span>
          </div>
        </div>

        {subscriptions.length === 0 ? (
          <div className="no-subscriptions">
            <h2>No Active Subscriptions</h2>
            <p>Start a subscription to save 15% on every order and get free shipping!</p>
            <button className="btn-primary">Shop Products</button>
          </div>
        ) : (
          <div className="subscriptions-list">
            {subscriptions.map((subscription) => (
              <div key={subscription.id} className={`subscription-card ${subscription.status}`}>
                {subscription.status === 'cancelled' && (
                  <div className="status-banner cancelled">
                    This subscription has been cancelled
                  </div>
                )}
                {subscription.status === 'paused' && (
                  <div className="status-banner paused">
                    This subscription is paused
                  </div>
                )}
                
                <div className="subscription-header">
                  <div className="product-info">
                    <h3>{subscription.product}</h3>
                    <div className="subscription-details">
                      <span className="price">{subscription.price}</span>
                      <span className="discount-badge">Save {subscription.discount}</span>
                    </div>
                  </div>
                  <div className={`status-indicator ${subscription.status}`}>
                    {subscription.status === 'active' ? '✓ Active' : 
                     subscription.status === 'paused' ? '⏸ Paused' : '✗ Cancelled'}
                  </div>
                </div>

                <div className="subscription-body">
                  <div className="delivery-info">
                    <div className="info-row">
                      <span className="label">Delivery Frequency:</span>
                      {editingId === subscription.id ? (
                        <select 
                          value={subscription.frequency}
                          onChange={(e) => handleFrequencyChange(subscription.id, Number(e.target.value))}
                          onBlur={() => setEditingId(null)}
                        >
                          <option value={30}>Every 30 days</option>
                          <option value={45}>Every 45 days</option>
                          <option value={60}>Every 60 days</option>
                          <option value={90}>Every 90 days</option>
                        </select>
                      ) : (
                        <span className="value">
                          Every {subscription.frequency} days
                          {subscription.status === 'active' && (
                            <button 
                              className="edit-btn"
                              onClick={() => setEditingId(subscription.id)}
                            >
                              Edit
                            </button>
                          )}
                        </span>
                      )}
                    </div>
                    
                    <div className="info-row">
                      <span className="label">Next Delivery:</span>
                      <span className="value">
                        {subscription.status === 'active' ? subscription.nextDelivery : 'N/A'}
                      </span>
                    </div>
                  </div>

                  {subscription.status === 'active' && (
                    <div className="subscription-actions">
                      <button 
                        className="btn-secondary"
                        onClick={() => handleSkipDelivery(subscription.id)}
                      >
                        Skip Next Delivery
                      </button>
                      <button 
                        className="btn-secondary"
                        onClick={() => handlePauseToggle(subscription.id)}
                      >
                        Pause Subscription
                      </button>
                      <button 
                        className="btn-danger"
                        onClick={() => setShowCancelModal(subscription.id)}
                      >
                        Cancel Subscription
                      </button>
                    </div>
                  )}

                  {subscription.status === 'paused' && (
                    <div className="subscription-actions">
                      <button 
                        className="btn-primary"
                        onClick={() => handlePauseToggle(subscription.id)}
                      >
                        Resume Subscription
                      </button>
                      <button 
                        className="btn-danger"
                        onClick={() => setShowCancelModal(subscription.id)}
                      >
                        Cancel Subscription
                      </button>
                    </div>
                  )}

                  {subscription.status === 'cancelled' && (
                    <div className="subscription-actions">
                      <button className="btn-primary">
                        Reactivate Subscription
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <section className="subscription-faq">
          <h2>Subscription FAQ</h2>
          
          <div className="faq-grid">
            <div className="faq-card">
              <h3>How do I change my delivery frequency?</h3>
              <p>
                Click the "Edit" button next to your current frequency and select a new option. 
                Changes take effect immediately for your next delivery.
              </p>
            </div>
            
            <div className="faq-card">
              <h3>Can I skip a delivery?</h3>
              <p>
                Yes! Click "Skip Next Delivery" to push your next shipment out by your regular 
                frequency interval. You can skip as many deliveries as you need.
              </p>
            </div>
            
            <div className="faq-card">
              <h3>What happens when I pause?</h3>
              <p>
                Pausing stops all future deliveries until you resume. Your discount and benefits 
                remain active, and you can resume anytime.
              </p>
            </div>
            
            <div className="faq-card">
              <h3>Can I add products to my subscription?</h3>
              <p>
                Yes! Shop any product and select "Subscribe & Save" at checkout. Each product 
                can have its own delivery schedule.
              </p>
            </div>
            
            <div className="faq-card">
              <h3>How do I update my shipping address?</h3>
              <p>
                Go to your account settings to update your shipping address. Changes apply to 
                all future subscription deliveries.
              </p>
            </div>
            
            <div className="faq-card">
              <h3>When am I charged?</h3>
              <p>
                You're charged 3 days before each delivery ships. You'll receive an email 
                reminder before each charge.
              </p>
            </div>
          </div>
        </section>

        <section className="subscription-perks">
          <h2>Subscriber Perks</h2>
          <div className="perks-grid">
            <div className="perk-card">
              <span className="perk-icon">🎁</span>
              <h3>Birthday Gift</h3>
              <p>Special surprise on your birthday</p>
            </div>
            <div className="perk-card">
              <span className="perk-icon">⚡</span>
              <h3>Early Access</h3>
              <p>Shop new products before anyone else</p>
            </div>
            <div className="perk-card">
              <span className="perk-icon">💎</span>
              <h3>VIP Support</h3>
              <p>Priority customer service</p>
            </div>
            <div className="perk-card">
              <span className="perk-icon">🎯</span>
              <h3>Exclusive Offers</h3>
              <p>Member-only promotions</p>
            </div>
          </div>
        </section>

        {/* Cancel Modal */}
        {showCancelModal && (
          <div className="modal-overlay" onClick={() => setShowCancelModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Are you sure you want to cancel?</h2>
              <p>You'll lose your 15% discount and free shipping benefits.</p>
              
              <div className="cancel-alternatives">
                <h3>Before you go, consider:</h3>
                <button 
                  className="alternative-btn"
                  onClick={() => {
                    handlePauseToggle(showCancelModal);
                    setShowCancelModal(null);
                  }}
                >
                  <span className="icon">⏸️</span>
                  <div>
                    <strong>Pause Instead</strong>
                    <p>Take a break and resume anytime</p>
                  </div>
                </button>
                
                <button 
                  className="alternative-btn"
                  onClick={() => {
                    handleSkipDelivery(showCancelModal);
                    setShowCancelModal(null);
                  }}
                >
                  <span className="icon">⏭️</span>
                  <div>
                    <strong>Skip Delivery</strong>
                    <p>Push out your next shipment</p>
                  </div>
                </button>
                
                <button 
                  className="alternative-btn"
                  onClick={() => setShowCancelModal(null)}
                >
                  <span className="icon">📅</span>
                  <div>
                    <strong>Change Frequency</strong>
                    <p>Receive products less often</p>
                  </div>
                </button>
              </div>
              
              <div className="modal-actions">
                <button 
                  className="btn-primary"
                  onClick={() => setShowCancelModal(null)}
                >
                  Keep Subscription
                </button>
                <button 
                  className="btn-text"
                  onClick={() => handleCancel(showCancelModal)}
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageSubscription;
