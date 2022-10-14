import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';

const headers = {
  Authorization: GITHUB_API_KEY
};

const RelatedProduct = ({relatedProduct}) =>{
  const currentProductID = relatedProduct.id;//37311
  console.log('currentProductID: ', currentProductID);
  const getCurrentImageURL = () => {

     return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentProductID}/styles`, {headers})
            .then(response=> {
              const currentProductStyle = response.data.results[0];
              console.log('currentProductStyle retrieved from API', currentProductStyle);
              const currentImageURL = currentProductStyle.photos[0].url;
              console.log('currentImageURL retrieved from API', currentImageURL);
              // relatedProduct.image = currentImageURL;
              return currentImageURL;
            })
            .catch(err=> {
              console.log('failed to retrieve currentImageURL from API, ' ,err);
             })
  };
  getCurrentImageURL();
  return (
    <div>
    <div>{relatedProduct.name}</div>
    <div>USD {relatedProduct.default_price}</div>
    <img src="https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
     alt='related product'
     height='50px'/>
    {/* <div>{relatedProduct.image}</div> */}
</div>
  );
};

export default RelatedProduct;