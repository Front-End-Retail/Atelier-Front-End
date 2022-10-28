import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
// import '../assets/related.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
;
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import baseURL from '../baseURL.js'

const RelatedProducts = ({relatedProductsID, currentProductID, currentProduct, changeCurrentProduct, metaReviews}) => {

  // relatedProductsID - [37313, 37314, 37317, 37319, 37320]

  const [currCarousel, setCurrCarousel] = useState([]);

useEffect(()=>{
  setCurrCarousel(relatedProductsID);
},[relatedProductsID])//it takes sometime to get relatedProductsID prop

  const handleRightArrowClick = () => {
    const leftoverCarousel = currCarousel.slice(4); //relatedProductsID was put to mapping
    console.log('leftoverCarousel: ', leftoverCarousel)
    setCurrCarousel(leftoverCarousel);
  }

  const handleLeftArrowClick = () => {
    console.log('tell me it did get in handleLeftArrowClick!')
    const prevCarousel = relatedProductsID.slice(0, 4);
    console.log('prevCarousel: ', prevCarousel)
    setCurrCarousel(prevCarousel);
  }

if (currCarousel.length >=4) {
  const sizedCarousel = currCarousel.slice(0,4);
  return (
    <div className='relatedProductsOuterContainer'>
          <div className='relatedProductsContainer'>
                {sizedCarousel.map((relatedProductID, index)=>{
                 return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID} currentProductID={currentProductID} currentProduct={currentProduct} changeCurrentProduct={changeCurrentProduct} metaReviews={metaReviews}></RelatedProduct>
                 })}
           </div>
           <button className='rightArrowIcon-Btn' onClick={handleRightArrowClick}><FontAwesomeIcon className='rightArrowIcon' icon={faChevronRight}/></button>
    </div>
  );
} else {
  return (
    <div className='relatedProductsContainer'>
      {relatedProductsID.length>4 && <button className='leftArrowIcon-Btn' onClick={handleLeftArrowClick}><FontAwesomeIcon className='leftArrowIcon' icon={faChevronLeft}/></button>}
      {currCarousel.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID}
       currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct} currentProduct={currentProduct} metaReviews={metaReviews}></RelatedProduct>
    })}
    </div>
  );
  }
};


export default RelatedProducts;

// if (currCarousel.length >=4) {
//   const sizedCarousel = currCarousel.slice(0,4);
//   return (
//     <div className='relatedProductsOuterContainer'>
//           <div className='relatedProductsContainer'>
//                 {sizedCarousel.map((relatedProductID, index)=>{
//                  return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID} currentProductID={currentProductID} currentProduct={currentProduct} changeCurrentProduct={changeCurrentProduct} metaReviews={metaReviews}></RelatedProduct>
//                  })}
//            </div>
//            <button className='rightArrowIcon-Btn' onClick={handleRightArrowClick}><FontAwesomeIcon className='rightArrowIcon' icon={faChevronRight}/></button>
//     </div>
//   );
// } else {
//   return (
//     <div className='relatedProductsContainer'>
//       {relatedProductsID.length>4 && <button className='leftArrowIcon-Btn' onClick={handleLeftArrowClick}><FontAwesomeIcon className='leftArrowIcon' icon={faChevronLeft}/></button>}
//       {currCarousel.map((relatedProductID, index)=>{
//       return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID}
//        currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct} currentProduct={currentProduct} metaReviews={metaReviews}></RelatedProduct>
//     })}
//     </div>
//   );
//   }