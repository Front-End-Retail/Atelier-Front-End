import React from 'react';
import QAAnswerImage from './QAAnswerImage.js';
import { format, parseISO } from "date-fns";
const axios = require('axios');

const { useState, useEffect } = React;

const QAAnswerItem = ({ answer, addAnswerHelpfulness, updateHelpfulCount }) => {
  const [answerId, setAnswerId] =useState(answer.answer_id)
  const [photos, setPhotos] = useState([])
  const [votedAHelpful, setVotedAHelpful] = useState(false)

  useEffect(() => {
    setPhotos(answer.photos)
  }, [])

  const voteAHelpful = () => {
    if (!votedAHelpful) {
      addAnswerHelpfulness(answerId)
      updateHelpfulCount(answerId)
      setVotedAHelpful(true)
    }
  }

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
          <p className={"underlined"}onClick={() => {voteAHelpful()}}>Yes </p><p>({answer.helpfulness})</p>
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