'use client'

import { gql } from "@apollo/client";

export const Q_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        name
        artwork
      }
    }
  }
`