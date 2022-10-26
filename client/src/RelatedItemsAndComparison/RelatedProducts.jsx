import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
// import '../assets/related.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import baseURL from '../baseURL.js'

const RelatedProducts = ({relatedProductsID, currentProductID, changeCurrentProduct}) => {


  // console.log('relatedProductsID array passed in RelatedProducts.jsx', relatedProductsID)//[37313, 37314, 37317, 37319, 37320]

  const [currCarousel, setCurrCarousel] = useState([]);
  // console.log('currCarousel after initilizing: ', currCarousel);//[]

useEffect(()=>{
  setCurrCarousel(relatedProductsID);
},[relatedProductsID])//it takes sometime to get relatedProductsID prop

  const handleRightArrowClick = () => {
    console.log('tell me it did get in handleRightArrowClick!')
    const leftoverCarousel = currCarousel.slice(4); //relatedProductsID was put to mapping
    console.log('leftoverCarousel: ', leftoverCarousel)
    setCurrCarousel(leftoverCarousel);
  }

  const handleLeftArrowClick = () => {
    console.log('tell me it did get in handleLeftArrowClick!')
    const prevCarousel = relatedProductsID.slice(0, 4); //relatedProductsID was put to mapping
    console.log('prevCarousel: ', prevCarousel)
    setCurrCarousel(prevCarousel);
  }


if (currCarousel.length >=4) {
  const sizedCarousel = currCarousel.slice(0,4);
  console.log('sizedCarousel: ', sizedCarousel)
  return (
    <div className='relatedProductsOuterContainer'>
          <div className='relatedProductsContainer'>
                {sizedCarousel.map((relatedProductID, index)=>{
                 return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID} currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct}></RelatedProduct>
                 })}
           </div>
           <button className='rightArrowIcon' onClick={handleRightArrowClick}><FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
  );
} else {
  // console.log('currCarousel inside of else : ', currCarousel);//[]
  return (
    <div className='relatedProductsContainer'>
      {/* //this is container before */}
      {relatedProductsID.length>4 && <button className='leftArrowIcon' onClick={handleLeftArrowClick}><FontAwesomeIcon icon={faArrowLeft}/></button>}
      {currCarousel.map((relatedProductID, index)=>{

      return <RelatedProduct key={index} relatedProductID={relatedProductID} relatedProductsID={relatedProductsID}
       currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct}></RelatedProduct>

    })}
    </div>
  );
  }
};


export default RelatedProducts;