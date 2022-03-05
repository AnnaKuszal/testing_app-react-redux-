import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';



const MainLayout = ({ children }) => (     // destructuring the props object, so we can use children directly
  <div className={styles.root}>
    {children}
  </div>
);


MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export default MainLayout;
