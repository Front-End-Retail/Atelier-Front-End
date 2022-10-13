import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

const RatingsAndReviews = () => {

  const fetchReviews = () => {
    axios({url: 'http://localhost:3000/reviews', method: 'get'}).then(reviewData => {
      console.log('success!')
      console.log(reviewData);
    }).catch(error => {
      console.log('could not perform get request', error)
    })
  }

useEffect(() => {
  // fetchReviews()
})
  return (
    <div>
      Ratings and Reviews go here!
    </div>
  )
}

export default RatingsAndReviews;