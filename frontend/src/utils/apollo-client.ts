import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const uri = 'http://192.168.1.38:4000/graphql'

export const client = new ApolloClient({
  cache,
  uri
})
