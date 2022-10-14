import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;
import ReviewEntry from './ReviewEntry.js'

const ReviewList = () => {
  return (
    <div id="review-list">
      Review List goes here
      <ReviewEntry />
      <button>More Reviews</button>
      <button>Add Review</button>
    </div>
  )
}

export default ReviewList