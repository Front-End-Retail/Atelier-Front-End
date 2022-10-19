import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;

// Description for current filter for the star ratings breakdown
const StarFilterDesc = ({starFilter}) => {
  const makeStarString = (starArray) => {
    let string = ''
    starArray.map((star, index) => {
      if (star) {
      string += (index + 1) + ', '
      }
    })
    if (string.slice(-2) === ', ') {
      string = string.slice(0, -2)
    }
    return string.split(',').reverse().join(', ');
  }
  return (
    <div>
      Filtering for {makeStarString(starFilter)} star reviews
    </div>
    )
  }
  export default StarFilterDesc