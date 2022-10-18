import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;
import ReviewEntry from './ReviewEntry.js'
import Sorting from './Sorting.js'

const ReviewList = ({reviews, sortReviews}) => {
  const [displayNum, setDisplayNum] = useState(2)
  const [currentReviews, setCurrentReviews] = useState([])
  const passSortingName = (name) => {
    sortReviews(name)
  }
  useEffect(() => {
    setCurrentReviews(reviews.slice(0, displayNum))
  }, [reviews, displayNum])

  const moreReviews = () => {
    if (displayNum + 1 < reviews.length) {
      setDisplayNum(displayNum + 2)
    } else if (displayNum + 1 === reviews.length ) {
      setDisplayNum(displayNum + 1)
    }
  }
  return (
    <div id="review-list">
      {reviews[0] && <p>{reviews.length} reviews, sorted by <Sorting reviews={reviews} passSortingName={passSortingName}/></p>}
      {currentReviews.length > 0 && currentReviews.map((review, index) => {
        return (
          <ReviewEntry key={index} review={review}/>
        )
      })}<div id="button-cont">

      {displayNum !== reviews.length && <button className="review-button" onClick={moreReviews}>More Reviews</button>}
      <button className="review-button">Add Review +</button>
      </div>
    </div>
  )
}

export default ReviewList