import React, { useState, useEffect } from 'react';

const ImageGallery = ({ selectedStyle }) => {
  console.log(selectedStyle.photos[0].url);
  return (
    <div style={{ backgroundImage: selectedStyle.photos[0].url }} className="image-gallery" >
    </div >
  )
}
export default ImageGallery;