import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfitList from './YourOutfitList.jsx';
import '../assets/related.css';
import Modal from './Modal.jsx';


const { useState, useEffect } = React;

//I need a style_id to be passed to me, i need to use it on handlePlusIconClick
const RelatedItemsAndComparison = ({currentProductID, changeCurrentProduct}) => {
// console.log('currentProductID passed in: ', currentProductID) //its first 0 and then 37311 //DONT CONSOLE.LOG here, console.log inside of fetch
  const [relatedProductsID, setRelatedProductsID] = useState([]);
  const dummyProductID = 37311;
  const dummyStyleID = 220998;
  const [outfitList, setOutfitList] = useState([]);
  const [currentOutfit, setCurrentOutfit] = useState({});

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


const handlePlusIconClick = () =>{
  axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${dummyProductID}` } })
    .then(response=>{
      // console.log('detail info retrieved with product_id', response.data);
      const tempOutfit = {};
      tempOutfit.name = response.data.name;
      tempOutfit.category = response.data.category;
      axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${dummyProductID}/styles` } })
        .then((response)=>{
          // console.log('style info ', response.data);
          response.data.results.forEach(result=>{
            if (result.style_id === 221002) {
              tempOutfit.styleID = result.style_id;
              tempOutfit.style = result.name;
              tempOutfit.image = result.photos[0].url;
              tempOutfit.regularPrice = result.original_price;
              if (result.sale_price) {
                tempOutfit.price = result.sale_price;
              }
            }
          })
          // console.log('temp after assigning properties: ', temp);
          setOutfitList([...outfitList, tempOutfit]); //setCurrentOutfit(tempOutfit);
        })
        .catch(err=>{
          console.log('failed to get style info', err);
        })
      })
    .catch(err=>{
      console.log('yourOutfitList failed to retrieve style with style_id:' , err)
    })
}

const updateOutfitList = (currentStyleID) =>{
   //[{style.id=...}, {style.id=...}]
   console.log('hey look, it got in updateOutfitList()!!!')
   const copyOutfitList = outfitList.slice(); //dont manipulate with the state directly, make a copy! i have a bug here
   copyOutfitList.forEach((outfit, index)=>{
    console.log('outfit.styleID:', outfit.styleID)
    console.log('currentStyleID being passed in:', currentStyleID)
    if (outfit.styleID= currentStyleID) {
      copyOutfitList.splice(index, 1);
     console.log('copyOutfitList after splicing: ', copyOutfitList) //yeah its correct up till here//[]
    }
   })
   setOutfitList(copyOutfitList);//everytime there is a state change, it re-renders?
}





  return (
    <div>
      <h2 className='YouMightAlsoLike'>YOU MIGHT ALSO LIKE</h2>
      <RelatedProducts relatedProductsID={relatedProductsID} changeCurrentProduct={changeCurrentProduct}></RelatedProducts>
      <h3 className='CompleteYourOutfit'>COMPLETE YOUR OUTFIT</h3>
      <YourOutfitList outfitList = {outfitList} handlePlusIconClick={handlePlusIconClick} updateOutfitList={updateOutfitList}></YourOutfitList>
    </div>
  );
};

export default RelatedItemsAndComparison;