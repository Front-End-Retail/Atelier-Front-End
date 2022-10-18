import React from 'react';
import { format, parseISO } from "date-fns";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import StarAverage from './StarAverage.js'
const axios = require('axios');
const { useState, useEffect } = React;

const RatingBreakdown = ({metaReviews}) => {
  const [rating, setRating] = useState()
  const [helpfulAverage, setHelpfulAverage] = useState()
  const findAverage = (ratingsObj) => {
    // console.log("findAverage", metaReviews.recommended)
    let average = 0
    let total = 0;
    for (let key in ratingsObj) {
      average += (Number(key) * Number(ratingsObj[key]))
      total += Number(ratingsObj[key])
    }
    return Math.round(((average/total) * 10) / 10)
  }
  const helpfulPerc = (helpfulObj) => {
    if (helpfulObj) {
      let total = Number(helpfulObj.false) + Number(helpfulObj.true);
      return (Math.round((Number(helpfulObj.true)/total) * 100));
    }
  }


  useEffect(() => {
    setHelpfulAverage(helpfulPerc(metaReviews.recommended))
    setRating(findAverage(metaReviews.ratings))
  }, [metaReviews])


  return (
    <div id="breakdown-container">
      <h3>Ratings and Reviews</h3>
      {metaReviews.ratings && <p>{helpfulAverage} % of reviews recommend this product</p>}
      <div id="rating-breakdown-num">
      <h1 id="average-rating">{metaReviews.ratings && rating}</h1>
      {!isNaN(rating) && <StarAverage rating={rating}/>}
      </div>
      {/* make map function, this is cluttered */}
      {metaReviews.ratings && <p><a>{metaReviews.ratings["1"]}</a></p>}
      {metaReviews.ratings && <p><a>{metaReviews.ratings["2"]}</a></p>}
      {metaReviews.ratings && <p><a>{metaReviews.ratings["3"]}</a></p>}
      {metaReviews.ratings && <p><a>{metaReviews.ratings["4"]}</a></p>}
      {metaReviews.ratings && <p><a>{metaReviews.ratings["5"]}</a></p>}
      {metaReviews.characteristics && Object.keys(metaReviews.characteristics).map(key => {
        return (
          <div class="slidecontainer">{key}
          <input type="range" min="10" max="50" value={Math.round(metaReviews.characteristics[key]["value"] * 100) / 10} class="slider" id="myRange">
          </input></div>
        )
      })}
    </div>
  )
}

export default RatingBreakdown;

