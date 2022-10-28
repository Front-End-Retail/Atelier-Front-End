import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Product from './Product.jsx';
import ProductDescription from './ProductDescription.jsx';
const { useState, useEffect } = React;

const Overview = ({ currentProduct, styles, selectedStyle, changeStyle, metaReviews }) => {
  //States
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <>
      <div data-testid="overview" id='overview-container'>
        {selectedStyle && Object.keys(selectedStyle).length !== 0 && <ImageGallery selectedStyle={selectedStyle} setFullscreen={setFullscreen} fullscreen={fullscreen} />}
        {selectedStyle && <Product fullscreen={fullscreen} metaReviews={metaReviews} styles={styles} selectedStyle={selectedStyle} changeStyle={changeStyle} currentProduct={currentProduct} />}
      </div>
      <ProductDescription currentProduct={currentProduct} />
    </>
  )
}

export default Overview;