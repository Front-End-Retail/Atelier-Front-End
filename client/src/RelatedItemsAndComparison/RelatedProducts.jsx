import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import '../assets/related.css';


const RelatedProducts = ({relatedProductsID}) => {

console.log('relatedProductID passed in RelatedProducts.jsx: ', relatedProductsID);

  return (
    <section className='relateProducts'>
    {relatedProductsID.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID}></RelatedProduct>
    })}
    </section>
  );
};


export default RelatedProducts;