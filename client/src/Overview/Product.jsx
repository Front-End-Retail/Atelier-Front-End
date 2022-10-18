import React, { useState, useEffect } from 'react';
import StyleSelector from './StyleSelector.jsx';
const Product = ({ styles, currentProduct, selectedStyle, setSelectedStyle }) => {
  const [bulkQuantity, setBulkQuantity] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [qty, setQty] = useState([]);
  //this function will take the quantity associated with the selected size and create an array
  const createQtyArray = (size) => {
    let sizeIndex = sizes.indexOf(size);
    let temp = Array.from(Array(bulkQuantity[sizeIndex]).keys());
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
    <div className="product-container">
      <div className="product-info">
        <span>Read all reviews (needs star component) </span>
        <span>{currentProduct.category}</span>
        <h2>{currentProduct.name}</h2>

        {selectedStyle.sale_price ? <div className="sale-price"><p style={{ color: 'red' }}>{selectedStyle.sale_price}</p><p style={{ textDecoration: 'line-through' }}>{selectedStyle.original_price}</p></div> : <p>${selectedStyle.original_price}</p>}

      </div >
      <StyleSelector styles={styles} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
      <div className="add-to-bag">
        <form>
          <select className="size-select">
            <option value="" disabled defaultValue="selected" hidden>Select a Size</option>
            {sizes.map((size, i) => {
              return (
                <option onSelect={e => {
                  createQtyArray(e.target.value);
                }} key={i} value={size}>{size}</option>
              )
            })}
          </select>
          <select className='qty'>
            {bulkQuantity.map((number, i) => {
              return (
                <option key={i} value={number}>{number}</option>
              )
            })}
          </select>
          <button type="submit">Add to Bag</button>
          <button type="button">Favorite</button>
        </form>
      </div>
    </div >
  )
}

export default Product;