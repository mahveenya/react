import { Component } from 'react';
import styles from './NothingToShow.module.css';

export default class NothingToShow extends Component {
  render() {
    return (
      <section className={styles.nothingToShow}>
        Nothing to show
        <br />
        Try another pokemon name
      </section>
    );
  }
}
