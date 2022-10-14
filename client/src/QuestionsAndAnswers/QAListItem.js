import React from 'react';
const axios = require('axios');

const { useState, useEffect } = React;

const QAListItem = () => {

  return (
    <div className={'qalist-item-wrapper'}>
      <div className={"qalist-q-line-wrapper"}>
        <div className={"qalist-question"}>
          <h3>Q:</h3>
          <p className={"qalist-q-text"}><strong>Question Text Here?</strong></p>
        </div>
        <div className={"qalist-helpful"}>
          <p>Helpful?</p>
          <p>Yes(#)</p>
          <p> | </p>
          <p> Add Answer </p>
        </div>
      </div>
      <div className={"qalist-aline-wrapper"}>
        <div className={"qalist-answer"}>
          <h3>A:</h3>
          <p className={"qalist-a-text"}>Much longer answer text here we need this to at least wrap to a second line so we can check it out and make sure it is behaving the way we expect it to behave</p>
        </div>
        <div className={"qalist-answer-info-wrapper"}>
          <p>by User1234, January 1, 2019</p>
          <p> | </p>
          <p>Helpful?</p>
          <p>Yes(#)</p>
          <p> | </p>
          <p> Report </p>
      </div>
      </div>
    </div>
  )
}

export default QAListItem;

/*
TODOS:
-Build out the structure
Still need conditional components:
  -Image display
  -Load more answers
*/