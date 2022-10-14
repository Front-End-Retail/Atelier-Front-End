import React from 'react';
import ReviewList from './components/ReviewList.js'
import RatingBreakdown from './components/RatingBreakdown.js'
import '../assets/ratingsStyles.css'
// import axios from 'axios';
const axios = require('axios');

const { useState, useEffect } = React;

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState([])
  const [metaReviews, setMetaReviews] = useState({})

  const reviewRequest = (query, func = () => {}) => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : query }}).then((reviewData) => {
      console.log('gotten', reviewData.data)
      func(reviewData.data.results)
    }).catch(err => {
      console.log('error getting', err)
    })
  }
  const testButton = () => {
    reviewRequest('reviews?product_id=37311', setReviews)
    reviewRequest('reviews/meta?product_id=37311', setMetaReviews)
  }

useEffect(() => {
  // fetchReviews()
})
  return (
      <div id="randr">
        <RatingBreakdown />
        <ReviewList reviews={reviews}/>
        <button onClick={testButton}>Rating Test</button>
      </div>
  )
}

export default RatingsAndReviews;