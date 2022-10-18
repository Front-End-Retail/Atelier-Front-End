import React from 'react';
import magnifyingGlass from '../assets/search.png';
const axios = require('axios');

const { useState, useEffect } = React;

const QASearch = ({ newSearchTerm }) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    newSearchTerm(searchText)
  }, [searchText])

  return (
    <div className={'qasearchwrapper'}>
      <input value={searchText} onChange={(event) => {setSearchText(event.target.value)}} type={"search"} id={"site-search"} name={"q"} className={"search-field"} placeholder={"HAVE A QUESTION? SEARCH FOR ANSWERS..."}></input>
      <button type={"submit"} className={"search-button"}><img src={magnifyingGlass}></img></button>
    </div>
  )
}

export default QASearch;

/*
TODOS:

*/