import React from 'react';
//import PropTypes from 'prop-types';
// import clsx from 'clsx';


import Product from '../Product/Product';

import styles from './MenuProducts.module.scss';



class MenuProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataIsLoaded: false
    }
  }

  componentDidMount() {
    fetch('db/app.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    
    .then(res => res.json())
    .then(res => 
      //console.log(res.product);
      this.setState({
        items: res.product,
        dataIsLoaded: true
      })
    )
  }

  render() {
    const { title } = this.props;
    const { items, dataIsLoaded } = this.state;
    console.log(this.state.items);

    if (!dataIsLoaded) {
      return <div><h1>Please wait some time...</h1></div>;
    }

    return (
      <div className={styles.root}>
        <h2>{title}</h2>
        {
          items && items.length > -1 &&
          items.map(item => {

            return (
              <Product key={item.id} {...item} />
            );
          })
        }
      </div>
    );
  }
}


export default MenuProducts;
