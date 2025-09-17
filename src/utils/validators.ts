import type {
  Ability,
  AbilityPokemon,
  NamedAPIResource,
  Pokemon,
  PokemonListResponse,
  VerboseEffect,
} from '~/types/types';

function isRecord(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === 'object' && obj !== null;
}

function isNamedAPIResource(obj: unknown): obj is NamedAPIResource {
  return (
    isRecord(obj) && typeof obj.name === 'string' && typeof obj.url === 'string'
  );
}

export function isPokemon(obj: unknown): obj is Pokemon {
  return (
    isRecord(obj) &&
    Array.isArray(obj.abilities) &&
    Array.isArray(obj.forms) &&
    typeof obj.height === 'number' &&
    typeof obj.id === 'number' &&
    typeof obj.name === 'string'
  );
}

export function isPokemonListResponse(
  obj: unknown
): obj is PokemonListResponse {
  return (
    isRecord(obj) &&
    typeof obj.count === 'number' &&
    (typeof obj.next === 'string' || obj.next === null) &&
    (typeof obj.previous === 'string' || obj.previous === null) &&
    Array.isArray(obj.results) &&
    obj.results.every(isNamedAPIResource)
  );
}

function isVerboseEffect(obj: unknown): obj is VerboseEffect {
  return (
    isRecord(obj) &&
    typeof obj.effect === 'string' &&
    typeof obj.short_effect === 'string' &&
    isNamedAPIResource(obj.language)
  );
}

function isAbilityPokemon(obj: unknown): obj is AbilityPokemon {
  return (
    isRecord(obj) &&
    typeof obj.is_hidden === 'boolean' &&
    typeof obj.slot === 'number' &&
    isNamedAPIResource(obj.pokemon)
  );
}

export function isAbility(obj: unknown): obj is Ability {
  return (
    isRecord(obj) &&
    typeof obj.id === 'number' &&
    typeof obj.name === 'string' &&
    typeof obj.is_main_series === 'boolean' &&
    Array.isArray(obj.effect_entries) &&
    obj.effect_entries.every(isVerboseEffect) &&
    Array.isArray(obj.pokemon) &&
    obj.pokemon.every(isAbilityPokemon)
  );
}
