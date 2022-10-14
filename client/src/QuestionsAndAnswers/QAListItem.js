import React from 'react';
import QAAnswerItem from './QAAnswerItem.js'
const axios = require('axios');

const { useState, useEffect } = React;

const QAListItem = ({ question }) => {
  console.log("QUESTION IN THE LIST", question)

  return (
    <div className={'qalist-item-wrapper'}>
      <div className={"qalist-q-line-wrapper"}>
        <div className={"qalist-question"}>
          <h3>Q:</h3>
          <p className={"qalist-q-text"}><strong>{question.question_body}</strong></p>
        </div>
        <div className={"qalist-helpful"}>
          <p>Helpful?</p>
          <p>Yes({question.question_helpfulness})</p>
          <p> | </p>
          <p> Add Answer </p>
        </div>
      </div>
      <QAAnswerItem />
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