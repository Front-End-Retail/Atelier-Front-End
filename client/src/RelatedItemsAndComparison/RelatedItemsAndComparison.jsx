import React from 'react';
import axios from 'axios';
import mockAxios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfitList from './YourOutfitList.jsx';
// import '../assets/related.css';
import Modal from './Modal.jsx';
import baseURL from '../baseURL.js';

const { useState, useEffect } = React;

//I need a style_id to be passed to me, i need to use it on handlePlusIconClick
const RelatedItemsAndComparison = ({currentProductID, currentProduct, changeCurrentProduct, selectedStyle, metaReviews}) => {
// console.log('currentProductID passed in: ', currentProductID) //its first 0 and then 37311 //DONT CONSOLE.LOG here, console.log inside of fetch
  const [relatedProductsID, setRelatedProductsID] = useState([]);
  const [outfitList, setOutfitList] = useState([]);
  const [styleIDList, setStyleIDList] = useState([]);
  const [duplicateSelected, setDuplicateSelected] = useState(false);

    const fetchAllRelatedProductsID = () => {
      // console.log('selectedStyle: ', selectedStyle)
      // console.log('currentProductID passed in: ', currentProductID)

      const temp = [];
      axios.get(`/comparison`, { params: { specificURL: `products/${currentProductID}/related` } })
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

const setLocalStorage = (index, outfit) => {
//setItem
}

const removeFromLocalStorage = (index, outfit) => {
//localStorage.removeItem()
}

const handlePlusIconClick = () =>{
  if  (styleIDList.indexOf(selectedStyle.style_id)!==-1) {
    setDuplicateSelected(true);
  } else {
    const tempOutfit = {};
    tempOutfit.name = currentProduct.name;
    tempOutfit.category = currentProduct.category;
    tempOutfit.styleID =  selectedStyle.style_id;
    tempOutfit.style = selectedStyle.name;
    tempOutfit.regularPrice = selectedStyle.original_price;
    tempOutfit.image = selectedStyle.photos[0].url;
    if (selectedStyle.sales_price) {
      tempOutfit.price = selectedStyle.sales_price;
    }
    setOutfitList([...outfitList, tempOutfit]);
    setStyleIDList([...styleIDList, tempOutfit.styleID]);  
  }
}

const closePopUp = () => {
  setDuplicateSelected(false);
}

//this is more like a delete, instead of updating
const updateOutfitList = (currentStyleID) =>{
   //[{styleID=...}, {styleID=...}]
  //  console.log('hey look, it got in updateOutfitList()!!!')
   const copyOutfitList = outfitList.slice(); //dont manipulate with the state directly, make a copy! i have a bug here
   copyOutfitList.forEach((outfit, index)=>{
    // console.log('outfit.styleID:', outfit.styleID)
    // console.log('currentStyleID being passed in:', currentStyleID)
    if (outfit.styleID=== currentStyleID) {
      copyOutfitList.splice(index, 1);
    //  console.log('copyOutfitList after splicing: ', copyOutfitList) //yeah its correct up till here//[]
    }
   })
   setOutfitList(copyOutfitList);
   const copyStyleIDList = styleIDList.slice();
   styleIDList.forEach((styleID, index) => {
    if (styleID === currentStyleID) {
      copyStyleIDList.splice(index, 1);
    }
   })
   setStyleIDList(copyStyleIDList);
}


  return (
    <div className='relatedItemsAndComparison'>
      <h2 className='YouMightAlsoLike'>YOU MIGHT ALSO LIKE</h2>
      <RelatedProducts relatedProductsID={relatedProductsID} currentProductID={currentProductID} currentProduct={currentProduct} changeCurrentProduct={changeCurrentProduct}></RelatedProducts>
      <h3 className='CompleteYourOutfit'>COMPLETE YOUR OUTFIT</h3>
      <YourOutfitList outfitList = {outfitList} handlePlusIconClick={handlePlusIconClick} updateOutfitList={updateOutfitList} duplicateSelected={duplicateSelected} closePopUp={closePopUp}></YourOutfitList>
    </div>
  );
};

export default RelatedItemsAndComparison;


