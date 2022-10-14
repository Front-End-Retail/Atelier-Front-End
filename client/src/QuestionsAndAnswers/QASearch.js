import React from 'react';
import magnifyingGlass from '../assests/search.png';
const axios = require('axios');

const { useState, useEffect } = React;

const QASearch = () => {

  return (
    <div className={'qasearchwrapper'}>
      <input type={"search"} id={"site-search"} name={"q"} className={"search-field"} placeholder={"HAVE A QUESTION? SEARCH FOR ANSWERS..."}></input>
      <button type={"submit"} className={"search-button"}><img src={magnifyingGlass}></img></button>
    </div>
  )
}

export default QASearch;

/*
TODOS:

*/