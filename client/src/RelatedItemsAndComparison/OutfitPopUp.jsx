import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const { useState, useEffect } = React;

const OutfitPopUp = ({ closePopUp }) => {
  return (
    <div>
      <div className='outfitPopUp-container'>
        <button className='closeBtn' onClick={() => closePopUp()}><FontAwesomeIcon id='exit-icon' icon={faTimes} /></button>
        <p>Style already added!</p>
      </div>
      <div className="modal-overlay" onClick={() => { closePopUp() }}></div>
    </div>
  )
}

export default OutfitPopUp;