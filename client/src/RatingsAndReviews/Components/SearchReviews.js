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
    <div id="review-search" data-testid="randr-search">
      <input id="search-bar" onChange={handleInput} type="text" placeholder="Search Reviews..."></input>
      <button type={"submit"} className={"search-button-reviews"}><FontAwesomeIcon icon={faMagnifyingGlass} className={"search-icon"}></FontAwesomeIcon></button>
    </div>
  )
}

export default SearchReviews;