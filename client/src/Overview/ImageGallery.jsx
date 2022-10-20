import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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
    const shouldResetIndex = currentImageIndex === lastIndex
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
    setCurrentImageIndex(0);
  }, [selectedStyle])


  return (
    <div className="image-gallery">
      <FontAwesomeIcon icon={faChevronLeft}
        className={`slide-arrow left`}
        onClick={previousSlide} />
      <div className="image-slide" style={{
        backgroundImage: `url(${mainImages[currentImageIndex]})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover'
      }}>
        <div className='thumbnails-container'>
          {thumbnails.map(thumbnail => {
            return (
              <div onClick={() => {
                setCurrentImageIndex(thumbnails.indexOf(thumbnail));
              }} className='thumbnail-overview' style={
                {
                  backgroundImage: `url(${thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'

                }
              }></div>
            )
          })}
        </div>
      </div>
      <FontAwesomeIcon icon={faChevronRight}
        className={`slide-arrow right`}
        onClick={nextSlide} />
    </div >
  )
}
export default ImageGallery;