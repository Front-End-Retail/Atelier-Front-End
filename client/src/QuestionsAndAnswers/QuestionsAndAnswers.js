import React from 'react';
import QASearch from './QASearch.js'
import QAListItem from './QAListItem.js'
import Modal from './Modal'
import useModal from './useModal'
import SortbyHelpfulness from './QAHelpers.js'
import '../assets/stylesqanda.css';
const axios = require('axios');

const { useState, useEffect } = React;

const QuestionsAndAnswers = () => {
  const [currentId, setCurrentId] = useState('37314')
  const [currentQuestions, setCurrentQuestions] = useState([])
  const [displayedQuestions, setDisplayedQuestions] = useState([])
  const [searchedQuestions, setSearchedQuestions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [qsOnPage, setQsOnPage] = useState(4)

  const getProductQuestions = () => {
    axios.default.get('http://localhost:3000/qanda', { params: { specificURL: `qa/questions?product_id=${currentId}&count=100` } }).then((data) => {
      let sortedData = SortbyHelpfulness(data.data.results, "question_helpfulness")
      setCurrentQuestions(sortedData)
    }).catch(err => {
      console.log('error getting', err)
    })
  }

  const addQuestionHelpfulness = (questionId) => {
    axios.default.put('http://localhost:3000/qanda', { questionId: questionId }).then((data) => {
      getProductQuestions()
    }).catch((err) => {
      console.log('error put to helpfullness', err)
    })
  }

  //will set initial list of displayed questions
  useEffect(() => {
    let copyQuestions = currentQuestions
    copyQuestions = copyQuestions.slice(0, qsOnPage)
    setDisplayedQuestions(copyQuestions)
  }, [currentQuestions])

  //add more answered questions if displayqs length is less than curretqs length
  const addMoreQuestions = () => {
    setQsOnPage(qsOnPage + 2)
  }

  useEffect(() => {
    let newQCopy = currentQuestions
    newQCopy = newQCopy.slice(0, qsOnPage)
    setDisplayedQuestions(newQCopy)
  }, [qsOnPage])

  //will call for question info on initial render
  useEffect(() => {
    getProductQuestions()
  }, [])

  //update search term function to be passed down into search bar component
  const newSearchTerm = (theTerm) => {
    setSearchTerm(theTerm)
  }

  //useEffect on the searchTerm, if it's updated and greater than 3, update searchedQuestions
  useEffect(() => {
    if (searchTerm.length > 3) {
      let aCopyOfQuestions = currentQuestions
      let searchString = searchTerm.toLowerCase()
      aCopyOfQuestions = aCopyOfQuestions.filter(question => {
        let questionText = question.question_body.toLowerCase()
        if (questionText.indexOf(searchString) !== -1) {
          return question
        }
      })
      setSearchedQuestions(aCopyOfQuestions)
    } else {
      setSearchedQuestions([])
    }
  }, [searchTerm])

  //the basic modal logic, custom hook
  const {toggle, visible} = useModal();

  return (
    <div className={'qandawrapper'}>
      <h3 className={'qandatitle'}>QUESTIONS & ANSWERS</h3>
      {/* <button onClick={() => { getProductQuestions() }}>Test Button</button> */}
      <QASearch newSearchTerm={newSearchTerm} />
      <div className={'qalistwrapper'}>
        {searchedQuestions.length > 0 && searchedQuestions.map((question, index) => {
          return <QAListItem question={question} key={index} addQuestionHelpfulness={addQuestionHelpfulness} />
        })}
        {displayedQuestions.length > 0 && searchedQuestions.length < 1 && displayedQuestions.map((question, index) => {
          return <QAListItem question={question} key={index} addQuestionHelpfulness={addQuestionHelpfulness} />
        })}
      </div>
      {displayedQuestions.length < currentQuestions.length && <button onClick={() => {addMoreQuestions()}} className={"qanda-button"}>MORE ANSWERED QUESTIONS</button>}
      <button className={"qanda-button"}>ADD A QUESTION +</button>
      {/* <button onClick={toggle}>Show Modal</button>
      <Modal visible={visible} toggle={toggle} /> */}
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