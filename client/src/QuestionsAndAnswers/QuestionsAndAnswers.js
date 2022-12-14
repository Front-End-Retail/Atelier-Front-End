import React from 'react';
import QASearch from './QASearch.js'
import QAListItem from './QAListItem.js'
import QAAddQuestionModal from './QAAddQuestionModal.js'
import useModal from './useModal'
import { SortbyHelpfulness } from './QAHelpers.js'
import clicktracker from '../clicktracker.js'
const axios = require('axios');
import baseURL from '../baseURL.js'

const { useState, useEffect } = React;

const QuestionsAndAnswers = ({ currentProductID, currentProductName }) => {
  const [currentId, setCurrentId] = useState(0)
  const [currentQuestions, setCurrentQuestions] = useState([])
  const [displayedQuestions, setDisplayedQuestions] = useState([])
  const [searchedQuestions, setSearchedQuestions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [qsOnPage, setQsOnPage] = useState(4)

  //reaches out to the api and retrieves questions for currentId
  const getProductQuestions = () => {
    axios.default.get(`${baseURL}/qanda`, { params: { specificURL: `qa/questions?product_id=${currentId}&count=100` } }).then((data) => {
      let sortedData = SortbyHelpfulness(data.data.results, "question_helpfulness")
      setCurrentQuestions(sortedData)
    }).catch(err => {
      console.log('error getting', err)
    })
  }

  //iterates the 'helpful' count of a question
  const addQuestionHelpfulness = (elementID, questionId) => {
    clicktracker(elementID, 'QandA', new Date())
    axios.default.put(`${baseURL}/qanda/qhelp`, { questionId: questionId }).then((data) => {
      getProductQuestions()
    }).catch((err) => {
      console.log('error put to helpfullness', err)
    })
  }

  //iterates the 'helpful' count of an answer
  const addAnswerHelpfulness = (elementID, answerId) => {
    clicktracker(elementID, 'QandA', new Date())
    axios.default.put(`${baseURL}/qanda/ahelp`, { answerId: answerId }).then((data) => {
      getProductQuestions()
    }).catch((err) => {
      console.log('error put to helpfullness', err)
    })
  }

  const reportAnAnswer = (answerId) => {
    axios.default.put(`${baseURL}/qanda/areport`, { answerId: answerId }).then((data) => {
      console.log("NARC")
      getProductQuestions()
    }).catch((err) => {
      console.log('error put to answer report', err)
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

  //watches the questions on page count, renders more questions as count changes
  useEffect(() => {
    let newQCopy = currentQuestions
    newQCopy = newQCopy.slice(0, qsOnPage)
    setDisplayedQuestions(newQCopy)
  }, [qsOnPage])

  //will call for question info on initial render
  useEffect(() => {
    setCurrentId(currentProductID)
  }, [currentProductID])

  //watches for a new product Id on page update- resets current question array and display count before getting new data
  useEffect(() => {
    setCurrentQuestions([])
    setQsOnPage(4)
    if (currentId !== 0) {
      getProductQuestions()
    }
  }, [currentId])

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
  const { toggle, visible } = useModal();

  return (
    <div className={'qandawrapper'} data-testid="qandacomponent">
      <h2 className={'qandatitle'}>QUESTIONS & ANSWERS</h2>
      <QASearch newSearchTerm={newSearchTerm} />
      <div className={'qalistwrapper'}>
        {searchedQuestions.length > 0 && searchedQuestions.map((question, index) => {
          return <QAListItem question={question} key={index} addQuestionHelpfulness={addQuestionHelpfulness} addAnswerHelpfulness={addAnswerHelpfulness} currentProductName={currentProductName} currentId={currentId} getProductQuestions={getProductQuestions} reportAnAnswer={reportAnAnswer} />
        })}
        {displayedQuestions.length > 0 && searchedQuestions.length < 1 && searchTerm.length < 4 && displayedQuestions.map((question, index) => {
          return <QAListItem question={question} key={index} addQuestionHelpfulness={addQuestionHelpfulness} addAnswerHelpfulness={addAnswerHelpfulness} currentProductName={currentProductName} currentId={currentId} getProductQuestions={getProductQuestions} reportAnAnswer={reportAnAnswer} />
        })}
      </div>
      {displayedQuestions.length < currentQuestions.length && <button onClick={() => { addMoreQuestions() }} className={"qanda-button"}>MORE ANSWERED QUESTIONS</button>}
      <button onClick={toggle} className={"qanda-button"}>ADD A QUESTION +</button>
      <QAAddQuestionModal visible={visible} toggle={toggle} currentId={currentId} getProductQuestions={getProductQuestions} currentProductName={currentProductName} />
    </div>
  )
}

export default QuestionsAndAnswers;