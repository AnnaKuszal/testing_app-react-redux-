import React from 'react';
import clsx from 'clsx';

import styles from './TopBanner.module.scss';


class TopBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataIsLoaded: false
    }
  }

  componentDidMount() {
    fetch('db/app.json')
    .then(res => res.json())
    .then(json => 
      //console.log(json.weeklyOffer),
      this.setState({
        items: json.weeklyOffer,
        dataIsLoaded: true
      })
    )
  }

  render() {
    const { items, dataIsLoaded } = this.state;

    return (
      <div className={styles.root}>
        <h1>{items.title}</h1>
        <h2>{items.days}</h2>
        <p>
          {items.message}
        </p>
        <img className={styles.image} src={items.bannerImg} alt='drinks' />
      </div>
    );
  }

}


export default TopBanner;
