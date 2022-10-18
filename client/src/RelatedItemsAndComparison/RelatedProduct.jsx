import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import '../assets/related.css';



const RelatedProduct = ({relatedProductID, handleModal}) =>{
  // const [name, setName] = useState('');
  // const [category, setCategory] = useState('');
  // const [price, setPrice] = useState(0);
  // const [imageURL, setImageURL] = useState('');
  const [relatedProduct, setRelatedProduct] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${relatedProductID}` } })
      .then((response) => {
        // console.log('relatedProductID', relatedProductID)
        // console.log('product details in RelatedProduct.jsx', response.data);

        const newProduct = {};
        newProduct.name = response.data.name;
        newProduct.category = response.data.category;
        newProduct.price = response.data.default_price;
        // console.log('newProduct ', newProduct)
        axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${relatedProductID}/styles` } })
          .then(response => {
            newProduct.image = response.data.results[0].photos[0].url;
            setRelatedProduct(newProduct);
          })
          .catch(err=>{
            console.log('failed to fetch styles for given product id: ', err);
          })

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
    <div className='relatedProduct' onMouseEnter={handleModal}>
    
      {/* cant add listeners to react icons */}
      <div className='name'>{relatedProduct.name}</div>
      <div className='category'>{relatedProduct.category}</div>
      <div className='price'>USD{relatedProduct.price}</div>
      <div style={{backgroundImage: `url(${relatedProduct.image})`}}>
      <img src={relatedProduct.image} alt='related product' height='123px' width='155px'/>
      </div>
    {/* <img src="https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
     alt='related product'
     height='50px'/> */}
    </div>
    )
};


export default RelatedProduct;