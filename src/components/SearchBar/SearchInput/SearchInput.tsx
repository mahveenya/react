import { Component } from 'react';
import Input from '../../BaseComponents/Input/Input';
import styles from './SearchInput.module.css';

export default class SearchInput extends Component {
  render() {
    return (
      <Input
        type="search"
        name="q"
        placeholder="Search..."
        className={styles.searchInput}
      />
    );
  }
}
