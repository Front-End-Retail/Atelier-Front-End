import React, { useState, useEffect } from 'react';

const StyleSelector = ({ styles, selectedStyle, setSelectedStyle }) => {

  return (
    <div className="style-selector">
      <span><b>Style > </b>{selectedStyle.name}</span>
      <div className="style-thumbnails">
        {styles.map((style, i) => {
          return (
            <div key={i} className="image-container">
              <img onClick={e => {
                e.preventDefault();
                setSelectedStyle(style)
              }
              } className="style-image" src={style.photos[0].thumbnail_url} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;