import React from "react";
import ReactDOM from "react-dom";
import QAAnswerSubmitForm from './QAAnswerSubmitForm.js'

const container = document.getElementById('root');

const QAAddAnswerModal = ({ visible, toggle, currentProductName, questionText, questionId }) => visible ? ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop" role="dialog" aria-modal="true">
      <h3>Submit Your Answer</h3>
      <p>{currentProductName} : {questionText}</p>
      <QAAnswerSubmitForm toggle={toggle} questionId={questionId} />
    </div>
    <div className="modal-overlay" onClick={toggle}></div>
  </div>, container
) : null;

export default QAAddAnswerModal;