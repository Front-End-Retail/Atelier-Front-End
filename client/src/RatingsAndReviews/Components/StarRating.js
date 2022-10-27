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
  const setStarColor = () => {

  }

  return (


    <div className="star-rating">
      <div className="star-rating__wrap">
        Rating
        <div className="star-div-container">
        <div onClick={()=> {console.log('clicked')}}><input onMouseEnter={(e) => {console.log(e.target.value)}} onChange={handleChange} className="star-rating__input"
         id="star-rating-5" type="radio" name="rating" value="5" />
       <FontAwesomeIcon icon={faStar} className={style1}
          onMouseEnter={()=> {
            style1 === 'empty-star' ? setStyle1('highlight-star') : setStyle1('empty-star')
          }}
        /></div>
               <div onClick={()=> {console.log('clicked')}}><input  onChange={handleChange} className="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5" />
       <FontAwesomeIcon icon={faStar} className={style2}
          onMouseEnter={()=> {
            style1 === 'empty-star' ? setStyle1('highlight-star') : setStyle1('empty-star')
          }}
        /></div>
        </div>
        <input  onChange={handleChange} className="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4"/>
        <label className="star-rating__ico" for="star-rating-4" title="4 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
        <input  onChange={handleChange} className="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3"/>
        <label className="star-rating__ico" for="star-rating-3" title="3 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
        <input  onChange={handleChange} className="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2"/>
        <label className="star-rating__ico" for="star-rating-2" title="2 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
        <input  onChange={handleChange} className="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1"/>
        <label className="star-rating__ico" for="star-rating-1" title="1 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
      </div>
    </div>

  )
}

export default StarRating;
{/* <label className="star-rating__ico" for="star-rating-5" title="5 out of 5 stars"> </label> */}
{/* <input  onChange={handleChange} className="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4"/>
<label className="star-rating__ico" for="star-rating-4" title="4 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
<input  onChange={handleChange} className="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3"/>
<label className="star-rating__ico" for="star-rating-3" title="3 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
<input  onChange={handleChange} className="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2"/>
<label className="star-rating__ico" for="star-rating-2" title="2 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label>
<input  onChange={handleChange} className="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1"/>
<label className="star-rating__ico" for="star-rating-1" title="1 out of 5 stars"><FontAwesomeIcon icon={faStar}/></label> */}