import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;

const Sorting = ({review}) => {
  return (
    <select name="languages" id="lang">
      <option value="none">None Selected</option>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
      <option value="relevant">Relevant</option>

  </select>
    // <div>
    // </div>
  )
}

export default Sorting