import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

const headers = {
  'Authorization': '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'
};
const RelatedItemsAndComparison = () => {

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/40344/related')
    .then((response) => {
      console.log('related products received from API', response.data);
    })
    .catch((err) => {
      console.log('failed to retrieve related products from API', err);
    })

  return (
    <div>
      Questions And Answers
    </div>

}

export default RelatedItemsAndComparison;