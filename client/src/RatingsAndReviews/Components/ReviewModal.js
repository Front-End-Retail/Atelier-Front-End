import React from "react";
import ReactDOM from "react-dom";
import ReviewForm from './ReviewForm.js'

const container = document.getElementById('root');

const ReviewModal = ({ visible, toggle, metaReviews }) => visible ?

ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop" role="dialog" aria-modal="true">
      <h3>Write Your Review</h3>
      <p><b>Need product name here</b></p>
      <ReviewForm toggle={toggle} metaReviews={metaReviews}/>
      {/* Perhaps close the form on successful submission? Or trigger rerendering of modal on successful submission with something like "Thanks
      for the reviews!" */}
      <button type="button" onClick={toggle}>Close</button>
    </div>
    <div className="modal-overlay"></div>
  </div>, container
) : null;

export default ReviewModal;