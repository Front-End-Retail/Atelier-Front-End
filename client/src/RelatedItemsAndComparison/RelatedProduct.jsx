import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import '../assets/related.css';
import Modal from './Modal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';


const RelatedProduct = ({ relatedProductID, relatedProductsID, changeCurrentProduct }) => {

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


      <div className='product-container' onClick={()=>{changeCurrentProduct(relatedProductID)}} >

        {/* cant add listeners to react icons */}

          <div className='product-card'>
          {/* <div className='heartIcon' onClick={handleLikeClick}>
                  <FontAwesomeIcon icon={likeIcon(liked)} color="red" />
           </div> */}
                 <div className='product-image'>
                      <button className='starIcon' onClick={() => { setOpenModal(true) }}><FontAwesomeIcon icon={faStar}/></button>
                      <img src={relatedProduct.image} className='product-thumb' alt='related product'/>
                 </div>
                 <div className='product-info'>
                    <h2 className='product-name'>{relatedProduct.name}</h2>
                    <div className='product-category'>{relatedProduct.category}</div>
                    <span className='price'>USD {relatedProduct.price}</span>
                    {/* <div style={{ backgroundImage: `url(${relatedProduct.image})` }}></div>
                    <img src={relatedProduct.image} alt='related product' height='123px' width='155px' /> */}
                 </div>
         </div>

         <div className='product-modal'>
         {openModal && <Modal closeModal={setOpenModal} />}
         </div>

    </div>
  )



//   return (
//     <div className='relatedProduct' onClick={()=>{changeCurrentProduct(relatedProductID)}} >

//       {/* cant add listeners to react icons */}
//       <div className='heartIcon' onClick={handleLikeClick}>
//       {/* onClick={()=>{changeCurrentProduct(relatedProductID)}} */}
//         <FontAwesomeIcon icon={likeIcon(liked)} color="red" />
//       {/* <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> */}
//       </div>
//       <div className='name'>{relatedProduct.name}</div>
//       <div className='category'>{relatedProduct.category}</div>
//       <div className='price'>USD{relatedProduct.price}</div>
//       <div style={{ backgroundImage: `url(${relatedProduct.image})` }}>
//       <img src={relatedProduct.image} alt='related product' height='123px' width='155px' />
//       <button onClick={() => { setOpenModal(true) }}>compare</button>
//       {openModal && <Modal closeModal={setOpenModal} />}
//       </div>
//     {/* <img src="https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
//    alt='related product'
//    height='50px'/> */}
//   </div>
// )







};


export default RelatedProduct;