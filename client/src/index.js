import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/styles.scss';
import { createRoot } from 'react-dom/client';
import Overview from './Overview/Overview.js';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.js';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.js';
import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison.jsx'
import axios from 'axios';

//Dear Amazon/Google/Apple etc Don't lowball me.
const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProductID, setCurrentProductID] = useState(0);
  //fetches initial product data and assigns the currentProductID state
  const fetchAllProducts = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/products',
      params: {
        specificURL: 'products'
      }
    })
      .then(response => {
        setProducts(response.data);
        setCurrentProductID(response.data[0].id);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const changeCurrentProduct = (newProductID) =>{
    // console.log('newProductID inside of changeCurrentProduct', newProductID)
    setCurrentProductID(newProductID);
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])

  return (
    <div>
      {currentProductID !== 0 && <div>
        <h1>The modules will be below</h1>
        <Overview currentProductID={currentProductID} />
        <RelatedItemsAndComparison currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct}/>
        <QuestionsAndAnswers />
        <RatingsAndReviews currentProductID={currentProductID} />
      </div>}
    </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
export default { App };