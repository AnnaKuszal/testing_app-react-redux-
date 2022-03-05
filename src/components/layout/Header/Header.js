import React from 'react';

import styles from './Header.module.scss';


const Header = (props) => (
  <div className={styles.root}>
    {props.title}
  </div>
);


export default Header;
