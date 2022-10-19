import React, { useState, useEffect } from 'react';

const ImageGallery = ({ selectedStyle }) => {
  const [mainImage, setMainImage] = useState('');
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    setMainImage(selectedStyle.photos[0].url)
    let temp = [];
    selectedStyle.photos.forEach(photo => {
      temp.push(photo);
    })
    setThumbnails(temp);
  }, [selectedStyle])


  return (
    <div className="image-gallery">
      <img className="main-image" src={mainImage} />
      <div className="thumbnails-container">
        {thumbnails.map((thumbnail, i) => {
          return (
            <img key={i} onClick={() => {
              setMainImage(thumbnail.url)
            }} src={thumbnail.thumbnail_url} />
          )
        })}
      </div>
    </div >
  )
}
export default ImageGallery;