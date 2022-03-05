import React from 'react';

import styles from './NavBar.module.scss';



class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      dataIsLoaded: false
    }
  }

  componentDidMount(){
    fetch('db/app.json')
    .then(res => res.json())
    .then(json =>
      this.setState({
        items: json.navLink,
        dataIsLoaded: true
      })
    )
  }

  render() {

    const { items } = this.state;

    return (
      <div className={styles.root}>
        <ul>
          {
            items.map(item => {
              return (
                <li key={item.id} className={styles.listItem}>
                  <a href='#' className={styles.linkItem}>{item.name}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}


export default NavBar;
