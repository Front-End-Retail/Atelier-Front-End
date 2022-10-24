import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById('root');

const ImageModal = ({ imageVisibility, toggleImage, imagePath }) => imageVisibility ? ReactDOM.createPortal(
  <div className="image-modal-total">
    <div className="image-modal-pop" role="dialog" aria-modal="true">
      <img className={"image-in-modal"} src={imagePath}></img>
    </div>
    <div className="modal-overlay" onClick={toggleImage}></div>
  </div>, container
) : null;

export default ImageModal;