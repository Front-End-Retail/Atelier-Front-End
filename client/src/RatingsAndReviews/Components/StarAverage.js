import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import {
  faStar as faStarReg
} from '@fortawesome/free-regular-svg-icons';

const axios = require('axios');
const { useState, useEffect } = React;

const StarAverage = ({rating}) => {
  const  [starRating, setStarRating] = useState(rating)
  let test = rating + 1;
  // const makeStarAverage = (rating) => {
  //   let content = []
  //   let tempRating = rating;
  //   for (let i = 0; i < 5; i++) {
  //     if (rating - i < 1 && rating - i >= .5 ) {
  //       // content.push(<FontAwesomeIcon key={i} icon={faStarHalf} style={{ height: "10px" }}></FontAwesomeIcon>)
  //       <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="10" height="10" width="10" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 193, 7)"}}>
  //         <path fill= "url(#half-star)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
  //       </svg>
  //     } else if (test > 1) {
  //     // content.push(<FontAwesomeIcon key={i} icon={faStar} style={{ height: "10px" }}></FontAwesomeIcon>)
  //     <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="10" height="10" width="10" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 193, 7)"}}>
  //       <path fill= "url(#full-star)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
  //     </svg>
  //     } else {
  //       // content.push(<FontAwesomeIcon key={i} icon={faStarReg} style={{ height: "10px" }}></FontAwesomeIcon>)
  //       <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="10" height="10" width="10" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 193, 7)"}}>
  //       <path fill= "url(#full-star)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
  //     </svg>
  //     }
  //     tempRating--;
  //   }
  //   return content
  // }
  return (
    <div id="star-average">
    {/* {makeStarAverage(rating)} */}
      <svg className="linear-gradient-template">
        <linearGradient id="empty-star" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: "rgb(255, 193, 7)"}}></stop>
            <stop offset="0%" style={{stopColor: "rgb(228, 229, 233)"}}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient id="quarter-star" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="33%" style={{stopColor: "rgb(255, 193, 7)"}}></stop>
            <stop offset="33%" style={{stopColor: "rgb(228, 229, 233)"}}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" style={{stopColor: "rgb(255, 193, 7)"}}></stop>
            <stop offset="50%" style={{stopColor: "rgb(228, 229, 233)"}}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient id="three-quarter-star" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="67%" style={{stopColor: "rgb(255, 193, 7)"}}></stop>
            <stop offset="67%" style={{stopColor: "rgb(228, 229, 233)"}}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient id="full-star" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="100%" style={{stopColor: "rgb(255, 193, 7)"}}></stop>
            <stop offset="100%" style={{stopColor: "rgb(228, 229, 233)"}}></stop>
        </linearGradient>
      </svg>
      {[0,1,2,3,4].map(i => {
        test--;
        // 1 quarter star
        if (rating - i < .5 && rating - i >= .25 ) {
          // content.push(<FontAwesomeIcon key={i} icon={faStarHalf} style={{ height: "10px" }}></FontAwesomeIcon>)
          return(
          <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="10" height="10" width="10" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 193, 7)"}}>
            <path fill= "url(#quarter-star)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
          </svg>
          )
          // half star
        } else if (rating - i < .75 && rating - i >= .5 ) {
        // content.push(<FontAwesomeIcon key={i} icon={faStar} style={{ height: "10px" }}></FontAwesomeIcon>)

        return (
        <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="10" height="10" width="10" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 193, 7)"}}>
          <path fill= "url(#half-star)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
        )

        } else if (rating - i < .99 && rating - i >= .75 ) {
          // content.push(<FontAwesomeIcon key={i} icon={faStar} style={{ height: "10px" }}></FontAwesomeIcon>)

          return (
          <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="10" height="10" width="10" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 193, 7)"}}>
            <path fill= "url(#three-quarter-star)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
          </svg>
          )

          } else if (test > 0) {
            // content.push(<FontAwesomeIcon key={i} icon={faStar} style={{ height: "10px" }}></FontAwesomeIcon>)

            return (
            <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="10" height="10" width="10" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 193, 7)"}}>
              <path fill= "url(#full-star)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            )

            } else {
          // content.push(<FontAwesomeIcon key={i} icon={faStarReg} style={{ height: "10px" }}></FontAwesomeIcon>)

          return(
          <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="10" height="10" width="10" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 193, 7)"}}>
            <path fill= "url(#empty-star)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </svg>
          )
        }
      }
      )}
      {/* {makeStarAverage(rating)} */}
      {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="100" height="100" width="100" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(255, 193, 7)"}}>
        <path fill= "url(#empty-star)" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
      </svg> */}
    </div>
    )
  }

  export default StarAverage;