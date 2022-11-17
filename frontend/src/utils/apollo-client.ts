import { ApolloClient, InMemoryCache } from '@apollo/client'

import { typeDefs } from './schema'

const cache = new InMemoryCache()

const uri = 'http://localhost:4000/graphql'

export const client = new ApolloClient({
  cache,
  uri,
  typeDefs
})
