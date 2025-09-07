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
    this.setState({ tracks: response, query });
  };

  render() {
    const hasTracks =
      Array.isArray(this.state.tracks) && this.state.tracks.length > 0;
    return hasTracks ? (
      <>
        <SearchBar onSearch={this.handleSearch} />
        <Tracks tracks={this.state.tracks} />
      </>
    ) : (
      <>
        <SearchBar onSearch={this.handleSearch} />
        <div>
          Nothing to show for &quot;{this.state.query}&quot;, try another word
        </div>
      </>
    );
  }
}
