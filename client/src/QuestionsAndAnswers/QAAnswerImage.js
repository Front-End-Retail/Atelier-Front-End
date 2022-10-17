import React from 'react';
const axios = require('axios');

const { useState, useEffect } = React;

const QAAnswerImage = ({ photo }) => {


  return (
    <img className={"answer-image"} src={photo.url}></img>
  )
}

export default QAAnswerImage;