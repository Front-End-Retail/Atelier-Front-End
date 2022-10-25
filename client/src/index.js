import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/styles.scss';
import { createRoot } from 'react-dom/client';
import Overview from './Overview/Overview.js';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.js';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.js';
// import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison.jsx'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


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
          <span className='trade-mark'>Atelier Lannister ® 2022</span>
        </div>
      </footer>
    </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
export default { App };