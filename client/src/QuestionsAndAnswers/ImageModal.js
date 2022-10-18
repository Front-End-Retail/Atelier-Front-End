import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById('root');

const ImageModal = ({ imageVisibility, toggleImage, imagePath }) => imageVisibility ? ReactDOM.createPortal(
  <div className="modal">
    <div className="image-modal-pop" role="dialog" aria-modal="true">
      <img className={"image-in-modal"} src={imagePath}></img>
      <button type="button" onClick={toggleImage}>Close</button>
    </div>
    <div className="modal-overlay"></div>
  </div>, container
) : null;

export default ImageModal;