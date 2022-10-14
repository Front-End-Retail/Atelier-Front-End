import React from 'react';
import ReviewList from './components/ReviewList.js'
import RatingBreakdown from './components/RatingBreakdown.js'
import '../assets/ratingsStyles.css'
// import axios from 'axios';
const axios = require('axios');

const { useState, useEffect } = React;

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState([])

  const tryARequest = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : 'reviews?product_id=37311' }}).then((reviewData) => {
      console.log('gotten', reviewData.data)
      setReviews(reviewData.data.results)
    }).catch(err => {
      console.log('error getting', err)
    })
  }
  const testButton = () => {
    tryARequest()
  }

useEffect(() => {
  // fetchReviews()
})
  return (
      <div id="randr">
        <RatingBreakdown />
        <ReviewList />
        <button onClick={testButton}>Rating Test</button>
      </div>
  )
}

export default RatingsAndReviews;