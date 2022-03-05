import React from 'react';

import styles from './Homepage.module.scss';

import MenuProducts from '../../features/MenuProducts/MenuProducts';


const Homepage = (props) => (
  <div className={styles.root}>
    <p>{props.title}</p>
    <MenuProducts title='OUR MENU'/>
  </div>
);


export default Homepage;
