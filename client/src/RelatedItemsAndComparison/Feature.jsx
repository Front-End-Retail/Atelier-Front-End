import React from 'react';
import './Modal.css';
const { useState, useEffect } = React;
import axios from 'axios';

const Feature = ({feature, comparedProductFeatures, currProductFeatures})=>{
  const [comparedValue, setComparedValue] = useState('');
  const [currValue, setCurrValue] = useState('');

  const fetchValues = ()=> {
  comparedProductFeatures.forEach(featureObj => {
    if (featureObj.feature === feature){
      if (featureObj.value !== null) {
        setComparedValue(featureObj.value);
      }
    }
  })

  currProductFeatures.forEach(featureObj => {
    if (featureObj.feature === feature){
      if (featureObj.value !== null) {
        setCurrValue(featureObj.value)
      }
    }
  })

  }

  useEffect(()=>{
    fetchValues();
  }, [feature])

  return (
    <tr>
    <td className='td'>{currValue}</td>
    <td className='td-feature'>{feature}</td>
    <td className='td'>{comparedValue}</td>
   </tr>
  )
}

export default Feature;