import React, { useState, useEffect } from 'react';
import StyleSelector from './StyleSelector.jsx';
import StarAverage from '../RatingsAndReviews/components/StarAverage.js';
import { findAverage, findTotal } from '../RatingsAndReviews/components/helperFuncs.js';
const Product = ({ styles, currentProduct, selectedStyle, changeStyle, metaReviews, fullscreen }) => {
  const [bulkQuantity, setBulkQuantity] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [qty, setQty] = useState([]);
  //this function will take the quantity associated with the selected size and create an array
  const createQtyArray = (size) => {
    let temp = []
    let sizeIndex = sizes.indexOf(size);
    if (bulkQuantity[sizeIndex] > 15) {
      temp = Array.from(Array(16).keys());
    } else {
      temp = Array.from(Array(bulkQuantity[sizeIndex] + 1).keys());
    }
    setQty(temp);
  }

  useEffect(() => {
    let tempQuantity = [];
    let tempSizes = [];
    for (let key in selectedStyle.skus) {
      tempQuantity.push(selectedStyle.skus[key].quantity)
      tempSizes.push(selectedStyle.skus[key].size);
    }
    setBulkQuantity(tempQuantity);
    setSizes(tempSizes)
  }, [selectedStyle]);

  return (
    <div className={fullscreen ? 'product-hidden' : "product-container"}>
      <div className="product-info">
        <StarAverage rating={findAverage(metaReviews.ratings)} />
        <span>Read all <a href="#review-list">{findTotal(metaReviews.ratings)}</a> reviews</span>
        <span className="category">{currentProduct.category}</span>
        <h2>{currentProduct.name}</h2>

        {selectedStyle.sale_price ? <div className="sale-price"><p style={{ color: 'red' }}>{selectedStyle.sale_price}</p><p style={{ textDecoration: 'line-through' }}>{selectedStyle.original_price}</p></div> : <p>${selectedStyle.original_price}</p>}

      </div >
      <StyleSelector styles={styles} selectedStyle={selectedStyle} changeStyle={changeStyle} />
      <div className="add-to-bag">
        <form className="dropdowns">
          <select onChange={e => {
            createQtyArray(e.target.value);
          }} className="size-select">
            <option value="1" defaultValue="selected">Select a Size</option>
            {sizes.map((size, i) => {
              return (
                <option key={i} value={size}>{size}</option>
              )
            })}
          </select>
          <select className='qty'>
            {qty.map((number, i) => {
              return (
                <option key={i} value={number}>{number}</option>
              )
            })}
          </select>
        </form>
        <div className="buttons">
          <button type="submit">Add to Bag</button>
          <button type="button">Favorite</button>
        </div>
      </div>
    </div >
  )
}

export default Product;