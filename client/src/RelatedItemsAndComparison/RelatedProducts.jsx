import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const RelatedProducts = ({relatedProductsID, currentProductID, currentProduct, changeCurrentProduct, metaReviews}) => {
  // relatedProductsID - [37313, 37314, 37317, 37319, 37320]
  const [currCarousel, setCurrCarousel] = useState([]);

  useEffect(()=>{
    setCurrCarousel(relatedProductsID);
  },[relatedProductsID])

  const handleRightArrowClick = () => {
    const leftoverCarousel = currCarousel.slice(4); //relatedProductsID was put to mapping
    // leftoverCarousel - [4, ...]
    setCurrCarousel(leftoverCarousel);
  }

  const handleLeftArrowClick = () => {
    const prevCarousel = relatedProductsID.slice(0, 4);
    console.log('prevCarousel: ', prevCarousel)
    setCurrCarousel(prevCarousel);
  }

  //helper
  const arraysMatch = (arr1, arr2) => {
	  if (arr1.length !== arr2.length) return false;
	  for (var i = 0; i < arr1.length; i++) {
		  if (arr1[i] !== arr2[i]) return false;
	  }
	return true;
};

if (currCarousel.length >4) {
  const sizedCarousel = currCarousel.slice(0,4);
  return (
    <div className='relatedProductsContainer'>
      {sizedCarousel.map((relatedProductID, index)=>{
        return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID} currentProductID={currentProductID} currentProduct={currentProduct} changeCurrentProduct={changeCurrentProduct} metaReviews={metaReviews}></RelatedProduct>
      })}
     <button className='rightArrowIcon-Btn' onClick={handleRightArrowClick}><FontAwesomeIcon className='rightArrowIcon' icon={faChevronRight}/></button>
    </div>
  );
}

if (currCarousel.length <=4 && relatedProductsID.length <= 4) {
  return (
    <div className='relatedProductsContainer'>
      {currCarousel.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID}
       currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct} currentProduct={currentProduct} metaReviews={metaReviews}></RelatedProduct>
    })}
    </div>
  )
}

if (currCarousel.length <=4 && relatedProductsID.length > 4) {
  const arr1 = currCarousel.slice();
  const arr2 = relatedProductsID.slice(0, 4);
  //compare if currCarousel is the same with the first 4 elements of relatedProductsID
  if (arraysMatch(arr1, arr2)) {
    return (
      <div className='relatedProductsContainer'>
      {currCarousel.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID}
       currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct} currentProduct={currentProduct} metaReviews={metaReviews}></RelatedProduct>
    })}
    </div>
    )
  } else {
    return (
    <div className='relatedProductsContainer'>
      <button className='leftArrowIcon-Btn' onClick={handleLeftArrowClick}><FontAwesomeIcon className='leftArrowIcon' icon={faChevronLeft}/></button>
      {currCarousel.map((relatedProductID, index)=>{
      return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID}
       currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct} currentProduct={currentProduct} metaReviews={metaReviews}></RelatedProduct>
    })}
    </div>)
  }
}
};

export default RelatedProducts;


