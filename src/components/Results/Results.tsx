import { Component } from 'react';
import Item from './Item/Item';
import styles from './Results.module.css';

export default class Results extends Component {
  render() {
    return (
      <main className={styles.results}>
        <Item />
        <Item />
      </main>
    );
  }
}
