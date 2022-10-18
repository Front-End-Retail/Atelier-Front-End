import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios');
const { useState, useEffect } = React;

const StarAverage = ({rating}) => {
  const  [starRating, setStarRating] = useState(rating)
  const makeStarAverage = (rating) => {
    let content = []
    for (let i = 0; i < rating; i++) {
      if (rating - i < 1 && rating - i >= .5 ) {
        content.push(<FontAwesomeIcon icon={faStarHalf} style={{ height: "10px" }}></FontAwesomeIcon>)
      } else {
      content.push(<FontAwesomeIcon icon={faStar} style={{ height: "10px" }}></FontAwesomeIcon>)
      }
    }
    return content
  }
  return (
    <div id="star-average">
    {makeStarAverage(rating)}
    </div>
    )
  }

  export default StarAverage;