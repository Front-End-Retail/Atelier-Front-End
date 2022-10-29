import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfitList from './YourOutfitList.jsx';
import baseURL from '../baseURL.js'

const { useState, useEffect } = React;

//style_id passed in
const RelatedItemsAndComparison = ({ currentProductID, changeCurrentProduct, selectedStyle, currentProduct, metaReviews }) => {
  const [relatedProductsID, setRelatedProductsID] = useState([]);
  const [outfitList, setOutfitList] = useState([]);
  const [styleIDList, setStyleIDList] = useState([]);
  const [duplicateSelected, setDuplicateSelected] = useState(false);

  const fetchAllRelatedProductsID = () => {
    const temp = [];
    axios.get(`${baseURL}/comparison`, { params: { specificURL: `products/${currentProductID}/related` } })
      .then((response) => {
        const storageObj = {};
        response.data.forEach(id => {
          if (id !== 37312 && storageObj[id] === undefined && id !== currentProductID) { //to filter out duplicate style_id
            storageObj[id] = 1;
            temp.push(id);
          }
        })
        setRelatedProductsID(temp);
      })
      .catch(err => {
        console.log('client failed to retrieve all products ids: ', err);
      })
  };

  useEffect(() => {
    fetchAllRelatedProductsID();
  }, [currentProductID])

  const setLocalStorage = (index, outfit) => {
    //setItem
  }

  const removeFromLocalStorage = (index, outfit) => {
    //localStorage.removeItem()
  }

  const handlePlusIconClick = () => {
    if (styleIDList.indexOf(selectedStyle.style_id) !== -1) {
      setDuplicateSelected(true);
    }
    if (styleIDList.indexOf(selectedStyle.style_id) === -1) {
      axios.get(`${baseURL}/comparison`, { params: { specificURL: `products/${currentProductID}` } })
        .then(response => {
          // console.log('detail info retrieved with product_id', response.data);
          const tempOutfit = {};
          tempOutfit.name = response.data.name;
          tempOutfit.category = response.data.category;
          axios.get(`${baseURL}/comparison`, { params: { specificURL: `products/${currentProductID}/styles` } })
            .then((response) => {
              response.data.results.forEach(result => {
                if (result.style_id === selectedStyle.style_id && styleIDList.indexOf(selectedStyle.style_id) === -1) {
                  tempOutfit.styleID = result.style_id;
                  tempOutfit.style = result.name;
                  tempOutfit.image = result.photos[0].url;
                  tempOutfit.regularPrice = result.original_price;
                  if (result.sale_price) {
                    tempOutfit.price = result.sale_price;
                  }
                }
              })
              setOutfitList([...outfitList, tempOutfit]);
              setStyleIDList([...styleIDList, selectedStyle.style_id]);
            })
            .catch(err => {
              console.log('failed to get style info', err);
            })
        })
        .catch(err => {
          console.log('yourOutfitList failed to retrieve style with style_id:', err)
        })
    }
  }

  const closePopUp = () => {
    setDuplicateSelected(false);
  }

  //remove an outfit
  const updateOutfitList = (currentStyleID) => {
    //[{styleID=...}, {styleID=...}]
    const copyOutfitList = outfitList.slice();
    copyOutfitList.forEach((outfit, index) => {
      if (outfit.styleID === currentStyleID) {
        copyOutfitList.splice(index, 1);
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
      <RelatedProducts relatedProductsID={relatedProductsID} currentProductID={currentProductID} currentProduct={currentProduct} changeCurrentProduct={changeCurrentProduct} metaReviews={metaReviews}></RelatedProducts>
      <h3 className='CompleteYourOutfit'>COMPLETE YOUR OUTFIT</h3>
      <YourOutfitList outfitList={outfitList} handlePlusIconClick={handlePlusIconClick} styleIDList={styleIDList} updateOutfitList={updateOutfitList} duplicateSelected={duplicateSelected} closePopUp={closePopUp} metaReviews={metaReviews}></YourOutfitList>
    </div>
  );
};

export default RelatedItemsAndComparison;


