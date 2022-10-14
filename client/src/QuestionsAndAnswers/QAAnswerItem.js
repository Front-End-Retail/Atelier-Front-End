import React from 'react';
import { format, parseISO } from "date-fns";
const axios = require('axios');

const { useState, useEffect } = React;

const QAAnswerItem = ({ answer }) => {

  //console.log(answer, answer.date, format(parseISO(answer.date), 'MMMM d, yyyy'))

  return (
    <div className={"qalist-aline-wrapper"}>
        <div className={"qalist-answer"}>
          <h3>A:</h3>
          <p className={"qalist-a-text"}>{answer.body}</p>
        </div>
        <div className={"qalist-answer-info-wrapper"}>
          <p>by {answer.answerer_name}, {format(parseISO(answer.date), 'MMMM d, yyyy')}</p>
          <p> | </p>
          <p>Helpful?</p>
          <p>Yes ({answer.helpfulness})</p>
          <p> | </p>
          <p> Report </p>
        </div>
      </div>
  )
}

export default QAAnswerItem;

/*
TODOs:
--Reformat the "A:" so the answer info wrapper always lines up correctly beneath the answer text

*/