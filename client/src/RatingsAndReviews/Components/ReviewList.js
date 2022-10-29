import React from 'react';
const { useState, useEffect } = React;
import ReviewEntry from './ReviewEntry.js';
import Sorting from './Sorting.js';
import ReviewModal from './ReviewModal.js';
import SearchReviews from './SearchReviews.js';
import UseReviewModal from './UseReviewModal.js';

const ReviewList = ({reviews, sortReviews, metaReviews, putRequest, currentProductName}) => {
  const [displayNum, setDisplayNum] = useState(2)
  const [currentReviews, setCurrentReviews] = useState([])
  const [searchReviews, setSearchReviews] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchNum, setSearchNum] = useState(-1) //This is used to toggle number of reviews text at the top of the list

  // sort reviews with dropdown menu
  const passSortingName = (name) => {
    sortReviews(name)
  }
  // change reviews whenever reviews from parent change
  useEffect(() => {
      setCurrentReviews(reviews.slice(0, displayNum))
    if (searchTerm.length < 3) {
      setSearchReviews(reviews.slice(0, displayNum))
      setSearchNum(-1)
    } else {
      let searchedReviews = [...reviews]
      searchedReviews = searchedReviews.filter(review => {
        let reviewBody = review.body.toLowerCase()
        if (reviewBody.indexOf(searchTerm) !== -1) {
          return review
        }
      })
      setSearchNum(searchedReviews.length)
      setSearchReviews(searchedReviews.slice(0, displayNum))
    }

  }, [reviews, displayNum])

  // update search reviews using search term
  useEffect(() => {
    if (searchTerm.length < 3) {
      setSearchReviews(currentReviews)
      setSearchNum(-1)
    } else {
      let searchedReviews = [...reviews]
      searchedReviews = searchedReviews.filter(review => {
        let reviewBody = review.body.toLowerCase()
        if (reviewBody.indexOf(searchTerm) !== -1) {
          return review
        }
      })
      setSearchNum(searchedReviews.length)
      setSearchReviews(searchedReviews.slice(0, displayNum))
    }
  }, [searchTerm])

  // show more reviews on button click
  const moreReviews = () => {
    if (displayNum + 1 < reviews.length) {
      setDisplayNum(displayNum + 2)
    } else if (displayNum + 1 === reviews.length ) {
      setDisplayNum(displayNum + 1)
    }
  }
  // setting the searchTerm used to filter reviews, search reviews changes once a term over 3 chars
  // is applied
  const toggleSearch = (term) => {
    if (term === false) {
      setSearchTerm('')
    } else {
      setSearchTerm(term)
    }
  }
  const {toggle, visible} = UseReviewModal()
  return (
    <div id="review-list-all">
      <SearchReviews toggleSearch={toggleSearch}/>

      {reviews[0] && <div id="sorting"> <p style={{paddingRight: "1%"}}>{searchNum < 0 ? reviews.length : searchNum} reviews, sorted by</p> <Sorting reviews={reviews} passSortingName={passSortingName}/></div>}

      <div id="review-list">
      {searchReviews.length > 0 && searchReviews.map((review, index) => {
        return (
          <ReviewEntry key={index} review={review} putRequest={putRequest} searchTerm={searchTerm}/>
        )
      })}
    </div>
      <div id="button-cont">

        {displayNum !== reviews.length && <button className="review-button" onClick={moreReviews}>More Reviews</button>}
        <button data-testid="randr-add-button" className="review-button" onClick={toggle}>Add Review +</button>
        <ReviewModal  currentProductName={currentProductName} visible={visible} toggle={toggle} reviews={reviews} metaReviews={metaReviews}/>
        </div>
    </div>
  )
}

export default ReviewList