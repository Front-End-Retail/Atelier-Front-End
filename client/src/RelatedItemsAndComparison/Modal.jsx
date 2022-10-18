import React from 'react';
import '../assets/related.css';
const { useState, useEffect } = React;

const Modal = ({closeModal}) =>{
  return (
    <div className='modalBackground'>

      <div className='ModalContainer'>

        <div className='body'>
          <p>Comparing Modal</p>
        </div>
        <div className='titleCloseBtn'>
          <button onClick={()=>{closeModal(false)}}>x</button>
        </div>

      </div>

    </div>
  );
}

export default Modal;