import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faExpand } from '@fortawesome/free-solid-svg-icons'
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
    e.target.style.backgroundSize = "150%";
    let offsetX, offsetY, x, y
    var zoomer = e.currentTarget;
    console.log(e, e.target.offsetHeight, e.target.offsetWidth, e.nativeEvent.offsetX)
    e.nativeEvent.offsetX ? offsetX = e.nativeEvent.offsetX : offsetX = 0
    e.nativeEvent.offsetY ? offsetY = e.nativeEvent.offsetY : offsetY = 0
    x = offsetX / e.target.offsetWidth * 100
    y = offsetY / e.target.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';

  }

  const fullscreenStyles = {
    backgroundImage: `url(${mainImages[currentImageIndex]})`,
    cursor: 'zoom-in'
  }

  const normalImageStyles = {
    backgroundImage: `url(${mainImages[currentImageIndex]})`,
    width: '60vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '50% 50%',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(5, 20%)'
  }
  return (
    <>
      <div className={fullscreen ? 'fullscreen' : "image-slide"} style={fullscreen ? fullscreenStyles : normalImageStyles} onClick={fullscreen ? zoom : null}>
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