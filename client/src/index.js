import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/styles.scss';
import { createRoot } from 'react-dom/client';
import Overview from './Overview/Overview.js';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.js';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.js';
import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison.jsx'
import axios from 'axios';
const axiosDef = require('axios');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import LannisterLion from './assets/LannisterLion.png';
import baseURL from './baseURL.js';
import clicktracker from './clicktracker.js';

//Dear Amazon/Google/Apple etc Don't lowball me.
const App = () => {
  const [products, setProducts] = useState([]);
  const [metaReviews, setMetaReviews] = useState({})
  const [currentProductID, setCurrentProductID] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductName, setCurrentProductName] = useState('');
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
  //fetches initial product data and assigns the currentProductID state

  const fetchAllProducts = () => {
    axiosDef.default.get(`/products`, {
      params: {
        specificURL: `products`
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
    axiosDef.default.get(`/products`, {
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

  const fetchMetaData = () => {
    axiosDef.default.get('/review', { params: { specificURL: `reviews/meta?product_id=${currentProductID}` } }).then((reviewData) => {
      setMetaReviews(reviewData.data)
    }).catch(err => {
      console.log('error getting', err)
    })
  }

  const fetchCurrentProduct = () => {
    axiosDef.default.get(`/products`, { params: { specificURL: `products/${currentProductID}` } })
      .then(response => {
        setCurrentProduct(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const changeCurrentProduct = (event, newProductID) => {
    setCurrentProductID(newProductID);
    clicktracker(event.target.id, 'relatedItemsModule', new Date());
  }

  const changeSelectedStyle = (style) => {
    setSelectedStyle(style);
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])

  useEffect(() => {
    fetchCurrentProduct();
    fetchAllStyles()
    fetchMetaData()
  }, [currentProductID])

  useEffect(() => {
    setSelectedStyle(styles[0])
  }, [styles]);

  return (
    <><header className={'logo'}><div className={'titleLogo'}><h1>One Stop Onesie Shop</h1><img className={'theLion'} src={LannisterLion}></img></div> <div className={'titleLogo'}><h2>Search</h2><input className={'headerSearch'}></input></div></header>
      <div className="lord-of-all-divs">
        {currentProductID !== 0 && currentProductName !== '' && currentProduct && Object.keys(currentProduct).length !== 0 && < div >
          <Overview currentProduct={currentProduct} styles={styles} selectedStyle={selectedStyle} changeStyle={changeSelectedStyle} metaReviews={metaReviews} />
          <RelatedItemsAndComparison currentProductID={currentProductID} changeCurrentProduct={changeCurrentProduct} selectedStyle={selectedStyle} currentProduct={currentProduct} metaReviews={metaReviews} />
          <QuestionsAndAnswers currentProductID={currentProductID} currentProductName={currentProductName} />
          <RatingsAndReviews currentProductID={currentProductID} currentProductName={currentProductName} metaReviews={metaReviews} />
        </div>}
        <footer className='footer'>
          <div className='footer-container'>
            <div className='list'>
              <div className='company'>
                <h3>Company</h3>
                <a href='#'>about us</a>
                <a href='#'>privacy policy</a>
              </div>
              <div className='get-help'>
                <h3>Get help</h3>
                <a href='#'>FAQ</a>
                <a href='#'>shipping</a>
                <a href='#'>returns</a>
                <a href='#'>order status</a>
                <a href='#'>payment options</a>
              </div>
              <div className='footer-email-form'>
                <h3>Join our newsletter</h3>
                <input type='email' placeholder='enter your email address' id='footer-email'></input>
                <input type='submit' value='Sign Up' id='footer-email-btn' ></input>
              </div>
            </div>
            <div className='social-links'><FontAwesomeIcon className='facebookIcon' icon={faFacebook} />
              <FontAwesomeIcon className='twitterIcon' icon={faTwitter} />
              <FontAwesomeIcon className='instaIcon' icon={faInstagram} />
            </div>
            <span className='trade-mark'>One Stop Onesie Shop ® 2022</span>
          </div>
        </footer>
      </div >
    </>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
export default { App };