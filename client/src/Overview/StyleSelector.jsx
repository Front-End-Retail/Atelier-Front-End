import React, { useState, useEffect } from 'react';

const StyleSelector = ({ currentStyle, selectedStyle, setSelectedStyle }) => {

  return (
    <div className="style-selector">
      <span><em>Style > </em>{selectedStyle.name}</span>
      <div className="style-thumbnails">
        {currentStyle.map((style, i) => {
          return (
            <img onClick={e => {
              e.preventDefault();
              setSelectedStyle(style)
            }
            } className="style-image" key={i} src={style.photos[0].thumbnail_url} />
          )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;