import React, { useState, useEffect } from 'react';

const StyleSelector = ({ currentStyle }) => {
  return (
    <div className="style-selector">
      <span><em>Style ></em> Selected Style</span>
      <div className="style-thumbnails">
        {currentStyle.map((style, i) => {
          return (
            <img className="style-image" key={i} src={style.photos[0].thumbnail_url} />
          )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;