import React from 'react';
import ReviewList from './components/ReviewList.js'
import RatingBreakdown from './components/RatingBreakdown.js'
import { format, parseISO } from "date-fns";
import '../assets/ratingsStyles.css';
import {helpfulPerc} from './components/helperFuncs';
// import axios from 'axios';
const axios = require('axios');

const { useState, useEffect } = React;

const RatingsAndReviews = ({currentProductId}) => {
  const [currentProduct, setCurrentProduct] = useState(37311)
  const [reviews, setReviews] = useState([])
  const [starReviews, setStarReviews] = useState([])
  const [metaReviews, setMetaReviews] = useState({})
  const [ratingAverage, setRatingAverage] = useState()
  const [starFilter, setStarFilter] = useState([false, false, false, false, false])

  const sortReviews = (name) => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : `reviews?product_id=${currentProduct}&count=500&sort=${name}` }}).then((reviewData) => {
      // console.log('gotten', reviewData.data)
      let reviewsArray = reviewData.data.results
      reviewsArray = reviewsArray.map(datum => {
        datum.date = format(parseISO(datum.date), 'MMMM d, yyyy')
        return datum
      })
      setReviews(reviewsArray)
      setStarReviews(reviewsArray)
    }).catch(err => {
      console.log('error getting', err)
    })
  }
// sort by star rating, 1-5, and toggle filter for each star
  const ratingSort = (toggleStar) => {
    // console.log(toggleStar)
    // set the starFiler boolean
    let tempStarFilter = [...starFilter]
    tempStarFilter = tempStarFilter.map((star, index) => {
      if (index + 1 === Number(toggleStar)) {
        return !star
      } else {
        return star
      }
    })
    setStarFilter([...tempStarFilter]);
    let tempStarReviews = [...reviews]
    let everyFunc = (currentStar) => {
      return !currentStar
    }
    let revertToAll = tempStarFilter.every(everyFunc)
    if (revertToAll) {
      setStarReviews(reviews)
    } else {
      tempStarReviews = tempStarReviews.filter(review => {
        let tempStar = Number(review.rating) - 1
        if (tempStarFilter[tempStar]) {
          return true
        }

      })
      setStarReviews([...tempStarReviews])
    }

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
      setStarReviews(reviewsArray)
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
  reviewRequest()
  metaRequest()
}, [])


  return (
      <div >
        <button onClick={testButton} name="test-button">Rating Test</button>
        <div id="randr">
        <RatingBreakdown metaReviews={metaReviews} ratingSort={ratingSort}/>
        <ReviewList reviews={starReviews} sortReviews={sortReviews}/>
        </div>
      </div>
  )
}

export default RatingsAndReviews;