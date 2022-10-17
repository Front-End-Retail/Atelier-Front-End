import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;

const ReviewEntry = ({review}) => {
  return (
    <div className="review-entry">
      <p>{review.rating}</p>
      <h4>{review.summary}</h4>
      <p>{review.body}</p>
      {review.recommend && <p>I recommend this product!</p>}
      <p>Helpful?<a className="review-links">Yes</a><a className="review-links toggle-line">Report</a></p>
    </div>
  )
}

export default ReviewEntry