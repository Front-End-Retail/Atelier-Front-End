import React, { useState, useEffect } from 'react';

const ImageGallery = ({ selectedStyle }) => {
  const [mainImages, setMainImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = mainImages.length - 1;
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  }

  const nextSlide = () => {
    const lastIndex = mainImages.length - 1;
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex + 1;
    setCurrentImageIndex(index);
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
      <div
        className={`slide-arrow left`}
        onClick={previousSlide}>Previous
      </div>
      <div className="image-slide" style={{
        backgroundImage: `url(${mainImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div
        className={`slide-arrow right`}
        onClick={nextSlide}>Next
      </div>
    </div >
  )
}
export default ImageGallery;