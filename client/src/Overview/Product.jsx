import React, { useState, useEffect } from 'react';
import StyleSelector from './StyleSelector.jsx';
const Product = (props) => {

  return (
    <div className="product-container">
      <div className="product-info">
        <span>Read all reviews (needs star component) </span>
        <span>Category</span>
        <h2>Product Name</h2>
        <p>Price</p>
      </div>
      <StyleSelector />
      <div className="add-to-bag">Test</div>
    </div>
  )
}

export default Product;