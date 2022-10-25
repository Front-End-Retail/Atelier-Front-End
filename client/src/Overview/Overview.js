import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Product from './Product.jsx';
import ProductDescription from './ProductDescription.jsx';
const axios = require('axios');
const { useState, useEffect } = React;

const Overview = ({ currentProductID, styles, selectedStyle, changeStyle }) => {
  //States
  const [currentProduct, setCurrentProduct] = useState({});
  const [metaReviews, setMetaReviews] = useState({});
  const [fullscreen, setFullscreen] = useState(false);
  //grabs all product info for current product
  const fetchProductInfo = () => {
    axios.default.get('http://localhost:3000/products', { params: { specificURL: `products/${currentProductID}` } }).then(response => {
      setCurrentProduct(response.data);
    })
      .catch(err => {
        console.log('ignore this, it works', err);
      })
  }

  const metaRequest = () => {
    axios.default.get('http://localhost:3000/review', { params: { specificURL: `reviews/meta?product_id=${currentProductID}` } }).then(response => {
      setMetaReviews(response.data);
    })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchProductInfo();
    metaRequest();
  }, [currentProductID]);

  return (
    <>
      <div data-testid="overview" id='overview-container'>
        {selectedStyle && Object.keys(selectedStyle).length !== 0 && <ImageGallery selectedStyle={selectedStyle} setFullscreen={setFullscreen} fullscreen={fullscreen} />}
        {selectedStyle && <Product fullscreen={fullscreen} metaReviews={metaReviews} styles={styles} selectedStyle={selectedStyle} changeStyle={changeStyle} currentProduct={currentProduct} />}
      </div>
      {currentProduct && Object.keys(currentProduct).length !== 0 ? <ProductDescription currentProduct={currentProduct} /> : null}
    </>
  )
}

export default Overview;