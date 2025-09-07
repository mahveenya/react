import { Component } from 'react';
import './App.css';
import SearchBar from '~components/SearchBar/SearchBar';
import Tracks from '~components/Tracks/Tracks';
import api from '~api/api';
import db from './db/db';

export default class App extends Component {
  state = {
    tracks: [],
    query: db.getLastSearch() || '',
    loading: false,
  };

  componentDidMount(): void {
    if (this.state.query) {
      this.handleSearch(this.state.query);
    } else {
      this.handleSearch('kung fu fighting');
    }
  }

  handleSearch = async (query: string) => {
    this.setState({ loading: true });
    const response = await api.search(query);
    this.setState({ tracks: response, query, loading: false });
  };

  render() {
    return (
      <>
        <SearchBar onSearch={this.handleSearch} />
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <Tracks tracks={this.state.tracks} query={this.state.query} />
        )}
      </>
    );
  }
}
