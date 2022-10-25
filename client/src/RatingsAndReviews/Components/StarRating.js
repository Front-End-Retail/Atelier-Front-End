import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios');
const { useState, useEffect } = React;

const StarRating = ({handleStarChange}) => {
  const [style1, setStyle1] = useState('empty-star')
  const [style2, setStyle2] = useState('empty-star')
  const [style3, setStyle3] = useState('empty-star')
  const [style4, setStyle4] = useState('empty-star')
  const [style5, setStyle5] = useState('empty-star')
  const handleChange = (e) => {
    // e.preventDefault()
    handleStarChange(e.target.value)
  }
  return (


    <div class="star-rating">
      <div class="star-rating__wrap">
        Rating
        <input  onChange={handleChange} class="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5" />
        <label class="star-rating__ico" for="star-rating-5" title="5 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
        <input  onChange={handleChange} class="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4"/>
        <label class="star-rating__ico" for="star-rating-4" title="4 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
        <input  onChange={handleChange} class="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3"/>
        <label class="star-rating__ico" for="star-rating-3" title="3 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
        <input  onChange={handleChange} class="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2"/>
        <label class="star-rating__ico" for="star-rating-2" title="2 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
        <input  onChange={handleChange} class="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1"/>
        <label class="star-rating__ico" for="star-rating-1" title="1 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
      </div>
    </div>

  )
}

export default StarRating;
