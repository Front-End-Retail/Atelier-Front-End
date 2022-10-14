import React from 'react';
const axios = require('axios');

const { useState, useEffect } = React;

const QAListItem = () => {

  return (
    <div className={'qalistitemwrapper'}>
      <div className={"qalistqlinewrapper"}>
        <div className={"qalistquestion"}>
          <h3>Q:</h3>
          <p className={"qalistqtext"}><strong>Question Text Here?</strong></p>
        </div>
        <div className={"qalisthelpful"}>
          <div>Helpful?</div>
          <div>Yes(#)</div>
          <div> | </div>
          <div> Add Answer </div>
        </div>
      </div>
    </div>
  )
}

export default QAListItem;

/*
TODOS:
-Build out the structure
*/