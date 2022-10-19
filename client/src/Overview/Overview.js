import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Product from './Product.jsx';
import axios from 'axios';
const { useState, useEffect } = React;

const Overview = ({ currentProductID }) => {
  //States
  const [selectedStyle, setSelectedStyle] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [photos, setPhotos] = useState([]);
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

  //grabs all the styles for current product
  const fetchAllStyles = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/products',
      params: {
        specificURL: `products/${currentProductID}/styles`
      }
    })
      .then(response => {
        setStyles(response.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchProductInfo()
    fetchAllStyles();
  }, [currentProductID]);

  useEffect(() => {
    setSelectedStyle(styles[0])
  }, [styles]);
  return (
    <div className='overview-container'>
      {selectedStyle && Object.keys(selectedStyle).length !== 0 && <ImageGallery selectedStyle={selectedStyle} />}
      {selectedStyle && <Product styles={styles} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} currentProduct={currentProduct} />}
    </div>
  )
}

export default Overview;