import React from 'react';
import clsx from 'clsx';

//import { useState } from "react";

import OptionComponent from '../OptionComponent/OptionComponent';

import styles from './ProductOptions.module.scss';


const ProductOptions = (props) => {

  const { className, params } = props;

  // GET PARAMS
  let param = {};

  // GET OPTIONS
  let option = {};
  
  //GET ARRAY OF ELEMENTS TO DISPLAY
  let paramOptionsItem = [];

  for (let paramID in params) {
    param = params[paramID];
    //console.log('param:', param);
    let paramLabel = <p key={param.label}>{param.label}:</p>;

    paramOptionsItem.push(paramLabel);

    for (let optionID in param.options) {
      option = param.options[optionID];
      //console.log('option:', option);
      let optionField = <OptionComponent key={option.label} param={param} option={option} />
      paramOptionsItem.push(optionField);
    }

  }

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.paramOptionsItem}>{paramOptionsItem}</div>
    </div>
  );
}


export default ProductOptions;
