import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
// import '../assets/related.css';
import Modal from './Modal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import StarAverage from '../RatingsAndReviews/components/StarAverage.js';
import { findAverage, findTotal } from '../RatingsAndReviews/components/helperFuncs.js';

const RelatedProduct = ({ relatedProductID, relatedProductsID, currentProductID, changeCurrentProduct }) => {

  // console.log('each relatedProductID received in RelatedProduct.jsx: ', relatedProductID) //dont console.log here

  // const [name, setName] = useState('');
  // const [category, setCategory] = useState('');
  // const [price, setPrice] = useState(0);
  // const [imageURL, setImageURL] = useState('');
  const [relatedProduct, setRelatedProduct] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const likeIcon = (liked) => (liked ? faHeartActive : faHeartInactive);

  const fetchCard = () => {
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

  // useEffect(()=>{
  //   console.log('effects everytime relatedProduct changes')
  // }, [relatedProduct])
  const handleLikeClick = (event) => {
    console.log('event.target inside of handleLikeClick: ', event.target);
    setLiked(true);
    // changeCurrentProduct(relatedProductID);
  }


  return (


    <div className='card-component' >

        <div className="product-image" style={{
          backgroundImage: `url(${relatedProduct.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} alt='related product' >
              <button className='starIconButton' onClick={() => { setOpenModal(true) }}><FontAwesomeIcon className='starIcon' icon={faStar} color='white'/></button>
       </div>
        {/* cant add listeners to react icons */}
        {/* <button className='starIcon' onClick={() => { setOpenModal(true) }}><FontAwesomeIcon icon={faStar}/></button>*/}
       <div className='lower-part' onClick={() => { changeCurrentProduct(relatedProductID) }}>
             <div className='product-name'><a href='#overview-container'>{relatedProduct.name}</a></div>
             <div className='product-category'>{relatedProduct.category}</div>
             <div className='product-price'>$ {relatedProduct.price}</div>
             {/* <StarAverage rating={findAverage(metaReviews.ratings)} /> */}
      </div>
      {/* <div style={{ backgroundImage: `url(${relatedProduct.image})` }}> */}

      { relatedProductID && openModal && <Modal closeModal={setOpenModal} currentProductID={currentProductID} relatedProductID={relatedProductID} />}

    </div>
  )

};


export default RelatedProduct;