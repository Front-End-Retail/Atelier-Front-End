import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;
import ReviewEntry from './ReviewEntry.js'

const ReviewList = ({reviews}) => {
  return (
    <div id="review-list">
      Review List goes here
      {reviews.map((review, index) => {
        return (
          <ReviewEntry key={index} review={review}/>
        )
      })}
      <button>More Reviews</button>
      <button>Add Review</button>
    </div>
  )
}

export default ReviewList