import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL } from './api';

const client = new ApolloClient({
  uri: API_URL, // Replace with your API URL
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemon_v2_pokemon: {
            keyArgs: [],
            merge(existing, incoming, { args: { offset = 0 }}: any) {
              // Slicing is necessary because the existing data is
              // immutable, and frozen in development.
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[offset + i] = incoming[i];
              }
              return merged;
            },
          },
        },
      },
    },
  }),
});

export default client;
