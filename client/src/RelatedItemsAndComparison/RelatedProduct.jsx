import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';



const RelatedProduct = ({relatedProductID}) =>{
  // const [name, setName] = useState('');
  // const [category, setCategory] = useState('');
  // const [price, setPrice] = useState(0);
  // const [imageURL, setImageURL] = useState('');
  const [relatedProduct, setRelatedProduct] = useState({});

  useEffect(()=>{
    axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${relatedProductID}`} })
    .then((response)=>{
      console.log('relatedProductID', relatedProductID)
      console.log('product details in RelatedProduct.jsx', response.data);

      const newProduct = {};
      newProduct.name = response.data.name;
      newProduct.category = response.data.category;
      newProduct.price = response.data.default_price;
      console.log('newProduct ', newProduct)
        axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${relatedProductID}/styles`} })
          .then(response=>{
            console.log('url for current product: ', response.data.results[0].photos[0].url);
            newProduct.image = response.data.results[0].photos[0].url;
            setRelatedProduct(newProduct);
          })
      //setRelatedProduct(newProduct);
      // axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${relatedProductID}/styles`} })
      //   .then(response=>{
      //     console.log('styles, ', response.data);
      //   })
      // axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${relatedProductID}/styles`} })
      // .then((response)=> {
      //   console.log('styles: ', response.data);
      // })
    })
    .catch(err=>{
      console.log('failed to retrieve product details: ', err);
    })
  },[]) //without this useEffect, this get request was ran repeatedly 10 times or more,
  //the data does get on the screen on the first go but eventually there are 123 messages and server failed with a response "too many requests"

  // useEffect(()=>{
  //   console.log('effects everytime relatedProduct changes')
  // }, [relatedProduct])

  return (
    <div>
      <div>{relatedProduct.name}</div>
      <div>{relatedProduct.category}</div>
      <div>{relatedProduct.price}</div>
      <img src={relatedProduct.image} alt='related product' height='50px'/>
    {/* <img src="https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
     alt='related product'
     height='50px'/> */}
    {/* <div>{relatedProduct.image}</div> */}
    </div>

    )

};

export default RelatedProduct;