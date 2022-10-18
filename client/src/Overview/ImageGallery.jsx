import React, { useState, useEffect } from 'react';

const ImageGallery = ({ selectedStyle }) => {
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    setMainImage(selectedStyle.photos[0].url)
  }, [selectedStyle])
  return (
    <div className="image-gallery">
      <img className="main-image" src={mainImage} />
      <div className="thumbnails-container">
        {selectedStyle.photos.map(thumbnail => {
          return (
            <img onClick={() => {
              setMainImage(thumbnail.url)
            }} src={thumbnail.thumbnail_url} />
          )
        })}
      </div>
    </div >
  )
}
export default ImageGallery;