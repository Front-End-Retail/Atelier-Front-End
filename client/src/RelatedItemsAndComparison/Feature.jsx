import React from 'react';
import './Modal.css';
const { useState, useEffect } = React;
import axios from 'axios';

const Feature = ({feature, comparedProductFeatures, currProductFeatures})=>{
console.log('hey, look, it got in Feature.jsx!')
  comparedProductFeatures.forEach(featureObj => {
    if (featureObj.feature === feature){
      const comparedValue = featureObj.value;
      if (featureObj.value === null) {
        comparedValue = '';
      }
      console.log('compared value inside Feature.jsx forEach: ', comparedValue);
    }
  })

  currProductFeatures.forEach(featureObj => {
    if (featureObj.feature === feature && featureObj.value){
      const currValue = featureObj.value;
      if (featureObj.value === null) {
        currValue = '';
      }
      console.log('curr value inside Feature.jsx forEach: ', currValue);
    }
  })


  return (
    <tr>
    <td>{comparedValue}</td>
    <td>{feature}</td>
    <td>{currValue}</td>
   </tr>
  )
}

export default Feature;