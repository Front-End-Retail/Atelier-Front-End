import React from 'react';

const { useState, useEffect } = React;

const QuestionsAndAnswers = () => {

  return (
    <div>
      Questions And Answers
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

The parameters for an axious request to QandA
Parameter	    Type	  Description
product_id	integer	Specifies the product for which to retrieve questions.
page	integer	Selects the page of results to return. Default 1.
count	integer	Specifies how many results per page to return. Default 5.
*/