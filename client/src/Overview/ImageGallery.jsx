import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faExpand } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const ImageGallery = ({ selectedStyle, fullscreen, setFullscreen }) => {
  const [mainImages, setMainImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSelected, setIsSelected] = useState('');

  const previousSlide = () => {
    const lastIndex = mainImages.length - 1;
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
    setIsSelected(thumbnails[index]);
  }

  const nextSlide = () => {
    const lastIndex = mainImages.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? lastIndex : currentImageIndex + 1;
    setCurrentImageIndex(index);
    setIsSelected(thumbnails[index]);
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
  }, [selectedStyle])

  const zoom = (e) => {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }

  return (
    <>
      <div className={fullscreen ? 'fullscreen' : "image-slide"} onMouseMove={fullscreen ? (e) => { zoom(event.target) } : null} style={{
        backgroundImage: `url(${mainImages[currentImageIndex]})`,
        backgroundSize: 'contain'
      }}>
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
        <FontAwesomeIcon className='fullscreenIcon' icon={faExpand} onClick={() => setFullscreen(!fullscreen)} />
      </div>
    </>
  )
}
export default ImageGallery;