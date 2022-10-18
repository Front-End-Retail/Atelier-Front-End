import React from 'react';
import ReviewList from './components/ReviewList.js'
import RatingBreakdown from './components/RatingBreakdown.js'
import { format, parseISO } from "date-fns";
import '../assets/ratingsStyles.css'
import {helpfulPerc} from './components/helperFuncs'
// import axios from 'axios';
const axios = require('axios');

const { useState, useEffect } = React;

const RatingsAndReviews = ({currentProductId}) => {
  const [currentProduct, setCurrentProduct] = useState(37311)
  const [reviews, setReviews] = useState([])
  const [metaReviews, setMetaReviews] = useState({})
  const [ratingAverage, setRatingAverage] = useState()

  const sortReviews = (name) => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : `reviews?product_id=${currentProduct}&count=500&sort=${name}` }}).then((reviewData) => {
      // console.log('gotten', reviewData.data)
      let reviewsArray = reviewData.data.results
      reviewsArray = reviewsArray.map(datum => {
        datum.date = format(parseISO(datum.date), 'MMMM d, yyyy')
        return datum
      })
      setReviews(reviewsArray)
    }).catch(err => {
      console.log('error getting', err)
    })
  }

  const ratingSort = (star ) => {

  }

  const reviewRequest = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : `reviews?product_id=${currentProduct}&count=500` }}).then((reviewData) => {
      // console.log('gotten', reviewData.data)
      let reviewsArray = reviewData.data.results
      reviewsArray = reviewsArray.map(datum => {
        datum.date = format(parseISO(datum.date), 'MMMM d, yyyy')
        return datum
      })
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