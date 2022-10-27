import React from 'react';
import RandRImage from './RandRImage.js'
import StarAverage from './StarAverage.js'
const axios = require('axios');
const { useState, useEffect } = React;


const ReviewEntry = ({review, putRequest, searchTerm}) => {
  const [toggleBody, setToggleBody] = useState(false)
  const [toggleHelp, setToggleHelp] = useState(false)
  const [toggleReport, setToggleReport] = useState(false)
  const [reportText, setReportText] = useState('Report')
  const [helpfulText, setHelpfulText] = useState('Yes')

  const expandBody = (e) => {
    setToggleBody(true)
  }
  // handle report and help in one function
  const handlePutRequest = (e) => {
    if (e.target.textContent === "Report") {
      !toggleReport ? (setToggleReport(true), putRequest(review.review_id, "report"), setReportText('Reported')) : null;
    } else if (e.target.textContent.slice(0,3) === 'Yes') {
      setToggleHelp(true)
      setHelpfulText('No')
      putRequest(review.review_id, "helpful", e.target.id)
    }
  }
// temporary fix, it would allow a user to vote the same message if they rerender the page. Decent enough though
  useEffect(() => {
    setHelpfulText("Yes")
    setToggleReport(true)
    setReportText('Report')
    setToggleHelp(true)
  }, [review])

  const highlightWord = (review_body, searchTerm) => {
    review_body = review_body.split(' ').map(word => {
      return ((word.indexOf(searchTerm) !== -1) ? <><span className="highlight-word">{word}</span><span> </span></>
      : `${word} `)
    })
    return review_body
  }

  return (
    <div className="review-entry" data-testid="randr-entry">
      <div className="entry-top-container">
        <StarAverage rating={review.rating} colorOn={"rgb(255, 193, 7)"} colorOff={"rgb(255,255,255)"} />
        <p>{review.reviewer_name}, {review.date}</p>
      </div>
      <h3 className="review-tile-summary">{review.summary}</h3>
      {review.body.length < 250 && <p className="review-body">{searchTerm.length < 2 ? review.body : highlightWord(review.body, searchTerm)}</p>}
      {!toggleBody ? <div className="review-body">{review.body.length > 250 && <p className="review-body">{review.body.slice(0,250)} ... <button className="show-more" onClick={expandBody}>show more</button></p>}</div> : null}
      {toggleBody && <div className="review-body">{review.body}</div>}
      {review.response && <div className="response"><h4>Response:</h4>{review.response}</div>}
      <div className="thumbnail-container">
      {review.photos.length > 0 && review.photos.map((photo, index) => {
        return <RandRImage photo={photo} key ={index}/>
        // return <img className="thumbnail" src={photo.url}></img>
      })}
      </div>
      {review.recommend && <p className="review-tile-recommend">&#10003; I recommend this product!</p>}
      <p>Helpful?<a onClick={handlePutRequest} id="helpfulness-button" className=" review-links">{helpfulText} ({review.helpfulness})</a><a onClick={handlePutRequest}
      id="report-button" className="review-links toggle-line">{reportText}</a></p>
    </div>
  )
}

export default ReviewEntry

// review.body.split(' ').map(word => {
//   return ((word.indexOf(searchTerm) !== -1) ? <span className="highlight-word">{word} </span> : `${word} `)
// })