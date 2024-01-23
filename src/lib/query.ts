'use client'

import { gql } from "@apollo/client";

export const Q_POKEMONS = gql`
  query GetPokemons($limit: Int) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork")
      }
    }
  }
`

export const Q_DETAIL_POKEMON = gql`
  query GetDetailPokemon($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id ) {
      id
      name
      height
      weight
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork")
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          name
        }
      }
    }
  }
`