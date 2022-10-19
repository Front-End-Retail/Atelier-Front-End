import React from "react";
import ReactDOM from "react-dom";
import StarRating from './StarRating.js'

const container = document.getElementById('root');

const ReviewModal = ({ visible, toggle }) => visible ?

ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop" role="dialog" aria-modal="true">
      <h3>Write Your Review</h3>
      <p><b>Need product name here</b></p>
      <form>
        <label>
          Username:
          <input type="text" name="name" placeholder="Example: jackson11!"/>
          </label>
          <StarRating />
          <p>Would you recommend this product?</p>
            <input type="radio" className="helpful radio" name="helpful" value="yes"/>
              <label for="yes">Yes</label>
            <input type="radio" className='helpful-radio' name="helpful" value="no"/>
              <label for="No">No</label>
          <p>Characteristics</p>
            <input type="radio" value="1"/>
              <label for="">1</label>
            <input type="radio" value="2"/>
              <label for="">2</label>
            <input type="radio" value="3"/>
              <label for="">3</label>
            <input type="radio" value="4"/>
              <label for="">4</label>
            <input type="radio" value="5"/>
              <label for="">5</label>
          <label>Review Summary:
              <input type="text" name="name" placeholder="Example: Best purchase ever!"/>
            </label>
          <label for="story">Tell us your story:</label>
            <textarea id="story" name="story"
                      rows="10" cols="60">
            "Why did you like the product or not?"
            </textarea>
        <input type="submit" value="Submit" />
      </form>
      {/* Perhaps close the form on successful submission? Or trigger rerendering of modal on successful submission with something like "Thanks
      for the reviews!" */}
      <button type="button" onClick={toggle}>Close</button>
    </div>
    <div className="modal-overlay"></div>
  </div>, container
) : null;

export default ReviewModal;