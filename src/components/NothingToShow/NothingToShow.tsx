import { Component } from 'react';
import styles from './NothingToShow.module.css';

export interface Props {
  query: string;
}

export default class NothingToShow extends Component<Props> {
  render() {
    const { query } = this.props;

    return (
      <section className={styles.nothingToShow}>
        Nothing to show for <mark>{query}</mark>
        <br />
        Try another pokemon name
      </section>
    );
  }
}
