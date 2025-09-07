import { Component } from 'react';
import type { FormEvent } from 'react';
import SearchInput from './SearchInput/SearchInput';
import SearchButton from './SearchButton/SearchButton';
import styles from './SearchBar.module.css';
import ls from '../../db/storage';

interface Props {
  onSearch: (query: string) => void;
}

export default class SearchBar extends Component<Props> {
  private handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get('q')?.toString().trim();
    if (!query) return;

    ls.setLastSearch(query);
    this.props.onSearch(query);
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
