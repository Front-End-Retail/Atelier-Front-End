import React from 'react';
import '../assets/related.css';
import axios from 'axios';
import '../assets/related.css';
const { useState, useEffect } = React;

const YourOutfitList = () => {
  //this will take in the onClick current product_id on OverView page
  const dummyProductID = 37311;
  const dummyStyleID = 220998;
  const [outfits, setOutfits] = useState([]);
  const [currentOutfit, setCurrentOutfit] = useState({});
  const temp = {};
  useEffect(()=>{
  axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${dummyProductID}` } })
    .then(response=>{
      console.log('detail info retrieved with product_id', response.data);
      temp.name = response.data.name;
      temp.category = response.data.category;
      axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/${dummyProductID}/styles` } })
        .then((response)=>{
          console.log('style info ', response.data);
          response.data.results.forEach(result=>{
            if (result.style_id === 221002) {
              temp.style = result.name;
              temp.image = result.photos[0].url;
              temp.regularPrice = result.original_price;
              if (result.sale_price) {
                temp.price = result.sale_price;
              }
            }
          })
          console.log('temp after assigning properties: ', temp);
          setCurrentOutfit(temp);
        })
        .catch(err=>{
          console.log('failed to get style info', err);
        })
      })
    .catch(err=>{
      console.log('yourOutfitList failed to retrieve style with style_id:' , err)
    })

}, [])// the 2 .then() data was rendered twice without useEffect

    return (
      <div className='currentOutfit'>
        <h4>{currentOutfit.name}</h4>
        <div>{currentOutfit.style}</div>
        <div>{currentOutfit.category}</div>
        <div className='regularPrice'>${currentOutfit.regularPrice}</div>
        <div style={{ color: 'red' }}>${currentOutfit.price}</div>
        <img src={currentOutfit.image} alt='temp.image' height='123px' width='155px'/>
      </div>
    );
  // return (
  //   <div>
  //   {outfits.length ===0 ? <div className='emptyList'>
  //    <p>It's empty here...Add more? </p>
  //    </div> : <div>its not empty!</div>}
  //   </div>
  // );
};

export default YourOutfitList;