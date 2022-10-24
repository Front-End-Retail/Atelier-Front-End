import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios');

const { useState, useEffect } = React;

const SearchReviews = ({toggleSearch}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInput = (e) => {
    if (e.target.value.length > 2) {
      toggleSearch(e.target.value)
    } else {
      toggleSearch(false)
    }
  }

  return (
    <div id="review-search">
      <input id="search-bar" onChange={handleInput} type="text" placeholder="Search..."></input>
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
    </div>
  )
}

export default SearchReviews;