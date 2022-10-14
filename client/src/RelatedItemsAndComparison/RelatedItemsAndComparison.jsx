import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

const { useState, useEffect } = React;

const headers = {
  Authorization: GITHUB_API_KEY
};
const RelatedItemsAndComparison = () => {
  const handleClick = (event) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {headers})
    .then((response)=>{
      const allProducts = response.data;
      console.log('all products client received', allProducts);
    })
    .catch((err)=> {
      console.log('client failed to retrieve all products', err);
    })
  };

  return (
    <div>
      Related Items and Comparison go here!
      <br></br>
      <button onClick={handleClick}>test</button>
      <br></br>
      <span>You may also like</span>
      <RelatedProducts></RelatedProducts>
      <span>Your outfit</span>
      <YourOutfit></YourOutfit>
    </div>
  )
}

export default RelatedItemsAndComparison;