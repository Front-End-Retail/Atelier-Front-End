import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios');

const { useState, useEffect } = React;

const SearchReviews = () => {

  return (
    <div id="review-search">
      <input type="text" placeholder="Search..."></input>
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
    </div>
  )
}

export default SearchReviews;