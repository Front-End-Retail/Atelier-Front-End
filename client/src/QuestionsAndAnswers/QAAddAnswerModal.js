import React from "react";
import ReactDOM from "react-dom";
import QAAnswerSubmitForm from './QAAnswerSubmitForm.js'

const container = document.getElementById('root');

const QAAddAnswerModal = ({ visible, toggle, currentProductName, questionText, questionId, getProductQuestions }) => visible ? ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop" role="dialog" aria-modal="true">
      <h2 className="modal-title">Submit Your Answer</h2>
      <h3 className="modal-subtitle">{currentProductName} : {questionText}</h3>
      <QAAnswerSubmitForm toggle={toggle} questionId={questionId} getProductQuestions={getProductQuestions} />
    </div>
    <div className="modal-overlay" onClick={toggle}></div>
  </div>, container
) : null;

export default QAAddAnswerModal;