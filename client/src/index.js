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
  const [currentProductName, setCurrentProductName] = useState('');
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});

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
        setCurrentProductName(response.data[0].name);
      })
      .catch(err => {
        console.log(err);
      })
  }

  //grabs all the styles for current product
  const fetchAllStyles = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/products',
      params: {
        specificURL: `products/${currentProductID}/styles`
      }
    })
      .then(response => {
        setStyles(response.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const changeCurrentProduct = (newProductID) => {
    setCurrentProductID(newProductID);
  }

  const changeSelectedStyle = (style) => {
    setSelectedStyle(style);
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])

  useEffect(() => {
    fetchAllStyles()
  }, [currentProductID])

  useEffect(() => {
    setSelectedStyle(styles[0])
  }, [styles]);

  return (
    <div className="lord-of-all-divs">
      <header className={'logo'}><h1>Atelier</h1> <h2>Search ________</h2></header>
      {currentProductName !== '' && currentProductID !== 0 && <div>
        <Overview currentProductID={currentProductID} styles={styles} selectedStyle={selectedStyle} changeStyle={changeSelectedStyle} />
        <RelatedItemsAndComparison currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct} selectedStyle={selectedStyle} />
        <QuestionsAndAnswers currentProductID={currentProductID} currentProductName={currentProductName} />
        <RatingsAndReviews currentProductID={currentProductID} />
      </div>}
    </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
export default { App };