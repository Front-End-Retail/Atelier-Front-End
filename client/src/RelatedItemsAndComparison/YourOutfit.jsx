import React from 'react';
import '../assets/related.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const { useState, useEffect } = React;

const YourOutfit = ({outfit, updateOutfitList}) =>{


  return (
    <div className='currentOutfit'>
      <div className='timesIcon' onClick={()=>{updateOutfitList(outfit.styleID)}}>
      <FontAwesomeIcon icon={faTimes}/>
      </div>
      <div>{outfit.name}</div>
      <div>{outfit.style}</div>
      <div>{outfit.category}</div>
      {/* <div>{outfit.styleID}</div>  I dont want to display this to users but i need it*/}
      <div className='regularPrice'>${outfit.regularPrice}</div>
      <div style={{ color: 'red' }}>${outfit.price}</div>
      <img src={outfit.image} alt='outfit.image' height='123px' width='155px'/>
    </div>
  );
}

export default YourOutfit;