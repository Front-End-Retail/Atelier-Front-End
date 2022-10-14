import React from 'react';
const axios = require('axios');

const { useState, useEffect } = React;

const QAAnswerItem = () => {

  return (
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
  )
}

export default QAAnswerItem;