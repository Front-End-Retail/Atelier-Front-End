import React from 'react';

const { useState, useEffect } = React;

const QuestionsAndAnswers = () => {

  const = tryARequest => {

  }

  return (
    <div>
      Questions And Answers
      <button onClick={()=>{}}>Test Button</button>
    </div>
  )
}

export default QuestionsAndAnswers;

/*
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