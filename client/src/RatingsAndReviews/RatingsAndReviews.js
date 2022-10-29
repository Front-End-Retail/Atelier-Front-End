import React from 'react';
import ReviewList from './Components/ReviewList.js';
import RatingBreakdown from './Components/RatingBreakdown.js';
import { format, parseISO } from "date-fns";
import {helpfulPerc, everyFunc} from './Components/helperFuncs';
import clicktracker from '../clicktracker.js'
import baseURL from '../baseURL.js'
const axios = require('axios');

const { useState, useEffect } = React;

const RatingsAndReviews = ({currentProductID, currentProductName, metaReviews}) => {
  const [reviews, setReviews] = useState([])
  const [starReviews, setStarReviews] = useState([])
  const [ratingAverage, setRatingAverage] = useState()
  const [starFilter, setStarFilter] = useState([false, false, false, false, false] )
  const [currentSort, setCurrentSort] = useState('relevant')

  // sort reviews for the dropdown menu, triggers get request with sort param for API
  const sortReviews = (name) => {
    axios.default.get(`/review`, { params: { specificURL : `reviews?product_id=${currentProductID}&count=500&sort=${name}` }}).then((reviewData) => {
      let reviewsArray = reviewData.data.results
      reviewsArray = reviewsArray.map(datum => {
        datum.date = format(parseISO(datum.date), 'MMMM d, yyyy')
        return datum
      })
      setReviews(reviewsArray)
      setStarReviews(reviewsArray)
      setCurrentSort(name)
    }).catch(err => {
      console.log('error getting', err)
    })
  }

// sort by star rating, 1-5, and toggle filter for each star
  const ratingSort = (toggleStar) => {
    // set the starFilter boolean
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

    // this function (from helper funcs) returns a boolean if no filters are applied
    let revertToAll = tempStarFilter.every(everyFunc)
    if (revertToAll) {
      setStarReviews([...reviews])
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
// update helpful OR report variable in the API
  const putRequest = (reviewId, path, clickedId) => {
    clicktracker(clickedId, 'RandR', new Date())
    console.log(reviewId)
    axios.default.put('/review/put', { review_id: reviewId, path: path }).then((data) => {
      console.log('successfully added')
      if(path === 'helpful') {
        // reviewRequest()
      }

    }).catch((err) => {
      console.log('error adding to helpfulness', err)
    })
  }

  // sort by relevance on initial render of reviews
  const reviewRequest = () => {
    axios.default.get(`${baseURL}/review`, { params: { specificURL : `reviews?product_id=${currentProductID}&count=500&sort=relevance` }}).then((reviewData) => {
      // console.log('review data:', reviewData.data)
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


useEffect(() => {
  reviewRequest()
  // metaRequest()
}, [currentProductID])
// need this to reset starfilter when reviews are reset to all with sort function. Refactor to work with sort function if you can!
useEffect(() => {
  setStarFilter([false, false, false, false, false])
}, [reviews])


  return (
      <div id="center-reviews">
        {/* <button onClick={testButton} name="test-button">Rating Test</button> */}
        {/* <div > */}
          {/* <div>search goes here</div> */}
        <div id="title"><h2 id="review-title">RATINGS & REVIEWS</h2></div>
        <div id="randr" data-testid="randr-div">
        <RatingBreakdown metaReviews={metaReviews} ratingSort={ratingSort} starFilter={starFilter}
         sortReviews={sortReviews} currentSort={currentSort}/>
        <ReviewList reviews={starReviews} sortReviews={sortReviews} metaReviews={metaReviews} putRequest={putRequest}
        currentProductName={currentProductName}/>
        </div>
      {/* </div> */}
      </div>
  )
}

export default RatingsAndReviews;