import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface Address {
  type: 'shipping' | 'billing';
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered';
  total: string;
  items: number;
  trackingNumber?: string;
}

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567'
  });

  const [addresses] = useState<Address[]>([
    {
      type: 'shipping',
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main Street',
      address2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States',
      isDefault: true
    },
    {
      type: 'billing',
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main Street',
      address2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States',
      isDefault: true
    }
  ]);

  const [orders] = useState<Order[]>([
    {
      id: 'RD-2025-001',
      date: 'January 15, 2025',
      status: 'delivered',
      total: '$118.00',
      items: 3,
      trackingNumber: '1Z999AA10123456784'
    },
    {
      id: 'RD-2024-089',
      date: 'December 28, 2024',
      status: 'delivered',
      total: '$48.00',
      items: 1,
      trackingNumber: '1Z999AA10123456783'
    }
  ]);

  const handleSaveInfo = () => {
    setIsEditing(false);
    // In production, this would save to backend
    alert('Account information updated successfully!');
  };

  return (
    <div className="account-page">
      <div className="account-container">
        <h1>My Account</h1>
        
        <div className="account-layout">
          <aside className="account-sidebar">
            <nav className="account-nav">
              <button
                className={activeTab === 'overview' ? 'active' : ''}
                onClick={() => setActiveTab('overview')}
              >
                <span className="nav-icon">👤</span>
                Account Overview
              </button>
              <button
                className={activeTab === 'orders' ? 'active' : ''}
                onClick={() => setActiveTab('orders')}
              >
                <span className="nav-icon">📦</span>
                Order History
              </button>
              <button
                className={activeTab === 'subscriptions' ? 'active' : ''}
                onClick={() => setActiveTab('subscriptions')}
              >
                <span className="nav-icon">🔄</span>
                Subscriptions
              </button>
              <button
                className={activeTab === 'addresses' ? 'active' : ''}
                onClick={() => setActiveTab('addresses')}
              >
                <span className="nav-icon">📍</span>
                Addresses
              </button>
              <button
                className={activeTab === 'payment' ? 'active' : ''}
                onClick={() => setActiveTab('payment')}
              >
                <span className="nav-icon">💳</span>
                Payment Methods
              </button>
              <button
                className={activeTab === 'preferences' ? 'active' : ''}
                onClick={() => setActiveTab('preferences')}
              >
                <span className="nav-icon">⚙️</span>
                Preferences
              </button>
              <button className="logout-btn">
                <span className="nav-icon">🚪</span>
                Sign Out
              </button>
            </nav>
          </aside>

          <main className="account-content">
            {activeTab === 'overview' && (
              <div className="tab-content">
                <h2>Account Overview</h2>
                
                <div className="overview-grid">
                  <div className="overview-card">
                    <h3>Personal Information</h3>
                    {!isEditing ? (
                      <>
                        <div className="info-row">
                          <span className="label">Name:</span>
                          <span className="value">{userInfo.firstName} {userInfo.lastName}</span>
                        </div>
                        <div className="info-row">
                          <span className="label">Email:</span>
                          <span className="value">{userInfo.email}</span>
                        </div>
                        <div className="info-row">
                          <span className="label">Phone:</span>
                          <span className="value">{userInfo.phone}</span>
                        </div>
                        <button 
                          className="btn-secondary"
                          onClick={() => setIsEditing(true)}
                        >
                          Edit Information
                        </button>
                      </>
                    ) : (
                      <form onSubmit={(e) => { e.preventDefault(); handleSaveInfo(); }}>
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input 
                            id="firstName"
                            type="text" 
                            value={userInfo.firstName}
                            onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input 
                            id="lastName"
                            type="text" 
                            value={userInfo.lastName}
                            onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input 
                            id="email"
                            type="email" 
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input 
                            id="phone"
                            type="tel" 
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                          />
                        </div>
                        <div className="form-actions">
                          <button type="submit" className="btn-primary">Save</button>
                          <button 
                            type="button" 
                            className="btn-text"
                            onClick={() => setIsEditing(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    )}
                  </div>

                  <div className="overview-card">
                    <h3>Quick Stats</h3>
                    <div className="stats-grid">
                      <div className="stat">
                        <span className="stat-value">2</span>
                        <span className="stat-label">Total Orders</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">2</span>
                        <span className="stat-label">Active Subscriptions</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">$166</span>
                        <span className="stat-label">Total Spent</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">$24.90</span>
                        <span className="stat-label">Total Saved</span>
                      </div>
                    </div>
                  </div>

                  <div className="overview-card">
                    <h3>Loyalty Status</h3>
                    <div className="loyalty-info">
                      <div className="loyalty-tier">
                        <span className="tier-icon">🥈</span>
                        <span className="tier-name">Silver Member</span>
                      </div>
                      <div className="loyalty-progress">
                        <div className="progress-bar">
                          <div className="progress-fill progress-33"></div>
                        </div>
                        <p>$334 away from Gold status</p>
                      </div>
                      <div className="loyalty-benefits">
                        <h4>Your Benefits:</h4>
                        <ul>
                          <li>15% off subscriptions</li>
                          <li>Free shipping on all orders</li>
                          <li>Early access to new products</li>
                          <li>Birthday gift</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="tab-content">
                <h2>Order History</h2>
                
                <div className="orders-list">
                  {orders.map((order) => (
                    <div key={order.id} className="order-card">
                      <div className="order-header">
                        <div className="order-info">
                          <h3>Order #{order.id}</h3>
                          <p>{order.date}</p>
                        </div>
                        <div className={`order-status ${order.status}`}>
                          {order.status === 'delivered' ? '✓ Delivered' :
                           order.status === 'shipped' ? '🚚 Shipped' : '⏳ Processing'}
                        </div>
                      </div>
                      
                      <div className="order-body">
                        <div className="order-details">
                          <span>{order.items} items</span>
                          <span className="separator">•</span>
                          <span className="order-total">{order.total}</span>
                        </div>
                        
                        {order.trackingNumber && (
                          <div className="tracking-info">
                            <span>Tracking: {order.trackingNumber}</span>
                          </div>
                        )}
                        
                        <div className="order-actions">
                          <button className="btn-secondary">View Details</button>
                          <button className="btn-secondary">Track Package</button>
                          <button className="btn-secondary">Buy Again</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'subscriptions' && (
              <div className="tab-content">
                <h2>Subscriptions</h2>
                <p>Manage your subscription deliveries and save 15% on every order.</p>
                <Link to="/subscription" className="btn-primary">
                  Manage Subscriptions →
                </Link>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="tab-content">
                <h2>Saved Addresses</h2>
                
                <div className="addresses-grid">
                  {addresses.map((address, index) => (
                    <div key={index} className="address-card">
                      <div className="address-header">
                        <h3>{address.type === 'shipping' ? 'Shipping' : 'Billing'} Address</h3>
                        {address.isDefault && <span className="default-badge">Default</span>}
                      </div>
                      <div className="address-body">
                        <p>{address.firstName} {address.lastName}</p>
                        <p>{address.address1}</p>
                        {address.address2 && <p>{address.address2}</p>}
                        <p>{address.city}, {address.state} {address.zip}</p>
                        <p>{address.country}</p>
                      </div>
                      <div className="address-actions">
                        <button className="btn-text">Edit</button>
                        <button className="btn-text">Delete</button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="address-card add-new">
                    <button className="add-address-btn">
                      <span>+</span>
                      <span>Add New Address</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="tab-content">
                <h2>Payment Methods</h2>
                
                <div className="payment-methods">
                  <div className="payment-card">
                    <div className="payment-icon">💳</div>
                    <div className="payment-info">
                      <h3>Visa ending in 4242</h3>
                      <p>Expires 12/2025</p>
                    </div>
                    <div className="payment-actions">
                      <span className="default-badge">Default</span>
                      <button className="btn-text">Remove</button>
                    </div>
                  </div>
                  
                  <button className="add-payment-btn">
                    <span>+</span>
                    <span>Add Payment Method</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="tab-content">
                <h2>Communication Preferences</h2>
                
                <div className="preferences-section">
                  <h3>Email Notifications</h3>
                  <div className="preference-item">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Order updates and shipping notifications</span>
                    </label>
                  </div>
                  <div className="preference-item">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Promotional emails and special offers</span>
                    </label>
                  </div>
                  <div className="preference-item">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>New product launches</span>
                    </label>
                  </div>
                  <div className="preference-item">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Skincare tips and educational content</span>
                    </label>
                  </div>
                </div>

                <div className="preferences-section">
                  <h3>SMS Notifications</h3>
                  <div className="preference-item">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Order and shipping updates</span>
                    </label>
                  </div>
                  <div className="preference-item">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Exclusive SMS-only offers</span>
                    </label>
                  </div>
                </div>

                <div className="preferences-section">
                  <h3>Privacy Settings</h3>
                  <div className="preference-item">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Allow personalized product recommendations</span>
                    </label>
                  </div>
                  <div className="preference-item">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Share data for improved shopping experience</span>
                    </label>
                  </div>
                </div>

                <button className="btn-primary">Save Preferences</button>

                <div className="data-management">
                  <h3>Data Management</h3>
                  <p>Control how we handle your personal information</p>
                  <div className="data-actions">
                    <button className="btn-secondary">Download My Data</button>
                    <button className="btn-secondary">Delete My Account</button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Account;
