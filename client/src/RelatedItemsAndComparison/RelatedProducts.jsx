import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import '../assets/related.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RelatedProducts = ({relatedProductsID, changeCurrentProduct}) => {
  // console.log('relatedProductsID array passed in RelatedProducts.jsx', relatedProductsID)//[37313, 37314, 37317, 37319, 37320]

if (relatedProductsID.length >=4) {
  return (
    <div className='relatedProductsOuterContainer'>
    <button className='leftArrowIcon'><FontAwesomeIcon icon={faArrowLeft}/></button>
    <div className='relatedProductsContainer'>
    {relatedProductsID.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID} changeCurrentProduct={changeCurrentProduct}></RelatedProduct>
    })}
    </div>
    <button className='rightArrowIcon'><FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
  );
} else {
  return (
    <div className='relatedProductsContainer'>
      {/* //this is container before */}
    {relatedProductsID.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID} changeCurrentProduct={changeCurrentProduct}></RelatedProduct>
    })}
    </div>
  );
  }
};


export default RelatedProducts;