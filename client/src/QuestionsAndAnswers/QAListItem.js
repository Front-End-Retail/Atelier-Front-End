import React from 'react';
import QAAnswerItem from './QAAnswerItem.js'
const axios = require('axios');

const { useState, useEffect } = React;

const QAListItem = ({ question }) => {

  const [questionId, setQuestionId] = useState(question.question_id)
  const [answersForQ, setAnswersForQ] = useState([])

  const getAnswersArray = (questionIdPassedIn) => {
    axios.default.get('http://localhost:3000/qanda', { params: { specificURL: `qa/questions/${questionIdPassedIn}/answers` } }).then((data) => {
      setAnswersForQ(data.data.results)
    }).catch(err => {
      console.log('error getting answers', err)
    })
  }

//qa/questions/:question_id/answers

  useEffect(() => {
    getAnswersArray(questionId)
  }, [questionId, setQuestionId])

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
      {answersForQ.length > 0 && answersForQ.map((answer, index) => {
        return <QAAnswerItem answer={answer} key={index} />
      })}
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