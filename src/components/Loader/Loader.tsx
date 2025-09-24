import { Component } from 'react';
import styles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
