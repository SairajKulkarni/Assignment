import React, { useState } from "react";
import "./ReviewsStyles.css";
import reviewsData from "./ReviewsData";

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length);
  };

  const handlePrevReview = () => {
    setCurrentReview(
      (prevReview) => (prevReview - 1 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <div className="reviews-section">
      <h2>Recent Dissertation Writing Services Reviews</h2>
      <div className="review-box">
        <p>{'"' + reviewsData[currentReview].review + '"'}</p>
        <div className="rating">{reviewsData[currentReview].rating}</div>
        <div className="reviewer">{reviewsData[currentReview].name}</div>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevReview}>Previous</button>
        <button onClick={handleNextReview}>Next</button>
      </div>
    </div>
  );
};

export default ReviewsSection;
