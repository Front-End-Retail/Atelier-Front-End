import React from 'react';
import magnifyingGlass from '../assets/search.png';
const axios = require('axios');

const { useState, useEffect } = React;

const QAQuestionSubmitForm = ({}) => {
  const [questionText, setQuestionText] = useState('')
  const [nickName, setQuestionText] = useState('')
  const [emailText, setQuestionText] = useState('')

  return (
    <form>
      <label>
        <p>Your Question*</p>
        <textarea type={"text"} cols={"50"} rows={"5"} maxLength={"1000"} required={"required"}></textarea>
      </label>
      <label>
        What is your nickname*
        <input type={"text"} maxLength={"60"} required={"required"}></input>
      </label>
      <div></div>
      <label>
        Your email*
        <input type={"email"} required={"required"}></input>
      </label>
    </form>
  )
}

export default QAQuestionSubmitForm;