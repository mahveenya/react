import { Component } from 'react';
import './App.css';
import SearchBar from '~components/SearchBar/SearchBar';
import Tracks from '~components/Tracks/Tracks';
import api from '~api/api';
import db from './db/db';

export default class App extends Component {
  state = {
    tracks: [],
    query: db.getLastSearch(),
  };

  componentDidMount(): void {
    if (this.state.query) {
      this.handleSearch(this.state.query);
    } else {
      this.handleSearch('kung fu fighting');
    }
  }

  handleSearch = async (query: string) => {
    const response = await api.search(query);
    this.setState({ tracks: response });
  };

  render() {
    return (
      <>
        <SearchBar onSearch={this.handleSearch} />
        <Tracks tracks={this.state.tracks} />
      </>
    );
  }
}
