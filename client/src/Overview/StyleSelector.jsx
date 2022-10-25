import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const StyleSelector = ({ styles, selectedStyle, changeStyle }) => {

  return (
    <div className="style-selector">
      <span><b>Style > </b>{selectedStyle.name}</span>
      <div className="style-thumbnails">
        {styles.map((style, i) => {
          return (
            // <FontAwesomeIcon className="check-mark" icon={faCircleCheck} style={{ visibility: selectedStyle === style ? 'visible' : 'hidden' }} />
            <div className="check-container">
              <div data-testid="styles" className="image-container" style={{ borderColor: selectedStyle === style ? '#34699E' : '#fff' }}>
                <img onClick={e => {
                  e.preventDefault();
                  changeStyle(style)
                }
                } className="style-image" src={style.photos[0].thumbnail_url} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;