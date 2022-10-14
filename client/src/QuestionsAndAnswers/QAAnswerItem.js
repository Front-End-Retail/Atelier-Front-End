import React from 'react';
const axios = require('axios');

const { useState, useEffect } = React;

const QAAnswerItem = ({ answer }) => {

  return (
    <div className={"qalist-aline-wrapper"}>
        <div className={"qalist-answer"}>
          <h3>A:</h3>
          <p className={"qalist-a-text"}>{answer.body}</p>
        </div>
        <div className={"qalist-answer-info-wrapper"}>
          <p>by {answer.answerer_name}, January 1, 2019</p>
          <p> | </p>
          <p>Helpful?</p>
          <p>Yes({answer.helpfulness})</p>
          <p> | </p>
          <p> Report </p>
        </div>
      </div>
  )
}

export default QAAnswerItem;