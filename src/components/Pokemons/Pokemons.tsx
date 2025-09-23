import { Component } from 'react';
import styles from './Pokemons.module.css';
import Pokemon from './Pokemon/Pokemon';
import type { Pokemon as IPokemon } from '~types/types';
import NothingToShow from '../NothingToShow/NothingToShow';
import ErrorTrigger from '../ErrorTrigger/ErrorTrigger';
import { isEmptyArray } from '~/utils/utils';

type PokemonsState = {
  pokemons: [IPokemon] | IPokemon[];
};

interface Props {
  query: string;
  pokemons: [IPokemon] | IPokemon[];
  error: string | null;
}

export default class Pokemons extends Component<Props, PokemonsState> {
  render() {
    const { pokemons, query, error } = this.props;

    if (error) {
      throw error;
    }

    const hasPokemons = !isEmptyArray(pokemons);

    return (
      <>
        {hasPokemons ? (
          <section className={styles.pokemons}>
            {pokemons.map((pokemon: IPokemon) => {
              return <Pokemon key={pokemon.id} pokemon={pokemon} />;
            })}
          </section>
        ) : (
          // TODO: use as a fallback UI, show status code, error message, etc.
          <NothingToShow query={query} />
        )}
        <ErrorTrigger />
      </>
    );
  }
}
