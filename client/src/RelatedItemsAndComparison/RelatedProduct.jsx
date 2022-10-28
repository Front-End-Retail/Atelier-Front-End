import React from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import StarAverage from '../RatingsAndReviews/Components/StarAverage.js';
import { findAverage, findTotal } from '../RatingsAndReviews/Components/helperFuncs.js';
import baseURL from '../baseURL.js'
import clicktracker from '../clicktracker.js'

const { useState, useEffect } = React;

const RelatedProduct = ({ relatedProductID, relatedProductsID, currentProduct, currentProductID, changeCurrentProduct, metaReviews }) => {

  const [relatedProduct, setRelatedProduct] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const likeIcon = (liked) => (liked ? faHeartActive : faHeartInactive);

  const fetchCard = () => {
    axios.get(`/comparison`, { params: { specificURL: `products/${relatedProductID}` } })
      .then((response) => {
        const newProduct = {};
        newProduct.name = response.data.name;
        newProduct.category = response.data.category;
        newProduct.price = response.data.default_price;
        axios.get(`/comparison`, { params: { specificURL: `products/${relatedProductID}/styles` } })
          .then(response => {
            newProduct.image = response.data.results[0].photos[0].url;
            setRelatedProduct(newProduct);
          })
          .catch(err => {
            console.log('failed to fetch styles for given product id: ', err);
          })
      })
      .catch(err => {
        console.log('failed to retrieve product details: ', err);
      })
  }

  useEffect(() => {
    fetchCard();
  }, [relatedProductID]) //without this useEffect, this get request was ran repeatedly 10 times or more,
  //the data does get on the screen on the first go but eventually there are 123 messages and server failed with a response "too many requests"
  //everytime when this hook updates

  const handleLikeClick = (event) => {
    console.log('event.target inside of handleLikeClick: ', event.target);
    setLiked(true);
  }


  return (
    <div className='card-component'>
      <div className="product-image" style={{
        backgroundImage: `url(${relatedProduct.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} alt='related product' >
        <button className='starIconButton' onClick={() => { setOpenModal(true) }}><FontAwesomeIcon className='starIcon' icon={faStar} color='white' /></button>
      </div>
      <a href='#overview-container'><div className='lower-part' id='related-card' onClick={(event) => {
        changeCurrentProduct(event, relatedProductID)
      }}>
        <div className='product-name'>{relatedProduct.name}</div>
        <div className='product-category'>{relatedProduct.category}</div>
        <div className='product-price'>$ {relatedProduct.price}</div>
        <div className='star-rating'><StarAverage id={"-product"} rating={Math.floor(Math.random() * (5 - 3) + 3)} colorOn={"rgb(255, 193, 7)"} colorOff={"rgb(255,255,255)"} /></div>
      </div></a>
      {relatedProductID && openModal && <Modal closeModal={setOpenModal} currentProductID={currentProductID} relatedProductID={relatedProductID} currentProduct={currentProduct} />}
    </div>
  )
};


export default RelatedProduct;

// return (
//   <div className='card-component'>
//       <div className="product-image" style={{
//         backgroundImage: `url(${relatedProduct.image})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }} alt='related product' >
//             <button className='starIconButton' onClick={() => { setOpenModal(true) }}><FontAwesomeIcon className='starIcon' icon={faStar} color='white'/></button>
//      </div>
//       {/* cant add listeners to react icons */}
//       {/* <button className='starIcon' onClick={() => { setOpenModal(true) }}><FontAwesomeIcon icon={faStar}/></button>*/}
//       <a href='#overview-container'><div className='lower-part' id='related-card' onClick={(event) => {
//         changeCurrentProduct(event, relatedProductID)
//         }}>
//            <div className='product-name'>{relatedProduct.name}</div>
//            <div className='product-category'>{relatedProduct.category}</div>
//            <div className='product-price'>$ {relatedProduct.price}</div>
//            <StarAverage id={"-product"} rating={findAverage(metaReviews.ratings)} colorOn={"rgb(255, 193, 7)"} colorOff={"rgb(105,105,105)"} />
//     </div></a>
//     { relatedProductID && openModal && <Modal closeModal={setOpenModal} currentProductID={currentProductID} relatedProductID={relatedProductID} currentProduct={currentProduct}/>}
//   </div>
// )