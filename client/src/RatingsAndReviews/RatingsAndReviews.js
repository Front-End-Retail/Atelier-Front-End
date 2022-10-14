import React from 'react';
import ReviewList from './components/ReviewList.js'
// import axios from 'axios';
const axios = require('axios');

const { useState, useEffect } = React;

const RatingsAndReviews = () => {

  const tryARequest = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL : 'reviews?product_id=37311' }}).then((data) => {
      console.log('gotten', data.data)
    }).catch(err => {
      console.log('error getting', err)
    })
  }

useEffect(() => {
  // fetchReviews()
})
  return (
    <div>
      <ReviewList />
      <button onClick={()=>{tryARequest()}}>Rating Test</button>
    </div>
  )
}

export default RatingsAndReviews;