import React from 'react';
import ReviewList from './components/ReviewList.js'
import RatingBreakdown from './components/RatingBreakdown.js'
import '../assets/ratingsStyles.css'
// import axios from 'axios';
const axios = require('axios');

const { useState, useEffect } = React;

const RatingsAndReviews = () => {
  const [currentProduct = setCurrentProduct] = useState(37311);
  const [reviews, setReviews] = useState([])
  const [metaReviews, setMetaReviews] = useState({})
  const [ratingAverage, setRatingAverage] = useState()

  const propComparator = (name) => {
    return function (a, b)  {
    if ( a[name] > b[name] ){
      // console.log(a[name])
      // console.log(b[name])
      return -1;
    }
    if ( a[name] < b[name] ){
      return 1;
    }
    return 0;
  }}

  const sortReviews = (name) => {
    let filter = name;
    let filteredReviews = [...reviews].sort(propComparator(filter))
    // console.log(filteredReviews)
    console.log(reviews)
    // setReviews([...reviews])

  }

  const reviewRequest = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : `reviews?product_id=${currentProduct}` }}).then((reviewData) => {
      // console.log('gotten', reviewData.data)
      setReviews(reviewData.data.results)
    }).catch(err => {
      console.log('error getting', err)
    })
  }
  const metaRequest = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : `reviews/meta?product_id=${currentProduct}` }}).then((reviewData) => {
      // console.log('gotten', reviewData.data)
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
        <button onClick={testButton} name="test-button">Rating Test</button>
        <div id="randr">
        <RatingBreakdown metaReviews={metaReviews} />
        <ReviewList reviews={reviews} sortReviews={sortReviews}/>
        </div>
      </div>
  )
}

export default RatingsAndReviews;