import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import '../assets/related.css';


const RelatedProducts = ({relatedProductsID, handleModal}) => {

  return (
    <div className='container'>
    {relatedProductsID.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID} handleModal={handleModal}></RelatedProduct>
    })}
    </div>
  );
};


export default RelatedProducts;