import { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Results from './components/Results/Results';
import api from './api/api';
import db from './db/db';

export default class App extends Component {
  state = {
    tracks: [],
    query: db.getLastSearch(),
  };

  componentDidMount(): void {
    console.log('Results mounted');

    if (this.state.query) {
      const response = this.handleSearch(this.state.query);
      console.log('Results:', response);
    } else {
      const response = this.handleSearch('chic');
      console.log('Results:', response);
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
        <Results tracks={this.state.tracks} />
      </>
    );
  }
}
