import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import Feature from './Feature.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Modal = ({ closeModal, currentProductID, relatedProductID, currentProduct }) => {

  const [featureList, setFeatureList] = useState([]);
  const [currProductFeatures, setCurrProductFeatures] = useState([]); //[{'feature': 'Buttons', 'value': 'brass'}, {'feature': '..', 'value': '...'}]
  const [comparedProductFeatures, setComparedProductFeatures] = useState([]);
  const [currProductName, setCurrProductName] = useState('');
  const [comparedProductName, setComparedProductName] = useState('');

  const fetchAllFeatures = () => {
    const featureStorage = [];
    const currFeatures = currentProduct.features;
    setCurrProductName(currentProduct.name);
    setCurrProductFeatures(currentProduct.features);
    currFeatures.forEach(currObj => {
      featureStorage.push(currObj.feature);
      axios.get(`/comparison`, { params: { specificURL: `products/${relatedProductID}` } })
        .then(response => {
          setComparedProductName(response.data.name);
          const relatedFeatures = response.data.features;
          relatedFeatures.forEach(relatedObj => { //[fabric, button]
            //[fabric, cut]
            if (featureStorage.indexOf(relatedObj.feature) === -1) {
              featureStorage.push(relatedObj.feature);
            }
          })
          //featureStorage = ['Fabric', 'Buttons', 'Cut']
          setFeatureList(featureStorage);
          setComparedProductFeatures(response.data.features);
        })
        .catch(err => {
          console.log('failed to retrieve features for related item', err)
        })
    })
  }
  useEffect(() => {
    fetchAllFeatures();
  }, [currentProductID, relatedProductID])

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button className='closeBtn' onClick={() => { closeModal(false) }}><FontAwesomeIcon id='exit-icon' icon={faTimes} /></button>
        <span className='comparing'>COMPARING</span>
        <table>
          <tr>
            <th className='first-row'>PRODUCT NAME</th>
            <th className='first-row'>FEATURE</th>
            <th className='first-row'>PRODUCT NAME</th>
          </tr>
          <tr>
            <th>{currProductName}</th>
            <th></th>
            <th>{comparedProductName}</th>
          </tr>
          {featureList.map((feature, index) => {
            return <Feature key={index} feature={feature}
              comparedProductFeatures={comparedProductFeatures} currProductFeatures={currProductFeatures}></Feature>
          })}
        </table>
      </div>
      <div className="modal-overlay" onClick={() => {closeModal()}}></div>
    </div>
  );
}

export default Modal;