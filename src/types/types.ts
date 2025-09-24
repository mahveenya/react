export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface AbilityInfo {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface Pokemon {
  abilities: AbilityInfo[];
  forms: NamedAPIResource[];
  height: number;
  id: number;
  name: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: NamedAPIResource;
}

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  effect_entries: VerboseEffect[];
  pokemon: AbilityPokemon[];
}
