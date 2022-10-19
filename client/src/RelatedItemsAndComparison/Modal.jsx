import React from 'react';
import './Modal.css';
const { useState, useEffect } = React;

const Modal = ({closeModal}) =>{
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
      <table>
   <tr>
    <th>Camo Onesie</th>
    <th>           </th>
    <th>Slacker's Slacks</th>
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