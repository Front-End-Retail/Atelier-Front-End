import React from 'react';
import './Modal.css';
const { useState, useEffect } = React;
import axios from 'axios';
import Feature from './Feature.jsx';
 // check if the value of feature is null

const Modal = ({closeModal, currentProductID, relatedProductID}) =>{

const [featureList, setFeatureList] = useState([])
const [currProductFeatures, setCurrProductFeatures] = useState([]); //[{'feature': 'Buttons', 'value': 'brass'}, {'feature': '..', 'value': '...'}]
const [comparedProductFeatures, setComparedProductFeatures] = useState([]);

//nested API call, is this really good practice???

  const fetchAllFeatures = () => {
    axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/37311` } })
    .then(response=> {
      console.log('response.data inside of Modal:' , response.data);
      const currFeatures = response.data.features;
      setCurrProductFeatures(response.data.features);
      const featureStorage = [];
      currFeatures.forEach(currObj=>{
        featureStorage.push(currObj.feature);
      })
      console.log('featureStorage after pushing current: ', featureStorage)
      axios.get('http://localhost:3000/comparison', { params: { specificURL: `products/37313` } })
        .then(response => {
          const relatedFeatures = response.data.features;
          relatedFeatures.forEach(relatedObj=>{ //[fabric, button]
             //[fabric, cut]
            if (featureStorage.indexOf(relatedObj.feature) === -1){
                featureStorage.push(relatedObj.feature);
            }
          })
          console.log('featureStorage after pushing related: ', featureStorage)
          //['Fabric', 'Buttons', 'Cut']
          setFeatureList(featureStorage);
          setComparedProductFeatures(response.data.features);
        })
        .catch(err=>{
          console.log('failed to retrieve features for related item', err)
        })
    })
    .catch(err=>{
      console.log('failed to retrieve features for current item', err)
    })
  }


  useEffect(()=>{
    fetchAllFeatures();
  }, [relatedProductID])

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
      <span>FIND YOUR FIT</span>
      <table>
          <tr>
              <th>PRODUCT NAME</th>
              <th>    FEATURE     </th>
               <th>PRODUCT NAME</th>
          </tr>


    <div>
    {featureList.map((feature, index)=>{
       return <Feature key={index} feature={feature}
        comparedProductFeatures={comparedProductFeatures} currProductFeatures={currProductFeatures}></Feature>
    })}
   </div>

   <tr>
    <td>Cotton</td>
    <td>Fabric</td>
    <td>Canvas</td>
   </tr>
   <tr>
    <td>Cotton</td>
    <td>Fabric</td>
    <td>Canvas</td>
   </tr>
      </table>
      <div className='titleCloseBtn'><button onClick={()=>{closeModal(false)}}>x</button> </div>
      </div>
    </div>
  );
}

export default Modal;