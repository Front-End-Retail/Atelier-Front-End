import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import '../assets/related.css';


const { useState, useEffect } = React;

const RelatedItemsAndComparison = () => {
  const dummyProductID = 37311;
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [relatedProductsID, setRelatedProductsID] = useState([]);
//   const [currentProductID, setCurrentProductID] = useState(Number);

    const [relatedProductsID, setRelatedProductsID] = useState([]);

    useEffect(()=> {
      const temp = [];
     const fetchAllRelatedProductsID = () => {
      axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${dummyProductID}/related`} })
        .then((response)=> {
           console.log('response.data from calling API/products: ', response.data);
           //do the forEach below to filter out 37312 because it has no images
           response.data.forEach(id=>{
             if (id !== 37312) {
              temp.push(id);
             }
           })
           console.log('temp: ', temp);//[37313, 37318, 37317]
           setRelatedProductsID(temp);
         })
        .catch(err=>{
          console.log('client failed to retrieve all products ids: ', err);
        })
     };

     fetchAllRelatedProductsID();

    }, [])



  useEffect(()=>{
    console.log('relatedProductsID', relatedProductsID)
  }
  , [relatedProductsID])

//     const fetchRelatedProducts = () => {
//       axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${dummyProductID}/related`} })
//       .then((response)=> {
//         console.log('response.data from calling API/products: ', response.data)
//         const temp = [];
//         response.data.forEach((productID) => {
//           if (productID !== 37312) {
//             temp.push(productID);
//           }
//         })
//         setRelatedProductsID(temp);
//        // console.log(relatedProductsID) //set useEffect to watch relatedProductsID// this will log out an empty array
//       })
//       .catch(err=> {
//         console.log('failed to retrieve related product ID from API: ', err)
//       })
//     };

//     fetchRelatedProducts();
//   }, []);

//  useEffect(()=> {
//   // const temp = [];
//   // const product = {};
//   console.log('relatedProductsID: ', relatedProductsID);
//   for (const id in relatedProductsID) {
//     setCurrentProductID(relatedProductsID[id]);
//     // console.log('each id in relatedProductsID: ', relatedProductsID[id]) //37312, 37313, 37318, 37317
//     // axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${relatedProductsID[id]}`} })
//     // .then((response)=>{
//     //   console.log('data retrieved after calling API/products/productID: ', response.data)
//     //   product.name = response.data.name;
//     //   product.price = response.data.default_price;
//     //   product.category = response.data.category;
//     //   console.log('product: ', product);
//     //   temp.push(product);
//     //   console.log('temp: ', temp)
//     //   setRelatedProducts(temp);
//       // axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${relatedProductsID[id]}/styles`} })
//       // .then((response)=>{
//       // console.log('styles for each product: ',  response.data);
//       // })
//       // .catch(err=>{
//       //   console.log('client failed to retrieve  styles of current product: ', err);
//       // })
//     }

//  },[relatedProductsID])

// useEffect(()=>{
// console.log('currentProductID: ', currentProductID)
// const temp = [];
// const product = {};
// axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${currentProductID}`} })
//   .then((response)=>{
//     product.name = response.data.name;
//     product.category = response.data.category;
//     product.price = response.data.default_price;
//     console.log('product: ', product);
//     temp.push(product);
//     setRelatedProducts(temp);
//   })
// }, [currentProductID])

// useEffect(()=>{
//    console.log('relatedProducts: ', relatedProducts);
// }, [relatedProducts])


  return (
    <div>
      <h2 className='YouMightAlsoLike'>YOU MIGHT ALSO LIKE</h2>
      <RelatedProducts relatedProductsID={relatedProductsID}></RelatedProducts>
      <h3 className='CompleteYourOutfit'>COMPLETE YOUR OUTFIT</h3>
      <YourOutfit></YourOutfit>
    </div>
  );
};

export default RelatedItemsAndComparison;