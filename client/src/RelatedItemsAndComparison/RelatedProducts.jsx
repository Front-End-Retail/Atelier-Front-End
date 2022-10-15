import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx'



const RelatedProducts = () =>{
  const [relatedProducts, setRelatedProducts] = useState([]);
  const getAllProducts = ()=>{
   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {headers})
  .then((response)=>{
    const allProducts = response.data;
    console.log('all products client received', allProducts);
    setRelatedProducts(allProducts);
  })
  .catch((err)=> {
    console.log('client failed to retrieve all products', err);
  })
};

  useEffect(()=>{
   getAllProducts();
  }, []);

  return (
    <div>
    {relatedProducts.map((relatedProduct, index)=>{
      return <RelatedProduct key={index} relatedProduct={relatedProduct}></RelatedProduct>
    })}
    </div>
  );
};


export default RelatedProducts;