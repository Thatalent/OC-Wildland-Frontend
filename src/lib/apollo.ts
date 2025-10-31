import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

// Use Vite dev proxy by default to avoid CORS in development
// Override with VITE_GRAPHQL_ENDPOINT in production or custom setups
export const GRAPHQL_HTTP_URL =
  (import.meta as any)?.env?.VITE_GRAPHQL_ENDPOINT || '/api/graphql'

const httpLink = createHttpLink({
  uri: GRAPHQL_HTTP_URL,
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
