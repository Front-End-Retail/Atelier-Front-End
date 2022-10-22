import React from 'react';
import { format, parseISO } from "date-fns";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import StarAverage from './StarAverage.js'
import StarFilterDesc from './StarFilterDesc.js'
import {findAverage, helpfulPerc, findTotal, findRatio, everyFunc} from './helperFuncs'
const axios = require('axios');
const { useState, useEffect } = React;

const RatingBreakdown = ({metaReviews, ratingSort, starFilter, reviewRequest}) => {
  const [rating, setRating] = useState()
  const [ratingTotal, setRatingTotal] = useState()
  const [helpfulAverage, setHelpfulAverage] = useState()

  useEffect(() => {
    setHelpfulAverage(helpfulPerc(metaReviews.recommended))
    setRating(findAverage(metaReviews.ratings))
    setRatingTotal(findTotal(metaReviews.ratings))
  }, [metaReviews])

  const starClick = (event) => {
    ratingSort(event.target.name)
  }

  const removeFilterButton = () => {
    reviewRequest()
  }

  return (
    <div id="breakdown-container">
      <p id="breakdown-title">Ratings and Reviews</p>
      <div id="rating-breakdown-num">
        <div id="average-rating">{metaReviews.ratings && rating}</div>
        {!isNaN(rating) && <StarAverage rating={rating}/>}
      </div>
      {metaReviews.ratings && <p>{helpfulAverage} % of reviews recommend this product</p>}
      {ratingTotal && Object.keys(metaReviews.ratings).reverse().map((starNum, index) => {
        let ratio = findRatio(ratingTotal, metaReviews.ratings[starNum])
        let ratioTotal = 300 - ratio;
        return <table className="star-bars" key={index}><tbody>
        <tr width="300px" height="15px">
        <td className="star-a-element"><a  name={starNum} onClick={starClick}>{starNum} stars</a></td>
        <td style={{background: "green", width: ratio, height:10}}></td><td style={{background: "gray", width: ratioTotal, height:10}}></td>
        </tr>
        </tbody>
        </table>
      })}
      {!starFilter.every(everyFunc) && <StarFilterDesc starFilter={starFilter}/>}
      {!starFilter.every(everyFunc) && <button onClick={removeFilterButton}>Remove Filters</button>}
      {metaReviews.characteristics && Object.keys(metaReviews.characteristics).map((key, index) => {
        return (
          <div className="slide-container" key={index}>{key}
          {/* <input readonly type="range" min="10" max="50" value={Math.round(metaReviews.characteristics[key]["value"] * 100) / 10} className="slider" id="myRange"></input> */}
          <div className="char-bar"><div className="triangle"></div><div className='char-child'></div><div className='char-child'></div><div className='char-child'></div></div>
          </div>
        )
      })}
    </div>
  )
}

export default RatingBreakdown;
