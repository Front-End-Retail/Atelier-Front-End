import React from 'react';
import ImageModal from './ImageModal.js'
import useImageModal from './useImageModal.js'

const { useState, useEffect } = React;

const QAAnswerImage = ({ photo }) => {

  const {toggleImage, imageVisibility} = useImageModal();

  return (
    <div className={"image-wrapper"} >
      <img onClick={toggleImage} className={"answer-image"} src={photo.url}></img>
      <ImageModal imageVisibility={imageVisibility} toggleImage={toggleImage} imagePath={photo.url} />
    </div>
  )
}

export default QAAnswerImage;