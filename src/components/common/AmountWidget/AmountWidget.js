import React from 'react';
import { useState } from "react";

import styles from './AmountWidget.module.scss';


const AmountWidget = () => {

  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleRemove = () => {
    if(quantity > 0)
    setQuantity(quantity - 1)
  }


  return (
  <div className={styles.root}>
    <button 
      type='button'
      onClick={() => setQuantity(quantity + 1)}
    >+</button>
    <input 
      type='text'
      value={quantity}
      onChange={handleChange}
      maxLength='2' 
      size='3' />
    <button 
      type='button'
      onClick={handleRemove}
    >-</button>
  </div>
  );
}



export default AmountWidget;
