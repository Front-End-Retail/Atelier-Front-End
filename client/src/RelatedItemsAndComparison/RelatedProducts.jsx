import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import '../assets/related.css';


const RelatedProducts = ({relatedProductsID, changeCurrentProduct}) => {
  // console.log('relatedProductsID array passed in RelatedProducts.jsx', relatedProductsID)//[37313, 37314, 37317, 37319, 37320]
  return (
    <div className='container'>
    {relatedProductsID.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID} changeCurrentProduct={changeCurrentProduct}></RelatedProduct>
    })}
    </div>
  );
};


export default RelatedProducts;