import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()
const uri = 'http://api:4000/graphql'

export const client = new ApolloClient({
  cache,
  uri
})
