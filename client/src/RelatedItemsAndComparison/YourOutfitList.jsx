import React from 'react';
import '../assets/related.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import YourOutfit from './YourOutfit.jsx';

const { useState, useEffect } = React;


const YourOutfitList = ({outfitList, handlePlusIconClick, updateOutfitList, duplicateSelected, closePopUp}) => {

  const [currCarousel, setCurrCarousel] = useState([]);
  useEffect(()=>{
     setCurrCarousel(outfitList);
  }, [outfitList])

if (currCarousel.length === 0) {
  return (
   <div>
    <span className='emptyOutfitList'>Its empty here... Add this style?</span>
    <br></br>
    <br></br>
    <div onClick={handlePlusIconClick} className='plusIcon'>
    <FontAwesomeIcon icon={faPlus}/>
    </div>
   </div>
  )
}
// if (currCarousel.length > 0 && currCarousel.length < 3 ) {
 if (currCarousel.length > 0 && currCarousel.length < 3) {
  return (
    <div className='yourOutfitListContainer'>
        <div className='addMoreOutfit'>
             <p className='addMoreOutfit-word'>Add this style?</p>
             <div onClick={handlePlusIconClick} className='plusIconInAddMore'>
                 <FontAwesomeIcon className='plus'icon={faPlus} />
             </div>
        </div>
        {currCarousel.map((outfit, index)=>{
              return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList} duplicateSelected={duplicateSelected} closePopUp={closePopUp}></YourOutfit>})}
    </div>
    )
 }

 if (currCarousel.length >=3) {
    return (
      <div className='yourOutfitListContainer'>
          <div className='addMoreOutfit'>
               <p className='addMoreOutfit-word'>Add this style?</p>
               <div onClick={handlePlusIconClick} className='plusIconInAddMore'>
                   <FontAwesomeIcon className='plus'icon={faPlus} />
               </div>
          </div>
          {currCarousel.slice(0, 3).map((outfit, index)=>{
              return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList} duplicateSelected={duplicateSelected} closePopUp={closePopUp}></YourOutfit>
          })}
          {currCarousel.length>3 && <button className='rightArrowIcon-outfitList'><FontAwesomeIcon icon={faArrowRight}/></button>}
     </div>
     )
}













  // if (currCarousel.length>=3) {
  //   const sizedCarousel = currCarousel.slice(0,3);
  //   return (
  //     <div className='yourOutfitListContainer'>
  //     <div className='addMoreOutfit'>
  //          <p className='addMoreOutfit-word'>Add this style?</p>
  //          <div onClick={handlePlusIconClick} className='plusIconInAddMore'>
  //              <FontAwesomeIcon className='plus'icon={faPlus} />
  //          </div>
  //     </div>
  //     {/* <button className='leftArrowIcon'><FontAwesomeIcon icon={faArrowLeft}/></button> */}
  //     {/* {console.log('outfitList right before mapping: ', outfitList)} */}
  //     <div>
  //     {currCarousel.map((outfit, index)=>{
  //       return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList}></YourOutfit>
  //     })}
  //     </div>
  //    <button className='rightArrowIcon'><FontAwesomeIcon icon={faArrowRight}/></button>
  // </div>
  //   )
  // }






};

export default YourOutfitList;

// const YourOutfitList = ({outfitList, handlePlusIconClick, updateOutfitList}) => {

//   if (outfitList.length === 0) {
//     return (
//      <div>
//       <span className='emptyOutfitList'>Its empty here... Add this style?</span>
//       <br></br>
//       <br></br>
//       <div onClick={handlePlusIconClick} className='plusIcon'>
//       <FontAwesomeIcon icon={faPlus}/>
//       </div>
//      </div>
//     )
//   } else {
//       return (
//         <div className='yourOutfitListContainer'>
//             <div className='addMoreOutfit'>
//                  <p className='addMoreOutfit-word'>Add this style?</p>
//                  <div onClick={handlePlusIconClick} className='plusIconInAddMore'>
//                      <FontAwesomeIcon className='plus'icon={faPlus} />
//                  </div>
//             </div>
//             {/* <button className='leftArrowIcon'><FontAwesomeIcon icon={faArrowLeft}/></button> */}
//             {console.log('outfitList right before mapping: ', outfitList)}
//             {outfitList.map((outfit, index)=>{
//               return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList}></YourOutfit>
//             })}

//            {/* <button className='rightArrowIcon'><FontAwesomeIcon icon={faArrowRight}/></button> */}
//         </div>
//       );
//     }
//   };


//just wrap a <div> and it would work---------------------
// {currCarousel.length > 0 && currCarousel.length < 3 &&

//   {/* <div className='innerOutfitContainer'> */}
// currCarousel.map((outfit, index)=>{
// return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList}></YourOutfit>
// })}


// {currCarousel.length >=3 &&
// <div>
// {currCarousel.slice(0, 3).map((outfit, index)=>{
// return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList}></YourOutfit>
// })}
// {currCarousel.length>3 && <button className='rightArrowIcon-outfitList'><FontAwesomeIcon icon={faArrowRight}/></button>}
// </div>
// }