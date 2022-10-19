import React from "react";
import ReactDOM from "react-dom";
import QuestionSubmitForm from './QAQuestionSubmitForm.js'

const container = document.getElementById('root');

const { useState, useEffect } = React;

const QAAddQuestionModal = ({ visible, toggle, currentId, getProductQuestions }) => visible ? ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop" role="dialog" aria-modal="true">
      <h2>Ask Your Question</h2>
      <h3>About the ADD PRODUCT NAME HERE</h3>
      <QuestionSubmitForm toggle={toggle} currentId={currentId} getProductQuestions={getProductQuestions} />
    </div>
    <div className="modal-overlay" onClick={toggle}></div>
  </div>, container
) : null;

export default QAAddQuestionModal;