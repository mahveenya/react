import { Component, type ChangeEvent } from 'react';
import styles from './SearchInput.module.css';
import db from '../../../db/db';

export default class SearchInput extends Component {
  state = {
    query: db.getLastSearch(),
  };

  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };
  render() {
    return (
      <input
        type="search"
        name="q"
        placeholder="Search by track, artist, album..."
        className={styles.searchInput}
        value={this.state.query}
        onChange={this.handleChange}
      />
    );
  }
}
