import { Component } from 'react';
import styles from './Pokemon.module.css';
import type { AbilityInfo, Pokemon as IPokemon } from '~types/types';
import PokemonAbilities from './PokemonAbilities/PokemonAbilities';
import api from '~/api/api';
import Loader from '~/components/Loader/Loader';

interface Props {
  pokemon: IPokemon;
}

export default class Pokemon extends Component<Props> {
  state = {
    abilities: [],
    loading: false,
  };

  private loadAbilities = async () => {
    this.setState({ loading: true });
    try {
      const abilityAPIResource = this.props.pokemon.abilities.map(
        (abilityInfo: AbilityInfo) => abilityInfo.ability
      );
      const response = await api.loadUrls(abilityAPIResource);

      this.setState({ abilities: response, loading: false });
    } catch (error) {
      this.setState({
        pokemons: [],
      });
      if (error instanceof Error) throw error;
      throw new Error('Unknown error occurred', { cause: error });
    }
  };

  componentDidMount(): void {
    this.loadAbilities();
  }
  render() {
    const { pokemon } = this.props;
    const abilitiesLoaded = this.state.abilities.length > 0;
    return (
      <div className={styles.pokemon}>
        <span className={styles.pokemonName}>{pokemon.name} </span>
        {abilitiesLoaded ? (
          <PokemonAbilities abilities={this.state.abilities} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
