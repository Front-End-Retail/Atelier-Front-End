import React from 'react';
import ReviewList from './components/ReviewList.js'
import RatingBreakdown from './components/RatingBreakdown.js'
import { format, parseISO } from "date-fns";
import '../assets/ratingsStyles.css'
// import axios from 'axios';
const axios = require('axios');

const { useState, useEffect } = React;

const RatingsAndReviews = ({currentProductId}) => {
  const [currentProduct, setCurrentProduct] = useState(37311)
  const [reviews, setReviews] = useState([])
  const [metaReviews, setMetaReviews] = useState({})
  const [ratingAverage, setRatingAverage] = useState()

  const propComparator = (name) => {
    if (name === 'helpfulness') {
    return function (a, b)  {
    if ( a[name] < b[name] ){
      // console.log(a[name])
      // console.log(b[name])
      return -1;
    }
    if ( a[name] > b[name] ){
      return 1;
    }
    return 0;
  } } else if (name === 'date') {
    return function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    };
  } else {
    return function (a, b)  {
      let random = Math.floor(Math.random() * 2)
      return (random === 0 ? new Date(b.date) - new Date(a.date) : b.helpfulness - a.helpfulness)
    }
  }
  }
  const sortReviews = (name) => {
    let filter = name;
    let filteredReviews = [...reviews].sort(propComparator(filter))
    // console.log(filteredReviews)
    console.log(reviews)
    console.log(filteredReviews)
    setReviews([...filteredReviews])

  }

  const reviewRequest = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : `reviews?product_id=${currentProduct}` }}).then((reviewData) => {
      // console.log('gotten', reviewData.data)
      let reviewsArray = reviewData.data.results
      reviewsArray = reviewsArray.map(datum => {
        datum.date = format(parseISO(datum.date), 'MMMM d, yyyy')
        return datum
      })
      console.log(reviewsArray)
      setReviews(reviewsArray)
    }).catch(err => {
      console.log('error getting', err)
    })
  }
  const metaRequest = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : `reviews/meta?product_id=${currentProduct}` }}).then((reviewData) => {
      console.log('gotten', reviewData.data)
      setMetaReviews(reviewData.data)
    }).catch(err => {
      console.log('error getting', err)
    })
  }
  const testButton = () => {
    reviewRequest()
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