import React, { useState, useEffect } from 'react';

const ImageGallery = ({ selectedStyle }) => {
  const [mainImages, setMainImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = mainImages.length
  }

  useEffect(() => {
    let tempMain = [];
    let tempThumb = [];
    selectedStyle.photos.forEach(photo => {
      tempMain.push(photo.url);
      tempThumb.push(photo.thumbnail_url);
    })
    setMainImages(tempMain)
    setThumbnails(tempThumb);
  }, [selectedStyle])


  return (
    <div className="image-gallery">

    </div >
  )
}
export default ImageGallery;