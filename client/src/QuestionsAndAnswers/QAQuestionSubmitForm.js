import React from 'react';
import magnifyingGlass from '../assets/search.png';
const axios = require('axios');

const { useState, useEffect } = React;

const QAQuestionSubmitForm = ({ toggle, currentId, getProductQuestions }) => {
  const [questionText, setQuestionText] = useState('')
  const [nickName, setNickName] = useState('')
  const [emailText, setEmailText] = useState('')
  const [validText, setValidText] = useState(false)
  const [validName, setValidName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  let questionSubmission = {
    body: questionText,
    name: nickName,
    email: emailText,
    product_id: Number(currentId)
  }

  const submitQuestionForm = () => {
    event.preventDefault()
    if (validateQuestionForm()) {
      console.log("A valid form", questionSubmission)
      axios.default.post('http://localhost:3000/qanda/question', questionSubmission).then(() => {
        getProductQuestions()
        toggle()
      }).catch((err) => {
        console.log('error sending question', err)
      })
    } else {
      console.log("An invalid form")
    }
  }

  const validateQuestionForm = () => {
    let isValid = true
    if (questionText.length < 1000 && questionText.length > 0) {
      setValidText(false)
    } else if (questionText.length > 1000 || questionText.length === 0) {
      console.log('qtext', questionText.length, questionText)
      isValid = false
      setValidText(true)
    }
    if (nickName.length < 60 && nickName.length > 0) {
      setValidName(false)
    } else if (nickName.length > 60 || nickName.length === 0) {
      console.log('name', nickName.length, nickName)
      isValid = false
      setValidName(true)
    }
    if (emailText.indexOf('@') !== -1 && emailText.indexOf('.') !== -1) {
      setValidEmail(false)
    } else if (emailText.indexOf('@') === -1 || emailText.indexOf('.') === -1) {
      console.log('email', emailText)
      isValid = false
      setValidEmail(true)
    }
    return isValid
  }

  return (
    <div>
      <form>
        <label>
          <p className={"form-input-title"}>Your question*</p>
          <textarea type={"text"} cols={"58"} rows={"5"} maxLength={"1000"} required={"required"} value={questionText} onChange={(e) => { setQuestionText(event.target.value) }} className={"form-input-textblock"}></textarea>
          {validText && <div className={"warning-text"}>*Required, must be less than 1000 characters* </div>}
        </label>
        <label>
          <p className={"form-input-title"}>Your nickname*</p>
          <input type={"text"} maxLength={"60"} required={"required"} placeholder={"Example: jackson11!"} value={nickName} onChange={(e) => { setNickName(event.target.value) }} className={"qModalInput"}></input>
          {validName && <><div className={"warning-text"}>*Required, must be less than 60 characters*</div></>}
        </label>
        <label>
          <p className={"form-input-title"}>Your email*</p>
          <input type={"email"} required={"required"} value={emailText} onChange={(e) => { setEmailText(event.target.value) }} className={"qModalInput"}></input>
          {validEmail && <><div className={"warning-text"}>*Required, must be correctly formated email address*</div></>}
        </label>
        <div className={"modal-button-container"}>
          <button type="button" onClick={() => { submitQuestionForm() }} className={"modalSubmissionButton"}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default QAQuestionSubmitForm;