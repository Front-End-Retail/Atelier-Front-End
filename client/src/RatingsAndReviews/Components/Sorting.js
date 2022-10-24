import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;

const Sorting = ({reviews, passSortingName}) => {
  // const [selected, setSelected] =

  const handleSelect = (event) => {
    let name = event.target.value
    passSortingName(name)
  }
  return (
    <select onChange={handleSelect} name="languages" id="dropdown">
      {/* <option value="none">None Selected</option> */}
      <option className="dropdown-option" value="relevant">Relevant</option>
      <option className="dropdown-option"  value="helpfulness">Helpful</option>
      <option className="dropdown-option" value="newest">Newest</option>


  </select>
    // <div>
    // </div>
  )
}

export default Sorting