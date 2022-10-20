import React from 'react';
import QAAnswerItem from './QAAnswerItem.js'
import QAAddAnswerModal from './QAAddAnswerModal.js'
import useModal from './useModal.js'

const axios = require('axios');

const { useState, useEffect } = React;

const QAListItem = ({ question, addQuestionHelpfulness, addAnswerHelpfulness, currentProductName, currentId, getProductQuestions }) => {

  const [questionId, setQuestionId] = useState(0)
  const [displayedAnswersForQ, setDisplayedAnswersForQ] = useState([])
  const [answersForQ, setAnswersForQ] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [votedHelpful, setVotedHelpful] = useState(false)

  const getAnswersArray = (questionIdPassedIn) => {
    axios.default.get('http://localhost:3000/qanda', { params: { specificURL: `qa/questions/${questionIdPassedIn}/answers` } }).then((data) => {
      setAnswersForQ(data.data.results)
    }).catch(err => {
      console.log('error getting answers', err)
    })
  }

  //on initial get of the answers array, this will set the displayed answers to the first two answers
  useEffect(() => {
    let copyOfAnswers = answersForQ
    copyOfAnswers = copyOfAnswers.slice(0, 2)
    setDisplayedAnswersForQ(copyOfAnswers)
  }, [answersForQ])

  //on click, add two answers to the displayed answers from the total answers
  const addTwoAnswers = () => {
    let newCopyOfAnswers = answersForQ
    newCopyOfAnswers = newCopyOfAnswers.slice(0, displayedAnswersForQ.length + 2)
    setDisplayedAnswersForQ(newCopyOfAnswers)
  }

  //on load, get all of the answers for the given question
  useEffect(() => {
    setQuestionId(question.question_id)
  }, [question.question_id])

  useEffect(() => {
    if (questionId !== 0) {
      getAnswersArray(questionId)
    }
  }, [questionId, setQuestionId])

  //vote helpful if hasn't already voted helpful
  const voteHelpful = () => {
    if (!votedHelpful) {
      addQuestionHelpfulness(questionId)
      setVotedHelpful(true)
    }
  }

  //update the helpfulness count of an answer
  const updateHelpfulCount = (searchAnswerId) => {
    let answersCopy = answersForQ.slice()
    answersCopy.map(answer => {
      if (answer.answer_id === searchAnswerId) {
        answer.helpfulness++
        return answer
      } else {
        return answer
      }
    })
    setAnswersForQ(answersCopy)
  }

  const {toggle, visible} = useModal();

  return (
    <div className={'qalist-item-wrapper'}>
      <div className={"qalist-q-line-wrapper"}>
        <div onClick={() => setIsActive(!isActive)} className={"qalist-question"}>
          <h3>Q:</h3>
          <p className={"qalist-q-text"}><strong>{question.question_body}</strong></p>
        </div>
        <div className={"qalist-helpful"}>
          <p>Helpful?</p>
          <p className={"underlined"}onClick={() => {voteHelpful()}}>Yes </p><p>({question.question_helpfulness})</p>
          <p> | </p>
          <p onClick={toggle}> Add Answer </p>
        </div>
      </div>
      <div className={isActive ? "qalist-answersandbuttonwrapper" : "qalist-answersnotactive"}>
      {displayedAnswersForQ.length > 0 && displayedAnswersForQ.map((answer, index) => {
        return <QAAnswerItem answer={answer} key={index} addAnswerHelpfulness={addAnswerHelpfulness} updateHelpfulCount={updateHelpfulCount} currentId={currentId} />
      })}
      {displayedAnswersForQ.length < answersForQ.length && <button className={"showAnswersButton"} onClick={() => {addTwoAnswers()}}>LOAD MORE ANSWERS</button>}
      </div>
      <QAAddAnswerModal visible={visible} toggle={toggle} currentProductName={currentProductName} questionText={question.question_body} questionId={questionId} getProductQuestions={getProductQuestions} />
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