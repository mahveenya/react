import { Component } from 'react';
import './App.css';
import SearchBar from '~components/SearchBar/SearchBar';
import Tracks from '~components/Tracks/Tracks';
import api from '~api/api';
import ls from './db/storage';
import Loader from './components/Loader/Loader';

export default class App extends Component {
  state = {
    tracks: [],
    query: ls.getLastSearch() || '',
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
          <Loader />
        ) : (
          <Tracks tracks={this.state.tracks} query={this.state.query} />
        )}
      </>
    );
  }
}
