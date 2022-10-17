import React from 'react';
import '../assets/overview.css';
import ImageGallery from './ImageGallery.jsx';
import Product from './Product.jsx';
import axios from 'axios';
const { useState, useEffect } = React;

const Overview = (props) => {
  //States
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentStyle, setCurrentStyle] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
  const [styles, setStyles] = useState([]);
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
        setCurrentProduct(response.data[0]);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const fetchAllStyles = () => {
    let temp = products;
    let firstProduct = temp[0];
    let tempStyles = [];
    temp.forEach(product => {
      axios({
        method: 'get',
        url: 'http://localhost:3000/products',
        params: {
          specificURL: `products/${product.id}/styles`
        }
      })
        .then(response => {
          tempStyles.push(response.data);
          setStyles(tempStyles);
          if (Number(response.data.product_id) === firstProduct.id) {
            setCurrentStyle(response.data.results);
          }
        })
        .catch(err => {
          console.log(err);
        })
    })
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    fetchAllStyles();
  }, [products]);

  useEffect(() => {
    setSelectedStyle(currentStyle[0])
  }, [currentStyle]);
  return (
    <div className='overview-container'>
      <ImageGallery />
      {selectedStyle && <Product currentProduct={currentProduct} styles={styles} currentStyle={currentStyle} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />}
    </div>
  )
}

export default Overview;