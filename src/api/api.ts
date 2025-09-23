import type {
  PokemonListResponse,
  Pokemon,
  NamedAPIResource,
  Ability,
  AbilityInfo,
} from '~/types/types';
import { API } from './endpoints';
import {
  isAbility,
  isPokemon,
  isPokemonListResponse,
} from '~/utils/validators';
import type { Validator } from '~/types/helper.types';

export class FetchError extends Error {
  response: Response;
  request: Request;
  body: unknown;

  constructor(
    message: string,
    options: {
      response: Response;
      request: Request;
      body: unknown;
    }
  ) {
    super(message);
    this.name = 'FetchError';
    this.response = options.response;
    this.request = options.request;
    this.body = options.body;
  }
}

class Api {
  private async makeRequest(request: Request) {
    try {
      const response = await fetch(request);

      if (response.status >= 400) {
        const errorBody = await this.safeParseJson(response);
        throw new FetchError('Request failed', {
          response,
          body: errorBody,
          request,
        });
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      if (error instanceof FetchError) {
        throw error;
      }

      throw new Error('Unexpected error during fetch', { cause: error });
    }
  }

  private async getPokemonListResponse(
    limit: number = 20,
    offset: number = 0
  ): Promise<PokemonListResponse> {
    return this.get(API.POKEMON_LIST(limit, offset), isPokemonListResponse);
  }

  async getPokemon(nameOrId: string): Promise<Pokemon> {
    if (!nameOrId) throw new Error('Provide pokemon name or id');
    return await this.get(API.POKEMON(nameOrId), isPokemon);
  }

  async getPokemons(): Promise<Pokemon[]> {
    const pokemonAPIResource = (await this.getPokemonListResponse()).results;
    return await this.loadUrls(pokemonAPIResource, isPokemon);
  }

  async getAbilities(abilities: AbilityInfo[]): Promise<Ability[]> {
    const abilityAPIResource = abilities.map(
      (abilityInfo: AbilityInfo) => abilityInfo.ability
    );
    return await this.loadUrls(abilityAPIResource, isAbility);
  }

  async loadUrls<T>(apiResource: NamedAPIResource[], validator?: Validator<T>) {
    return await Promise.all(
      apiResource.map(({ url }) => this.get(url, validator))
    );
  }

  private async get<T>(endpoint: string, validator?: Validator<T>): Promise<T> {
    const url = new URL(`${endpoint}`);
    const request = new Request(url);
    const response = await this.makeRequest(request);

    if (validator && !validator(response)) {
      throw new Error(
        `Invalid response shape of response object for ${endpoint}`
      );
    }

    return response;
  }

  private async safeParseJson(response: Response) {
    try {
      return await response.json();
    } catch {
      return null;
    }
  }
}

export default new Api();
