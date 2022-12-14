import React from 'react';
import { format, parseISO } from "date-fns";
import StarAverage from './StarAverage.js';
import StarFilterDesc from './StarFilterDesc.js';
import { findAverage, helpfulPerc, findTotal, findRatio, everyFunc, characteristicsDesc } from './helperFuncs';
const { useState, useEffect } = React;

const RatingBreakdown = ({ metaReviews, ratingSort, starFilter, sortReviews, currentSort }) => {
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

      <div id="rating-breakdown-num">
        <div id="average-rating">{metaReviews.ratings && rating}</div>
        <div className="star-avg-main">{!isNaN(rating) && <StarAverage id={'-main'} rating={rating} colorOn={"rgb(255, 193, 7)"} colorOff={"rgb(255,255,255)"} />}</div>
      </div>
      {metaReviews.ratings && <p>{helpfulAverage} % of reviews recommend this product</p>}

      {/* Creates the bars for each star number by mapping over the ratings object */}
      {ratingTotal && Object.keys(metaReviews.ratings).reverse().map((starNum, index) => {
        let singleStarVotes = metaReviews.ratings[starNum]
        return <div key={index} className="star-bars" data-testid="randr-star-bar">
          <div className="star-a-element" style={{ width: "20%" }}><a name={starNum} onClick={starClick}>{starNum} stars</a></div>
          <div className="bar-container" style={{ width: "75%" }}>
            <div style={{ height: "15px", width: `${100}%`, background: "#F9F6EE" }}>
              <div style={{ height: "15px", width: `${(singleStarVotes / ratingTotal) * 100}%`, background: "#D9B310" }}></div></div> {/*(1 - (singleStarVotes/ratingTotal)) *  */}
          </div>
          <>
            <div style={{ width: "15%" }}>{metaReviews.ratings[starNum]}</div>
          </>
        </div>
      })}
      {/* toggles the description for current filters and remove all filters button */}
      {!starFilter.every(everyFunc) && <StarFilterDesc starFilter={starFilter} />}
      {!starFilter.every(everyFunc) && <button className="filter-button" onClick={removeFilterButton}>Remove Filters</button>}

      {/* creates the sliders for the characteristics ratings */}
      {metaReviews.characteristics && Object.keys(metaReviews.characteristics).map((key, index) => {
        return (
          <div className="slide-container" data-testid="randr-char-slider" key={index}>{key}
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