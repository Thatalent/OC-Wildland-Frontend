import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

// Default to Keystone's typical GraphQL path. Encourage using VITE_GRAPHQL_ENDPOINT in .env.
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:8080/api/graphql',
  // include cookies for auth/session if the backend uses them
  fetchOptions: { credentials: 'include' },
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'ignore',
    },
    query: {
      errorPolicy: 'all',
    },
  },
})
