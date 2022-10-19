import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfitList from './YourOutfitList.jsx';
import '../assets/related.css';
import Modal from './Modal.jsx';


const { useState, useEffect } = React;

const RelatedItemsAndComparison = ({currentProductID, changeCurrentProduct}) => {

// console.log('currentProductID passed in: ', currentProductID) //its first 0 and then 37311 //DONT CONSOLE.LOG here, console.log inside of fetch


  const [relatedProductsID, setRelatedProductsID] = useState([]);


    const fetchAllRelatedProductsID = () => {
      console.log('currentProductID passed in: ', currentProductID)
      const temp = [];
      // console.log('currentProductID in fetchAllRelatedProducts: ', currentProductID);//0
      axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${currentProductID}/related` } })
        .then((response) => {
          // console.log('response.data from calling API/products: ', response.data);
          //do the forEach below to filter out 37312 because it has no images
          const storageObj ={};
          response.data.forEach(id => {
            if (id !== 37312 && storageObj[id] === undefined && id!== currentProductID) { //to filter out duplicate style_id//i hardcoded 37312
               storageObj[id] = 1;
               temp.push(id);
            }
          })
          console.log('temp: ', temp);//[37313, 37318, 37317]
          setRelatedProductsID(temp);
        })
        .catch(err => {
          console.log('client failed to retrieve all products ids: ', err);
        })
    };

  // useEffect(() => {
  //   fetchAllRelatedProductsID();
  // }, [])

 useEffect(()=>{
  fetchAllRelatedProductsID();
 },[currentProductID])

  useEffect(() => {
    // console.log('relatedProductsID in comparison.jsx after relatedProductsID being updated', relatedProductsID)
  }
  , [relatedProductsID])




// useEffect(()=>{
//    console.log('relatedProducts: ', relatedProducts);
// }, [relatedProducts])


  return (
    <div>
      <h2 className='YouMightAlsoLike'>YOU MIGHT ALSO LIKE</h2>
      <RelatedProducts relatedProductsID={relatedProductsID} changeCurrentProduct={changeCurrentProduct}></RelatedProducts>
      <h3 className='CompleteYourOutfit'>COMPLETE YOUR OUTFIT</h3>
      <YourOutfitList></YourOutfitList>
    </div>
  );
};

export default RelatedItemsAndComparison;