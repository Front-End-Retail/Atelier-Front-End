import React from 'react';
import '../assets/related.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import OutfitPopUp from './OutfitPopUp.jsx';

const { useState, useEffect } = React;

const YourOutfit = ({outfit, updateOutfitList, duplicateSelected, closePopUp}) =>{

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
               {outfit.price
                 ? <div><span className='outfit-regularPrice'>${outfit.regularPrice}</span><span className='outfit-discountPrice' style={{ color: 'red' }}>${outfit.price}</span></div>
                 : <div><span className='outfit-regularPrice-no-linethrough'>${outfit.regularPrice}</span></div>
               }
         </div>
         {duplicateSelected && <OutfitPopUp closePopUp={closePopUp}></OutfitPopUp>}
    </div>
 )
}

export default YourOutfit;
//<span className='outfit-discountPrice' style={{ color: 'red' }}>$ {outfit.price}</span>