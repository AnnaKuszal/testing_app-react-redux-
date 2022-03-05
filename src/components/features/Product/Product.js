import React from 'react';
//import PropTypes from 'prop-types';
import clsx from 'clsx';

import ProductOptions from '../ProductOptions/ProductOptions';
import AmountWidget from '../../common/AmountWidget/AmountWidget';

import styles from './Product.module.scss';


const Product = (props) => {

  const { name, price, description, images } = props;
  
  const productImages = images.map((image, index) => {

    let imgClass = image.slice(image.indexOf('class')+7, image.indexOf('src')-2);
    let imgSrc = image.slice(image.indexOf('src')+5, image.indexOf('svg')+3);
    let imgIndex = image.slice(image.indexOf('z-index')+9, image.indexOf('>')-2);
    // console.log(image);
    // console.log(imgClass);
    // console.log(imgSrc);
    // console.log(imgIndex);
    return (
      <img key={index} className={clsx(styles.image, imgClass && styles.active)} src={imgSrc} style={{zIndex: imgIndex}} />
    );
    
  });


  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price}$</p>
      <AmountWidget />
      <div className={styles.details}>

        <div className={styles.images}>
          {productImages}
        </div>

        {/* <div className={styles.options}> */}
          <ProductOptions className={styles.options} {...props} />
        {/* </div> */}

      </div>
    </div>
  );
}


export default Product;
