import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';



const RelatedProducts = ({relatedProductsID}) => {

console.log('relatedProducsID passed in RelatedProducts.jsx: ', relatedProductsID);

  return (
    <div>
    {relatedProductsID.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID}></RelatedProduct>
    })}
    </div>
  );
};


export default RelatedProducts;