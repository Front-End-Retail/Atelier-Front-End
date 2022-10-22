import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
const ImageGallery = ({ selectedStyle }) => {
  const [mainImages, setMainImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [isSelected, setIsSelected] = useState('');

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

  const handleSelected = (selection) => {
    setIsSelected(selection);
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
    setIsSelected(currentImageIndex);
  }, [selectedStyle])


  return (
    <>
      <div className="image-slide" style={{
        backgroundImage: `url(${mainImages[currentImageIndex]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }} onClick={() => setFullscreen(!fullscreen)}>

        <div className='container-of-containers'>
          <div className='thumbnails-container'>
            {thumbnails.map((thumbnail, i) => {
              return (
                <div key={i} onClick={() => {
                  setCurrentImageIndex(thumbnails.indexOf(thumbnail));
                  handleSelected(thumbnail);
                }} className='thumbnail-overview' style={isSelected === thumbnail ? {
                  backgroundImage: `url(${thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '2px solid #8DB7E0'
                } :
                  {
                    backgroundImage: `url(${thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }
                } />
              )
            })}
          </div>
        </div>
        <FontAwesomeIcon icon={faChevronLeft}
          className={`slide-arrow left`}
          onClick={previousSlide} />
        <FontAwesomeIcon icon={faChevronRight}
          className={`slide-arrow right`}
          onClick={nextSlide} />
      </div>
    </>
  )
}
export default ImageGallery;