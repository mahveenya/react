import { Component } from 'react';
import Form from '../BaseComponents/Form/Form';
import SearchInput from './SearchInput/SearchInput';
import SearchButton from './SearchButton/SearchButton';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  render() {
    return (
      <Form method="GET" action="/search" className={styles.searchBar}>
        <SearchInput />
        <SearchButton />
      </Form>
    );
  }
}
