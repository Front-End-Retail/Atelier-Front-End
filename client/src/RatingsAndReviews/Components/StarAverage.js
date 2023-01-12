import React from "react";
const axios = require("axios");
const { useState, useEffect } = React;

const StarAverage = ({ rating, colorOn, colorOff, id }) => {
  const [starRating, setStarRating] = useState(rating);
  let test = rating + 1;
  return (
    <div id="star-average">
      {/* The template for creating the different star fills */}
      <svg className="linear-gradient-template">
        <linearGradient
          id={"empty-star" + id}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" style={{ stopColor: colorOn }}></stop>
          <stop offset="0%" style={{ stopColor: colorOff }}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient
          id={"quarter-star" + id}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="33%" style={{ stopColor: colorOn }}></stop>
          <stop offset="33%" style={{ stopColor: colorOff }}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient id={"half-star" + id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{ stopColor: colorOn }}></stop>
          <stop offset="50%" style={{ stopColor: colorOff }}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient
          id={"three-quarter-star" + id}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="67%" style={{ stopColor: colorOn }}></stop>
          <stop offset="67%" style={{ stopColor: colorOff }}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient id={"full-star" + id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="100%" style={{ stopColor: colorOn }}></stop>
          <stop offset="100%" style={{ stopColor: colorOff }}></stop>
        </linearGradient>
      </svg>
      {/* Conditionally render each star, check url for the fill */}
      {[0, 1, 2, 3, 4].map((i) => {
        test--;
        if (rating - i < 0.5 && rating - i >= 0.25) {
          return (
            <svg
              key={i}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="one,star"
              color="#ffc107"
              size="10"
              height="10"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={"url(#quarter-star" + id + ")"}
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          );
        } else if (rating - i < 0.75 && rating - i >= 0.5) {
          return (
            <svg
              key={i}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="one,star"
              color="#ffc107"
              size="10"
              height="10"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={"url(#half-star" + id + ")"}
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          );
        } else if (rating - i < 0.99 && rating - i >= 0.75) {
          return (
            <svg
              key={i}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="one,star"
              color="#ffc107"
              size="10"
              height="10"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={"url(#three-quarter-star" + id + ")"}
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          );
        } else if (test > 0) {
          return (
            <svg
              key={i}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="one,star"
              color="#ffc107"
              size="10"
              height="10"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={"url(#full-star" + id + ")"}
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          );
        } else {
          return (
            <svg
              key={i}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="one,star"
              color="#ffc107"
              size="10"
              height="10"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={"url(#empty-star" + id + ")"}
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          );
        }
      })}
    </div>
  );
};

export default StarAverage;
