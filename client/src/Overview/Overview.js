import React from 'react';
import '../assests/overview.css';
import ImageGallery from './ImageGallery.jsx';
import Product from './Product.jsx';

const { useState, useEffect } = React;

const Overview = (props) => {

  return (
    <div className='overview-container'>
      <ImageGallery />
      <Product />
    </div>
  )
}

export default Overview;