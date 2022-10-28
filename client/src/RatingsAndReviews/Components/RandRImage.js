import React from 'react';
import ImageModal from '../..//QuestionsAndAnswers/ImageModal.js'
import useImageModal from '../../QuestionsAndAnswers/useImageModal.js'

const { useState, useEffect } = React;

const RandRImage = ({ photo }) => {

  const {toggleImage, imageVisibility} = useImageModal();

  return (
    <div className={"image-wrapper"}>
      <img onClick={toggleImage} className={"review-image"} src={photo.url}></img>
      <ImageModal imageVisibility={imageVisibility} toggleImage={toggleImage} imagePath={photo.url} />
    </div>
  )
}

export default RandRImage;