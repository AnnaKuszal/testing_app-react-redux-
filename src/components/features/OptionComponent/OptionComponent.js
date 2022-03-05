import React from 'react';
import { useState } from "react";

import styles from './OptionComponent.module.scss';



const OptionComponent = (props) => {

  const { param, option } = props;  

  const [checkedState, setCheckedState] = useState({
    name: option.label,
    checked: option.default || false
  });

  const handleCheck = (e) => {
    
    setCheckedState((prevState) => {
      return (
        {...prevState,                   // prevState==checkedState
        name: e.target.value,
        checked: e.target.checked
        }    
      );
    })
  }

  //console.log('checkedState:', checkedState);


  return (
    <React.Fragment>
    <input
      type={param.type==='checkboxes' ? 'checkbox' : 'radio'}
      name={param.label}
      value={option.label}
      checked={checkedState.checked}
      onChange={handleCheck}
      />
    <label>{option.label}: ${option.price}</label><br />
  </React.Fragment>
  );
}


export default OptionComponent;
