import type { Pokemon } from '~types/types';

class Db {
  db: Pokemon[] = [];

  saveResponse(response: Pokemon[]) {
    if (Array.isArray(response)) {
      this.db = response;
    } else {
      this.db = [response];
    }
  }

  getPokemonById(pokemonId: Pokemon['id']): Pokemon {
    const pokemon = this.db.find((pokemon) => pokemon.id === pokemonId);
    if (!pokemon) {
      throw new Error(`Pokemon with id ${pokemonId} not found`);
    }
    return pokemon;
  }
}
export default new Db();
