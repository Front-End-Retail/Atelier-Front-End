import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;
import ReviewEntry from './ReviewEntry.js';
import Sorting from './Sorting.js';
import ReviewModal from './ReviewModal.js';
import SearchReviews from './SearchReviews.js';
import UseReviewModal from './UseReviewModal.js';

const ReviewList = ({reviews, sortReviews, metaReviews, putRequest}) => {
  const [displayNum, setDisplayNum] = useState(2)
  const [currentReviews, setCurrentReviews] = useState([])
  const [searchReviews, setSearchReviews] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const passSortingName = (name) => {
    sortReviews(name)
  }
  // change reviews whenever reviews from parent change
  useEffect(() => {
      setCurrentReviews(reviews.slice(0, displayNum))
    if (searchTerm.length < 3) {
      setSearchReviews(reviews.slice(0, displayNum))
    } else {
      let searchedReviews = [...reviews]
      searchedReviews = searchedReviews.filter(review => {
        let reviewBody = review.body.toLowerCase()
        if (reviewBody.indexOf(searchTerm) !== -1) {
          return review
        }
      })
      console.log('searching...', searchedReviews)
      setSearchReviews(searchedReviews.slice(0, displayNum))
    }

  }, [reviews, displayNum])

  // update search reviews using search term
  useEffect(() => {
    if (searchTerm.length < 3) {
      setSearchReviews(currentReviews)
    } else {
      let searchedReviews = [...reviews]
      searchedReviews = searchedReviews.filter(review => {
        let reviewBody = review.body.toLowerCase()
        if (reviewBody.indexOf(searchTerm) !== -1) {
          return review
        }
      })
      console.log('searching...', searchedReviews)
      setSearchReviews(searchedReviews.slice(0, displayNum))
    }
  }, [searchTerm])
  const moreReviews = () => {
    if (displayNum + 1 < reviews.length) {
      setDisplayNum(displayNum + 2)
    } else if (displayNum + 1 === reviews.length ) {
      setDisplayNum(displayNum + 1)
    }
  }
  const toggleSearch = (term) => {
    if (term === false) {
      setSearchTerm('')
    } else {
      setSearchTerm(term)
    }
    // if (term === false) {
    //   setSearchReviews(currentReviews)
    // } else {
    //   let searchedReviews = [...reviews]
    //   searchedReviews = searchedReviews.filter(review => {
    //     let reviewBody = review.body.toLowerCase()
    //     if (reviewBody.indexOf(term) !== -1) {
    //       return review
    //     }
    //   })
    //   console.log('searching...', searchedReviews)
    //   setSearchReviews(searchedReviews)
    // }
  }
  const {toggle, visible} = UseReviewModal()
  return (
    <div id="review-list-all">
      <SearchReviews toggleSearch={toggleSearch}/>
      <div id="sorting">
      {reviews[0] && <p>{reviews.length} reviews, sorted by <Sorting reviews={reviews} passSortingName={passSortingName}/></p>}
      </div>
      <div id="review-list">
      {searchReviews.length > 0 && searchReviews.map((review, index) => {
        return (
          <ReviewEntry key={index} review={review} putRequest={putRequest}/>
        )
      })}
    </div>
      <div id="button-cont">

        {displayNum !== reviews.length && <button className="review-button" onClick={moreReviews}>More Reviews</button>}
        <button className="review-button" onClick={toggle}>Add Review +</button>
        <ReviewModal visible={visible} toggle={toggle} reviews={reviews} metaReviews={metaReviews}/>
        </div>
    </div>
  )
}

export default ReviewList