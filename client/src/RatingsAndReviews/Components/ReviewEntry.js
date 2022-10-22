import React from 'react';
import RandRImage from './RandRImage.js'
import StarAverage from './StarAverage.js'
const axios = require('axios');
const { useState, useEffect } = React;


const ReviewEntry = ({review, putRequest}) => {
  const [toggleBody, setToggleBody] = useState(false)
  const [toggleHelp, setToggleHelp] = useState(false)
  const [toggleReport, setToggleReport] = useState(false)
  const [reportText, setReportText] = useState('Report')
  const [helpfulText, setHelpfulText] = useState('Report')

  const expandBody = (e) => {
    setToggleBody(true)
  }
  // handle report and help in one function
  const handlePutRequest = (e) => {
    if (e.target.textContent === "Report") {
      !toggleReport ? (setToggleReport(true), putRequest(review.review_id, "report"), setReportText('Reported')) : null;
    } else if (!toggleHelp) {
      setToggleHelp(true)
      putRequest(review.review_id, "helpful")
    }
  }
  const handleReport = () => {
    if (!toggleReport) {
      setToggleReport(true)
      helpfulRequest(review.review_id)
    }

  }
  return (
    <div className="review-entry">
      <div className="entry-top-container">
        <StarAverage rating={review.rating} />
        <p>{review.reviewer_name}, {review.date}</p>
      </div>
      <h3 className="review-tile-summary">{review.summary}</h3>

      {!toggleBody ? <div><p>{review.body}{review.body.length > 250 && <button className="show-more" onClick={expandBody}>show more</button>}</p></div> : null}
      {toggleBody && <p>{review.body}{console.log(review.body.length)}</p>}
      {review.response && <div className="response"><h4>Response:</h4>{review.response}</div>}
      <div className="thumbnail-container">
      {review.photos.length > 0 && review.photos.map((photo, index) => {
        return <RandRImage photo={photo} key ={index}/>
        // return <img className="thumbnail" src={photo.url}></img>
      })}
      </div>
      {review.recommend && <p className="review-tile-recommend">&#10003; I recommend this product!</p>}
      <p >Helpful?<a onClick={handlePutRequest} className="review-links">Yes({review.helpfulness})</a><a onClick={handlePutRequest} className="review-links toggle-line">{reportText}</a></p>
    </div>
  )
}

export default ReviewEntry