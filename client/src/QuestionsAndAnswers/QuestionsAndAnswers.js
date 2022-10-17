import React from 'react';
import QASearch from './QASearch.js'
import QAListItem from './QAListItem.js'
import Modal from './Modal'
import useModal from './useModal'
import '../assets/stylesqanda.css';
const axios = require('axios');

const { useState, useEffect } = React;

const QuestionsAndAnswers = () => {
  const [currentId, setCurrentId] = useState('37314')
  const [currentQuestions, setCurrentQuestions] = useState([])
  const [displayedQuestions, setDisplayedQuestions] = useState([])

  const getProductQuestions = () => {
    axios.default.get('http://localhost:3000/qanda', { params: { specificURL: `qa/questions?product_id=${currentId}` } }).then((data) => {
      setCurrentQuestions(data.data.results)
    }).catch(err => {
      console.log('error getting', err)
    })
  }

  //will set initial list of displayed questions. Setting limit to 2 for testing, should be 4 when complete
  useEffect(() => {
    let copyQuestions = currentQuestions
    copyQuestions = copyQuestions.slice(0, 2)
    setDisplayedQuestions(copyQuestions)
  }, [currentQuestions])

  //add more answered questions if displayqs length is less than curretqs length
  const addMoreQuestions = () => {
    let newQCopy = currentQuestions
    newQCopy = newQCopy.slice(0, displayedQuestions.length + 2)
    setDisplayedQuestions(newQCopy)
  }

  //will call for question info on initial render
  useEffect(() => {
    getProductQuestions()
  }, [])

  const {toggle, visible} = useModal();

  return (
    <div className={'qandawrapper'}>
      <h3 className={'qandatitle'}>QUESTIONS & ANSWERS</h3>
      {/* <button onClick={() => { getProductQuestions() }}>Test Button</button> */}
      <QASearch />
      <div className={'qalistwrapper'}>
        {displayedQuestions.length > 0 && displayedQuestions.map((question, index) => {
          return <QAListItem question={question} key={index} />
        })}
      </div>
      {displayedQuestions.length < currentQuestions.length && <button onClick={() => {addMoreQuestions()}} className={"qanda-button"}>MORE ANSWERED QUESTIONS</button>}
      <button className={"qanda-button"}>ADD A QUESTION +</button>
      <button onClick={toggle}>Show Modal</button>
      <Modal visible={visible} toggle={toggle} />
    </div>
  )
}

export default QuestionsAndAnswers;

/*
TODOs:
--Make initial get request to render QandA for particular product -- done
--Need to add functionality to search, more answered questions and add a question


General API for Atelier
https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/

Atelier API always requires Github token in Authorization in header

List Questions
GET /qa/questions

A semi succesful QA get request via postman for question list:
https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=5
A succesful QA get request for a product with a real id
https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=37311

37311 to 37315

A semi succesful QA get request via postman for answers:
https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/5/answers

*/