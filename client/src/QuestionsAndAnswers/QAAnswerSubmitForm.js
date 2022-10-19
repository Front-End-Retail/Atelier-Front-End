import React from 'react';
const axios = require('axios');

const { useState, useEffect } = React;

const QAAnswerSubmitForm = ({ newSearchTerm }) => {

  return (
    <div className={'QAAnswerSubmitForm'}>
      <form>
        <label>
          <p>Your Answer*</p>
          <textarea type={"text"} cols={"50"} rows={"5"} maxLength={"1000"} required={"required"}></textarea>
        </label>
        <label>
          What is your nickname?*
          <input></input>
        </label>
        <label>
          Your email*
          <input></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default QAAnswerSubmitForm;