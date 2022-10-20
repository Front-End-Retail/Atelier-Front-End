import React from 'react';
import '../assets/related.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import YourOutfit from './YourOutfit.jsx';

const { useState, useEffect } = React;


const YourOutfitList = ({outfitList, handlePlusIconClick, updateOutfitList}) => {

if (outfitList.length === 0) {
  return (
   <div>
    <span className='emptyOutfitList'>Its empty here... Add some?</span>
    <br></br>
    <br></br>
    <div onClick={handlePlusIconClick} className='plusIcon'>
    <FontAwesomeIcon icon={faPlus}/>
    </div>
   </div>
  )
} else {
    return (
      <div>
       {outfitList.map((outfit, index)=>{
         return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList}></YourOutfit>
       })}
      </div>
    );
  }
};

export default YourOutfitList;