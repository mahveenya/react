import { Component } from 'react';
import type { FormEvent } from 'react';
import SearchInput from './SearchInput/SearchInput';
import SearchButton from './SearchButton/SearchButton';
import styles from './SearchBar.module.css';
import db from '../../db/db';
import type { Props } from './types';

export default class SearchBar extends Component<Props> {
  private handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get('q')?.toString().trim();
    if (!query) return;

    db.setLastSearch(query);
    this.props.onSearch(query);
    console.log('Results:', db.getTracks());
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.searchBar}>
        <SearchInput />
        <SearchButton />
      </form>
    );
  }
}
