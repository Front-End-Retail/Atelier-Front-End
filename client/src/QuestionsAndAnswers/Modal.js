import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById('root');

const Modal = ({ visible, toggle }) => visible ? ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop" role="dialog" aria-modal="true">
      <h3>Hello World</h3>
      <p>This is an attempt at making our default modal.</p>
      <button type="button" onClick={toggle}>Close</button>
    </div>
    <div className="modal-overlay"></div>
  </div>, container
) : null;

export default Modal;