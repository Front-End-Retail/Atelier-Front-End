import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import YourOutfit from './YourOutfit.jsx';


const { useState, useEffect } = React;
const YourOutfitList = ({outfitList, styleIDList, handlePlusIconClick, updateOutfitList, duplicateSelected, closePopUp, metaReviews}) => {

  const [currCarousel, setCurrCarousel] = useState([]);
  useEffect(()=>{
     setCurrCarousel(outfitList);
  }, [outfitList])

  const handleRightClick = () => {
    const leftoverCarousel = currCarousel.slice(3);
    console.log('outfit leftoverCarousel: ', leftoverCarousel)
    setCurrCarousel(leftoverCarousel);
  }

  const handleLeftClick = () => {
    console.log('tell me it did get in outfit handleLeftClick!')
    const prevCarousel = outfitList.slice(0, 3);
    console.log('prevCarousel: ', prevCarousel)
    setCurrCarousel(prevCarousel);
  }


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
 if (currCarousel.length > 0 && currCarousel.length < 3 && styleIDList.length <= 3) {
  return (
    <div className='yourOutfitListContainer'>
        <div className='addMoreOutfit'>
             {/* <p className='addMoreOutfit-word'>Add this style?</p>
             <div className='tshirtIcon-div'>
                   <FontAwesomeIcon className='tshirtIcon'icon={faClothes-hanger} color='white'/>
             </div> */}
             <div onClick={handlePlusIconClick} className='plusIconInAddMore'>
                 <FontAwesomeIcon className='plus'icon={faPlus} />
             </div>
        </div>
        {currCarousel.map((outfit, index)=>{
              return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList} duplicateSelected={duplicateSelected} closePopUp={closePopUp} metaReviews={metaReviews}></YourOutfit>})}
    </div>
    )
 }

 if (currCarousel.length > 3 && styleIDList.length <=3) {
    return (
      <div className='yourOutfitListContainer'>
          <div className='addMoreOutfit'>
               {/* <p className='addMoreOutfit-word'>Add this style?</p>
               <div className='tshirtIcon-div'>
                   <FontAwesomeIcon className='tshirtIcon'icon={faClothes-hanger} color='white'/>
               </div> */}
               <div onClick={handlePlusIconClick} className='plusIconInAddMore'>
                   <FontAwesomeIcon className='plus'icon={faPlus} />
               </div>
          </div>
          {currCarousel.slice(0, 3).map((outfit, index)=>{
              return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList} duplicateSelected={duplicateSelected} closePopUp={closePopUp} metaReviews={metaReviews}></YourOutfit>
          })}
          {currCarousel.length>3 && <button className='rightArrowIcon-Btn'><FontAwesomeIcon icon={faChevronRight}/></button>}
     </div>
     )
}

if (currCarousel.length === 3 && styleIDList.length === 3){
  return (
    <div className='yourOutfitListContainer'>
        <div className='addMoreOutfit'>
             <p className='addMoreOutfit-word'>Add this style?</p>
             <div onClick={handlePlusIconClick} className='plusIconInAddMore'>
                 <FontAwesomeIcon className='plus'icon={faPlus} />
             </div>
        </div>
        {currCarousel.slice(0, 3).map((outfit, index)=>{
            return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList} duplicateSelected={duplicateSelected} closePopUp={closePopUp} metaReviews={metaReviews}></YourOutfit>
        })}
   </div>
   )
}

if (currCarousel.length === 3 && styleIDList.length > 3) {
  return (
    <div className='yourOutfitListContainer'>
        <div className='addMoreOutfit'>
             <p className='addMoreOutfit-word'>Add this style?</p>
             <div onClick={handlePlusIconClick} className='plusIconInAddMore'>
                 <FontAwesomeIcon className='plus'icon={faPlus} />
             </div>
        </div>
        {currCarousel.slice(0, 3).map((outfit, index)=>{
            return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList} duplicateSelected={duplicateSelected} closePopUp={closePopUp} metaReviews={metaReviews}></YourOutfit>
        })}
       <button className='rightArrowIcon-Btn' onClick={handleRightClick}><FontAwesomeIcon className='rightArrowIcon' icon={faChevronRight}/></button>
   </div>
   )
}

if (styleIDList > 3) {
  return (
    <div className='yourOutfitListContainer'>
    <div className='addMoreOutfit'>
         <p className='addMoreOutfit-word'>Add this style to your outfit?</p>
         <div onClick={handlePlusIconClick} className='plusIconInAddMore'>
             <FontAwesomeIcon className='plus'icon={faPlus} />
         </div>
    </div>
    {currCarousel.slice(0, 3).map((outfit, index)=>{
        return <YourOutfit key={index} outfit={outfit} updateOutfitList={updateOutfitList} duplicateSelected={duplicateSelected} closePopUp={closePopUp} metaReviews={metaReviews}></YourOutfit>
    })}
   <button className='rightArrowIcon-Btn' onClick={handleRightClick}><FontAwesomeIcon className='rightArrowIcon' icon={faChevronRight}/></button>
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