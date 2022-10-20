import React from 'react';
const axios = require('axios');

const { useState, useEffect } = React;

const QAAnswerSubmitForm = ({ toggle, questionId }) => {
  const [answerText, setAnswerText] = useState('')
  const [answerName, setAnswerName] = useState('')
  const [answerEmail, setAnswerEmail] = useState('')
  const [validAnswerText, setValidAnswerText] = useState(false)
  const [validAnswerName, setValidAnswerName] = useState(false)
  const [validAnswerEmail, setValidAnswerEmail] = useState(false)

  let answerFormObject = {
    body: answerText,
    name: answerName,
    email: answerEmail,
    photos: [],
    question_id: questionId
  }

  const submitAnswerForm = () => {
    event.preventDefault()
    if (answerFormValidation()) {
      console.log("A Valid answer form!")
      axios.default.post('http://localhost:3000/qanda/answer', answerFormObject).then(() => {
        // getProductQuestions()
        // toggle()
        console.log('posted an answer')
      }).catch((err) => {
        console.log('error sending question', err)
      })
      // toggle()
    } else {
      console.log("An invalid form!")
    }
  }

  const answerFormValidation = () => {
    let isValid = true
    if (answerText.length < 1000 && answerText.length > 0) {
      setValidAnswerText(false)
    } else if (answerText.length > 1000 || answerText.length === 0) {
      isValid = false
      setValidAnswerText(true)
    }
    if (answerName.length < 60 && answerName.length > 0) {
      setValidAnswerName(false)
    } else {
      isValid = false
      setValidAnswerName(true)
    }
    if (answerEmail.indexOf('@') !== -1 && answerEmail.indexOf('.') !== -1) {
      setValidAnswerEmail(false)
    } else {
      isValid = false
      setValidAnswerEmail(true)
    }
    return isValid
  }

  return (
    <div className={'QAAnswerSubmitForm'}>
      <form>
        <label>
          <div>Your Answer*</div>
          <textarea type={"text"} cols={"61"} rows={"5"} maxLength={"1000"} required={"required"} value={answerText} onChange={(e) => { setAnswerText(e.target.value) }}></textarea>
          {validAnswerText && <div className={"warning-text"}>*Required, must be less than 1000 characters*  </div>}
        </label>
        <table>
          <tr>
            <label className={"qModalRow"}>
              <td>What is your nickname?*</td>
              <td><input type={"text"} maxLength={"60"} required={"required"} value={answerName} onChange={(e) => { setAnswerName(e.target.value) }} className={"qModalInput"}></input></td>
              {validAnswerName && <><td></td><td><div className={"warning-text"}>*Required, must be less than 60 characters*</div></td></>}
            </label>
          </tr>
          <tr>
            <label className={"qModalRow"}>
              <td>Your email*</td>
              <td><input type={"email"} required={"required"} value={answerEmail} onChange={(e) => { setAnswerEmail(e.target.value) }} className={"qModalInput"}></input></td>
              {validAnswerEmail && <><td></td><td><div className={"warning-text"}>*Required, must be correctly formated email address*</div></td></>}
            </label>
          </tr>
        </table>
        <button type="button" onClick={() => { submitAnswerForm() }}>Submit</button>
      </form>
    </div>
  )
}

export default QAAnswerSubmitForm;