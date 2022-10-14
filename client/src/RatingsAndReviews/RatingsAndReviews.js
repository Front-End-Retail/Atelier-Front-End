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
  const [ratingAverage, setRatingAverage] = useState()

  const reviewRequest = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : 'reviews?product_id=37311' }}).then((reviewData) => {
      console.log('gotten', reviewData.data)
      setReviews(reviewData.data.results)
    }).catch(err => {
      console.log('error getting', err)
    })
  }
  const metaRequest = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : 'reviews/meta?product_id=37311' }}).then((reviewData) => {
      console.log('gotten', reviewData.data)
      setMetaReviews(reviewData.data)
    }).catch(err => {
      console.log('error getting', err)
    })
  }
  const testButton = () => {
    reviewRequest( setReviews)
    metaRequest()
  }

useEffect(() => {
  // fetchReviews()
})
  return (
      <div >
        <button onClick={testButton}>Rating Test</button>
        <div id="randr">
        <RatingBreakdown metaReviews={metaReviews}/>
        <ReviewList reviews={reviews}/>
        </div>
      </div>
  )
}

export default RatingsAndReviews;