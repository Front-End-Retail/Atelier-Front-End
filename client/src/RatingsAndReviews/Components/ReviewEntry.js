import React from 'react';
import RandRImage from './RandRImage.js'
import StarAverage from './StarAverage.js'
const axios = require('axios');
const { useState, useEffect } = React;

const ReviewEntry = ({review}) => {
  return (
    <div className="review-entry">
      <div className="entry-top-container">
        <StarAverage rating={review.rating} />
        <p>{review.reviewer_name}, {review.date}</p>
      </div>
      <h3 className="review-tile-summary">{review.summary}</h3>

      <p>{review.body}</p>
      {review.response && <div className="response"><h4>Response:</h4>{review.response}</div>}
      <div className="thumbnail-container">
      {review.photos.length > 0 && review.photos.map((photo, index) => {
        return <RandRImage photo={photo} key ={index}/>
        // return <img className="thumbnail" src={photo.url}></img>
      })}
      </div>
      {review.recommend && <p className="review-tile-recommend">&#10003; I recommend this product!</p>}
      <p>Helpful?<a className="review-links">Yes</a><a className="review-links toggle-line">Report</a></p>
    </div>
  )
}

export default ReviewEntry