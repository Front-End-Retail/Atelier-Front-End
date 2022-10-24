import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Product from './Product.jsx';
import ProductDescription from './ProductDescription.jsx';
import axios from 'axios';
const { useState, useEffect } = React;

const Overview = ({ currentProductID, styles, selectedStyle, changeStyle }) => {
  //States
  const [currentProduct, setCurrentProduct] = useState({});
  const [metaReviews, setMetaReviews] = useState({});
  const [fullscreen, setFullscreen] = useState(false);
  //grabs all product info for current product
  const fetchProductInfo = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/products',
      params: {
        specificURL: `products/${currentProductID}`
      }
    })
      .then(response => {
        setCurrentProduct(response.data);
      })
      .catch(err => {
        console.log('ignore this, it works', err);
      })
  }

  const metaRequest = () => {
    axios.get('http://localhost:3000/products', { params: { specificURL: `reviews/meta?product_id=${currentProductID}` } }).then((reviewData) => {
      // console.log('gotten', reviewData.data)
      setMetaReviews(reviewData.data)
    }).catch(err => {
      console.log('error getting', err)
    })
  }

  useEffect(() => {
    fetchProductInfo();
    metaRequest();
  }, [currentProductID]);

  return (
    <>
      <div className='overview-container'>
        {selectedStyle && Object.keys(selectedStyle).length !== 0 && <ImageGallery selectedStyle={selectedStyle} setFullscreen={setFullscreen} fullscreen={fullscreen} />}
        {selectedStyle && <Product fullscreen={fullscreen} metaReviews={metaReviews} styles={styles} selectedStyle={selectedStyle} changeStyle={changeStyle} currentProduct={currentProduct} />}
      </div>
      {currentProduct && Object.keys(currentProduct).length !== 0 ? <ProductDescription currentProduct={currentProduct} /> : null}
    </>
  )
}

export default Overview;