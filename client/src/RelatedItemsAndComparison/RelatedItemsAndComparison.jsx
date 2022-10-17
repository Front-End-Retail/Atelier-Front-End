import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

const { useState, useEffect } = React;

const RelatedItemsAndComparison = () => {
  const dummyProductID = 37311;
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsID, setRelatedProductsID] = useState([]);

  useEffect(()=> {

    const fetchRelatedProducts = () => {
      axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${dummyProductID}/related`} })
      .then((response)=> {
        console.log('response.data from calling API/products: ', response.data)
        setRelatedProductsID(response.data);
       // console.log(relatedProductsID) //set useEffect to watch relatedProductsID// this will log out an empty array
      })
      .catch(err=> {
        console.log('failed to retrieve related product ID from API: ', err)
      })
    };

    fetchRelatedProducts();
  }, []);

 useEffect(()=> {
  console.log('relatedProductsID: ', relatedProductsID);
  for (const id in relatedProductsID) {
    console.log('each id in relatedProductsID: ', relatedProductsID[id]) //37312, 37313, 37318, 37317
    axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${relatedProductsID[id]}`} })
    .then((response)=>{
      console.log('data retrieved after calling API/products/productID: ', response.data)
    })
  }
 },[relatedProductsID])




  return (
    <div>
      Related Items and Comparison go here!
      <br></br>
      <br></br>
      <span>YOU MIGHT ALSO LIKE</span>
      <RelatedProducts relatedProducts={relatedProducts}></RelatedProducts>
      <span>COMPLETE YOUR OUTFIT</span>
      <YourOutfit></YourOutfit>
    </div>
  );
};

export default RelatedItemsAndComparison;