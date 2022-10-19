import React from 'react';
import RandRImage from './RandRImage.js'
import StarAverage from './StarAverage.js'
const axios = require('axios');
const { useState, useEffect } = React;

const ReviewEntry = ({review}) => {
  return (
    <div className="review-entry">
      <StarAverage rating={review.rating} />
      <h4>{review.summary}</h4>
      <p>{review.date}</p>
      <p>{review.body}</p>
      {review.response === null && <div className="response"><h4>Response:</h4>{review.response}</div>}
      <div className="thumbnail-container">
      {review.photos.length > 0 && review.photos.map((photo, index) => {
        return <RandRImage photo={photo} key ={index}/>
        // return <img className="thumbnail" src={photo.url}></img>
      })}
      </div>
      {review.recommend && <p>I recommend this product!</p>}
      <p>Helpful?<a className="review-links">Yes</a><a className="review-links toggle-line">Report</a></p>
    </div>
  )
}

export default ReviewEntry