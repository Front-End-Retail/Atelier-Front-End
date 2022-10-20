import React from 'react';
import '../assets/related.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const { useState, useEffect } = React;

const YourOutfit = ({outfit, updateOutfitList}) =>{


  return (
    <div className='outfit-component'>
         <div className='outfit-pic' style={{
               backgroundImage: `url(${outfit.image})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'}} alt='your outfit'>
               {/* <img src={outfit.image} alt='outfit.image' height='123px' width='155px'/> */}
               <div className='timesIcon' onClick={()=>{updateOutfitList(outfit.styleID)}}>
                    <FontAwesomeIcon icon={faTimes}/>
               </div>
          </div>
         <div className='outfit-info'>
               <div className='outfit-name'>{outfit.name}</div>
               <div className='outfit-style'>{outfit.style}</div>
               <div className='outfit-category'>{outfit.category}</div>
               {/* <div>{outfit.styleID}</div>  I dont want to display this to users but i need it*/}
              <span className='outfit-regularPrice'>USD {outfit.regularPrice}</span><span className='outfit-discountPrice' style={{ color: 'red' }}>USD {outfit.price}</span>
         </div>
    </div>
  );
}

export default YourOutfit;