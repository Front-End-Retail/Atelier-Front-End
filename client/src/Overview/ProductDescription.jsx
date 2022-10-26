import React, { useEffect, useState } from 'react';

const ProductDescription = ({ currentProduct }) => {
  return (
    <div className="product-description">
      <div className="description">
        <h2>{currentProduct.slogan}.</h2>
        <p>{currentProduct.description}</p>
      </div>
      <div className="features">
        <ul>
          {currentProduct.features.map((feature, i) => {
            return (
              <li key={i}><i>{feature.feature}</i> : {feature.value}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}


export default ProductDescription;