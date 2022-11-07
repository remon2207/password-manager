import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const uri =
  typeof window !== 'undefined'
    ? 'http://localhost:4000/graphql'
    : 'http://api:4000/graphql'

export const client = new ApolloClient({
  cache,
  uri
})
