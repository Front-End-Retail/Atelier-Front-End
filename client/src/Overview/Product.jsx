import React, { useState, useEffect } from 'react';
import StyleSelector from './StyleSelector.jsx';
const Product = ({ currentProduct, styles, currentStyle, selectedStyle, setSelectedStyle }) => {
  return (
    <div className="product-container">
      <div className="product-info">
        <span>Read all reviews (needs star component) </span>
        <span>{currentProduct.category}</span>
        <h2>{currentProduct.name}</h2>

        {selectedStyle.sale_price ? <div className="sale-price"><p style={{ color: 'red' }}>{selectedStyle.sale_price}</p><p style={{ textDecoration: 'line-through' }}>{selectedStyle.original_price}</p></div> : <p>${selectedStyle.original_price}</p>}

      </div >
      <StyleSelector currentStyle={currentStyle} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
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