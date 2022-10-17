import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;
import ReviewEntry from './ReviewEntry.js'
import Sorting from './Sorting.js'

const ReviewList = ({reviews}) => {
  return (
    <div id="review-list">
      {reviews[0] && <p>{reviews.length} reviews, sorted by <Sorting /></p>}
      {reviews.map((review, index) => {
        return (
          <ReviewEntry key={index} review={review}/>
        )
      })}<div id="button-cont">

      <button className="review-button">More Reviews</button>
      <button className="review-button">Add Review +</button>
      </div>
    </div>
  )
}

export default ReviewList