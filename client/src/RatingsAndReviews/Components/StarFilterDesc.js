import React from 'react';
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
    // remove the extra comma at the end of the string
    if (string.slice(-2) === ', ') {
      string = string.slice(0, -2)
    }
    // Order the string from highest to lowest (map runs in order)
    return string.split(',').reverse().join(', ');
  }
  return (
    <div className="filter-desc-div">
      Filtering for {makeStarString(starFilter)} star reviews
    </div>
    )
  }
  export default StarFilterDesc