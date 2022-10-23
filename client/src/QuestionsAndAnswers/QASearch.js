import React from 'react';
import magnifyingGlass from '../assets/search.png';
const axios = require('axios');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const { useState, useEffect } = React;

const QASearch = ({ newSearchTerm }) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    newSearchTerm(searchText)
  }, [searchText])

  return (
    <div className={'qasearchwrapper'}>
      <input value={searchText} onChange={(event) => {setSearchText(event.target.value)}} type={"search"} id={"site-search"} name={"q"} className={"search-field"} placeholder={"HAVE A QUESTION? SEARCH FOR ANSWERS..."}></input>
      <button type={"submit"} className={"search-button"}><FontAwesomeIcon icon={faMagnifyingGlass} className={"magnifying-glass"}></FontAwesomeIcon></button>
    </div>
  )
}

export default QASearch;

/*
TODOS:

*/