import React from "react";
import ReactDOM from "react-dom";
import QuestionSubmitForm from './QAQuestionSubmitForm.js'

const container = document.getElementById('root');

const { useState, useEffect } = React;

const QAAddQuestionModal = ({ visible, toggle, currentId, getProductQuestions, currentProductName }) => visible ? ReactDOM.createPortal(
  <div className="qa-modal">
    <div className="modal-pop-qa" role="dialog" aria-modal="true">
      <h2 className="modal-title">Ask Your Question</h2>
      <h3 className="modal-subtitle">About the {currentProductName}</h3>
      <QuestionSubmitForm toggle={toggle} currentId={currentId} getProductQuestions={getProductQuestions} />
    </div>
    <div className="modal-overlay" onClick={toggle}></div>
  </div>, container
) : null;

export default QAAddQuestionModal;