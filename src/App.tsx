import { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Results from './components/Results/Results';

export default class App extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <Results />
      </>
    );
  }
}
