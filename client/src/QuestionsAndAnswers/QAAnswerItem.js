import React from 'react';
import QAAnswerImage from './QAAnswerImage.js';
import { format, parseISO } from "date-fns";
const axios = require('axios');

const { useState, useEffect } = React;

const QAAnswerItem = ({ answer }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    setPhotos(answer.photos)
  }, [])

  return (
    <div className={"qalist-totalanswerwrapper"}>
      <div className={"qalist-answer-wrapper"}>
        <h3 className={"qalist-largea"}>A:</h3>
      </div>
      <div className={"qalist-aline-wrapper"}>
        <div className={"qalist-answer"}>
          <p className={"qalist-a-text"}>{answer.body}</p>
        </div>
        <div className={"qalist-a-image-wrapper"}>
          {photos.map((photo, index) => {
            return <QAAnswerImage photo={photo} key={index} />
          })}
        </div>
        <div className={"qalist-answer-info-wrapper"}>
          <p>by {answer.answerer_name}, {format(parseISO(answer.date), 'MMMM d, yyyy')}</p>
          <p> | </p>
          <p>Helpful?</p>
          <p>Yes ({answer.helpfulness})</p>
          <p> | </p>
          <p> Report </p>
        </div>
      </div>
    </div>
  )
}

export default QAAnswerItem;

/*
TODOs:
--Reformat the "A:" so the answer info wrapper always lines up correctly beneath the answer text

*/