import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import '../assets/related.css';


const RelatedProducts = ({relatedProductsID, changeCurrentProduct}) => {

  return (
    <div className='container'>
    {relatedProductsID.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID} changeCurrentProduct={changeCurrentProduct}></RelatedProduct>
    })}
    </div>
  );
};


export default RelatedProducts;