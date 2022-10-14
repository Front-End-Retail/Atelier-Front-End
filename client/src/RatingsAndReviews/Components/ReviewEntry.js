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
    </div>
  )
}

export default ReviewEntry