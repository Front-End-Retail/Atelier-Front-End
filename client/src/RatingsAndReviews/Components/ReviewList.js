import React from 'react';
const axios = require('axios');
const { useState, useEffect } = React;
import ReviewEntry from './ReviewEntry.js'

const ReviewList = () => {
  return (
    <div>
      Review List goes here
      <ReviewEntry />
    </div>
  )
}

export default ReviewList