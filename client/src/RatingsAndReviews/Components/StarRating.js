import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");
const { useState, useEffect } = React;

const StarRating = ({ handleStarChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [toggleSelection, setToggleSelection] = useState();
  const handleChange = (e) => {
    console.log(rating);
    e.preventDefault();

    console.log(e.target.value);
  };
  // creates the star rating for the form
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            value={index}
            key={index + ""}
            className={
              index <= (hover || rating)
                ? "on star-button-form"
                : "off star-button-form"
            }
            onClick={() => {
              handleStarChange(index + ""), setHover(index), setRating(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span onClick={handleChange} value={index + ""} className="star">
              <FontAwesomeIcon icon={faStar} />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
