import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

export const GRAPHQL_HTTP_URL = import.meta.env.VITE_GRAPHQL_ENDPOINT || '/api/graphql'

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
