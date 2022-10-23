import React from 'react';
import { format, parseISO } from "date-fns";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import {FaStar} from "react-icons/fa";
import StarAverage from './StarAverage.js'
import StarFilterDesc from './StarFilterDesc.js'
import {findAverage, helpfulPerc, findTotal, findRatio, everyFunc, characteristicsDesc} from './helperFuncs'
const axios = require('axios');
const { useState, useEffect } = React;

const RatingBreakdown = ({metaReviews, ratingSort, starFilter, sortReviews, currentSort}) => {
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
    sortReviews(currentSort)
  }
  let iconStyles = { color: "black", fontSize: "6em" };
  return (
    <div id="breakdown-container">

      {/* <p id="breakdown-title">Ratings and Reviews</p> */}
      <div id="rating-breakdown-num">
        <div id="average-rating">{metaReviews.ratings && rating}</div>
        <div className="star-avg-main">{!isNaN(rating) && <StarAverage rating={4.76}/>}</div>
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
          {/* <input className="char-slider" readonly type="range" min="10" max="50" value={Math.round(metaReviews.characteristics[key]["value"] * 100) / 10} className="slider" id="myRange"></input> */}
            <div className="char-bar">
              <input className="slider" readOnly type="range" min="10" max="50" value={Math.round(metaReviews.characteristics[key]["value"] * 100) / 10} className="slider" id="myRange"></input>
              <div className='char-child1'></div>
              <div className='char-child2'></div>
              <div className='char-child3'></div>
            </div>
            <div className="char-bar-desc">
                <p>{characteristicsDesc[key]["1"]}</p>
                <p>{characteristicsDesc[key]["3"]}</p>
                <p>{characteristicsDesc[key]["5"]}</p>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default RatingBreakdown;

// triangle
{/* <div className="triangle"></div> */}