import React from "react";
import ReactDOM from "react-dom";
import ReviewForm from './ReviewForm.js'

const container = document.getElementById('root');

const ReviewModal = ({ visible, toggle, metaReviews, currentProductName }) => visible ?

ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop-review" role="dialog" aria-modal="true">
      <div id="form-title">Write Your Review</div>
      <p data-testid="product-title-form" ><b>How was the {currentProductName}?</b></p>
      <ReviewForm toggle={toggle} metaReviews={metaReviews} currentProductName={currentProductName}/>
    </div>
    <div onClick={toggle} className="modal-overlay"></div>
  </div>, container
) : null;

export default ReviewModal;