import React, { useState, useEffect } from 'react';
import './ReviewsSystem.css';

interface Review {
  id: string;
  customerName: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  helpful: number;
  skinType?: string;
  age?: string;
  productVariant?: string;
}

interface ReviewsSystemProps {
  productId: string;
  productName: string;
  averageRating: number;
  totalReviews: number;
}

const ReviewsSystem: React.FC<ReviewsSystemProps> = ({
  productId,
  productName,
  averageRating,
  totalReviews
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful'>('newest');
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;

  // Mock reviews data - in production this would come from an API
  const mockReviews: Review[] = [
    {
      id: '1',
      customerName: 'Marcus T.',
      rating: 5,
      title: 'Game Changer for Sensitive Skin',
      content: "I've always struggled with cleansers that either don't clean well or leave my skin feeling stripped. This one is perfect - gets everything off but my skin feels moisturized after. The fact that it's fragrance-free is a huge plus for my sensitive skin.",
      date: '2024-01-15',
      verified: true,
      helpful: 23,
      skinType: 'Sensitive',
      age: '25-34'
    },
    {
      id: '2',
      customerName: 'David L.',
      rating: 5,
      title: 'Perfect for Daily Use',
      content: "Use this every morning and evening. The texture is amazing and it doesn't foam up like crazy. My skin looks clearer and feels healthier since I started using it 3 months ago. Worth every penny.",
      date: '2024-01-10',
      verified: true,
      helpful: 18,
      skinType: 'Combination',
      age: '35-44'
    },
    {
      id: '3',
      customerName: 'James R.',
      rating: 5,
      title: 'Great for Shaving',
      content: "This works perfectly as a pre-shave cleanser. Softens the beard and prepares the skin without any irritation. Been using it for 3 months now and my razor burn has completely disappeared.",
      date: '2024-01-08',
      verified: true,
      helpful: 15,
      skinType: 'Normal',
      age: '25-34'
    },
    {
      id: '4',
      customerName: 'Alex M.',
      rating: 4,
      title: 'Gentle but Effective',
      content: "Really impressed with how gentle this is while still being effective. My only complaint is the price point, but the quality justifies it. Skin feels clean but never tight.",
      date: '2024-01-05',
      verified: true,
      helpful: 12,
      skinType: 'Dry',
      age: '45-54'
    },
    {
      id: '5',
      customerName: 'Ryan K.',
      rating: 5,
      title: 'Finally Found My Holy Grail',
      content: "After trying dozens of cleansers, this is the one. No irritation, no dryness, just clean, healthy-looking skin. The ingredient list is impressive - you can tell they really thought about what goes into this.",
      date: '2024-01-03',
      verified: true,
      helpful: 20,
      skinType: 'Sensitive',
      age: '25-34'
    }
  ];

  useEffect(() => {
    // In production, fetch reviews from API based on productId
    setReviews(mockReviews);
    setFilteredReviews(mockReviews);
  }, [productId]);

  useEffect(() => {
    let filtered = reviews;

    // Filter by rating
    if (selectedRating) {
      filtered = filtered.filter(review => review.rating === selectedRating);
    }

    // Sort reviews
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        case 'helpful':
          return b.helpful - a.helpful;
        default:
          return 0;
      }
    });

    setFilteredReviews(filtered);
    setCurrentPage(1);
  }, [reviews, selectedRating, sortBy]);

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className={`stars ${interactive ? 'interactive' : ''}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : ''}`}
            onClick={interactive ? () => {} : undefined}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review => {
      distribution[review.rating as keyof typeof distribution]++;
    });
    return distribution;
  };

  const distribution = getRatingDistribution();
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  // Create CSS custom properties for bar widths
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .rating-bar-5 .bar-fill { width: ${(distribution[5] / totalReviews) * 100}%; }
      .rating-bar-4 .bar-fill { width: ${(distribution[4] / totalReviews) * 100}%; }
      .rating-bar-3 .bar-fill { width: ${(distribution[3] / totalReviews) * 100}%; }
      .rating-bar-2 .bar-fill { width: ${(distribution[2] / totalReviews) * 100}%; }
      .rating-bar-1 .bar-fill { width: ${(distribution[1] / totalReviews) * 100}%; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [distribution, totalReviews]);

  return (
    <section className="reviews-system">
      <div className="container">
        <div className="reviews-header">
          <h2>Customer Reviews</h2>
          <div className="reviews-summary">
            <div className="rating-overview">
              <div className="average-rating">
                <span className="rating-number">{averageRating}</span>
                {renderStars(averageRating)}
                <span className="total-reviews">Based on {totalReviews} reviews</span>
              </div>
              
                              <div className="rating-distribution">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className={`rating-bar rating-bar-${rating}`}>
                    <button
                      className={`rating-filter ${selectedRating === rating ? 'active' : ''}`}
                      onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                    >
                      <span className="rating-label">{rating} star</span>
                      <div className="bar-container">
                        <div className="bar-fill"></div>
                      </div>
                      <span className="rating-count">({distribution[rating as keyof typeof distribution]})</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="review-actions">
              <button 
                className="write-review-btn"
                onClick={() => setShowWriteReview(true)}
              >
                Write a Review
              </button>
            </div>
          </div>
        </div>

        <div className="reviews-controls">
          <div className="sort-controls">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
          
          <div className="filter-info">
            {selectedRating && (
              <div className="active-filter">
                Showing {selectedRating}-star reviews
                <button onClick={() => setSelectedRating(null)}>×</button>
              </div>
            )}
            <span className="results-count">
              {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        <div className="reviews-list">
          {currentReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.customerName}</span>
                  {review.verified && <span className="verified-badge">Verified Purchase</span>}
                  <div className="review-meta">
                    {review.skinType && <span className="skin-type">Skin Type: {review.skinType}</span>}
                    {review.age && <span className="age">Age: {review.age}</span>}
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                  <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="review-content">
                <h4 className="review-title">{review.title}</h4>
                <p className="review-text">{review.content}</p>
              </div>
              
              <div className="review-footer">
                <button className="helpful-btn">
                  Helpful ({review.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="page-btn"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            
            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`page-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button 
              className="page-btn"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}

        {showWriteReview && (
          <div className="write-review-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Write a Review for {productName}</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowWriteReview(false)}
                >
                  ×
                </button>
              </div>
              
              <form className="review-form">
                <div className="form-group">
                  <label>Overall Rating</label>
                  {renderStars(0, true)}
                </div>
                
                <div className="form-group">
                  <label htmlFor="review-title">Review Title</label>
                  <input 
                    type="text" 
                    id="review-title"
                    placeholder="Summarize your experience"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="review-content">Your Review</label>
                  <textarea 
                    id="review-content"
                    rows={5}
                    placeholder="Tell others about your experience with this product"
                  ></textarea>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="skin-type">Skin Type</label>
                    <select id="skin-type">
                      <option value="">Select...</option>
                      <option value="Normal">Normal</option>
                      <option value="Dry">Dry</option>
                      <option value="Oily">Oily</option>
                      <option value="Combination">Combination</option>
                      <option value="Sensitive">Sensitive</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="age-range">Age Range</label>
                    <select id="age-range">
                      <option value="">Select...</option>
                      <option value="18-24">18-24</option>
                      <option value="25-34">25-34</option>
                      <option value="35-44">35-44</option>
                      <option value="45-54">45-54</option>
                      <option value="55+">55+</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-actions">
                  <button type="button" onClick={() => setShowWriteReview(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-review-btn">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSystem;
