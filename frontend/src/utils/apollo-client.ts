import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const nodeEnv = process.env.NODE_ENV

const uriSwitch = () => {
  if (nodeEnv === 'development') {
    if (typeof window !== 'undefined') {
      return 'http://localhost:4000/graphql'
    }
    return 'http://api:4000/graphql'
  }
  return 'http://remon2207.com:4000/graphql'
}

const uri = uriSwitch()

export const client = new ApolloClient({
  cache,
  uri
})
