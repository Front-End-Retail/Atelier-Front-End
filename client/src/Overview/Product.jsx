import React, { useState, useEffect } from 'react';
import StyleSelector from './StyleSelector.jsx';
const Product = ({ currentProduct, styles, currentStyle }) => {
  console.log(currentProduct);
  return (
    <div className="product-container">
      <div className="product-info">
        <span>Read all reviews (needs star component) </span>
        <span>{currentProduct.category}</span>
        <h2>{currentProduct.name}</h2>

        {currentStyle.sale_price ? <p>{currentStyle.sale_price}</p> : <p>${currentProduct.default_price}</p>}

        {/* {currentStyle.sale_price ? <p style={"color: red"}>{currentStyle.sale_price}</p><p style={"text-decoration: line-through"}>${currentProduct.default_price}</p> : <p>${currentProduct.default_price}</p>
        } */}
      </div >
      <StyleSelector currentStyle={currentStyle} />
      <div className="add-to-bag">
        <form>
          <select className="size-select">
            <option value="" disabled defaultValue="selected" hidden>Select Size</option>
            <option>SM</option>
            <option>MD</option>
            <option>LG</option>
            <option>XL</option>
          </select>
          <select className='qty'>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
          <button type="submit">Add to Bag</button>
          <button type="button">Favorite</button>
        </form>
      </div>
    </div >
  )
}

export default Product;