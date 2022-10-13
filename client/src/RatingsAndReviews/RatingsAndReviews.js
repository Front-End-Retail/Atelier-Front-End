import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

const RatingsAndReviews = () => {

  const fetchReviews = () => {
    axios.get('/reviews').then(reviewData => {
      console.log(reviewData);
    }).catch(error => {
      console.log('could not perform get request', error)
    })
  }

useEffect(() => {
  fetchReviews()
})
  return (
    <div>
      Ratings and Reviews go here!
    </div>
  )
}

export default RatingsAndReviews;