import { Component } from 'react';
import styles from './Item.module.css';
import ItemDescription from './ItemDescription/ItemDescription';
import ItemName from './ItemName/ItemName';

export default class Item extends Component {
  render() {
    return (
      <section className={styles.item}>
        <ItemName />
        <ItemDescription />
      </section>
    );
  }
}
