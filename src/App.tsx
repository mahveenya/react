import { Component } from 'react';
import './App.css';
import SearchBar from '~components/SearchBar/SearchBar';
import Pokemons from '~components/Pokemons/Pokemons';
import api from '~api/api';
import ls from './db/storage';
import Loader from './components/Loader/Loader';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import type { Pokemon } from './types/types';
import { toArray } from './utils/utils';

type State = {
  pokemons: Pokemon[];
  query: string;
  loading: boolean;
  error: string | null;
};

export default class App extends Component<State> {
  state: State = {
    pokemons: [],
    query: ls.getLastSearch() || '',
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.handleSearch(this.state.query);
  }

  private fetchData = async <T,>(fetchFn: () => Promise<T>, query?: string) => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetchFn();
      this.setState({ pokemons: toArray(response), loading: false });
    } catch (error) {
      this.setState({
        pokemons: [],
        query: query ?? this.state.query,
        loading: false,
        error: error,
      });
    }
  };

  handleSearch = (query?: string) => {
    if (query) {
      return this.fetchData(() => {
        return api.getPokemon(query);
      }, query);
    }

    return this.fetchData(() => api.getPokemons());
  };

  render() {
    return (
      <>
        <SearchBar onSearch={this.handleSearch} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <ErrorBoundary>
            <Pokemons pokemons={this.state.pokemons} error={this.state.error} />
          </ErrorBoundary>
        )}
      </>
    );
  }
}
