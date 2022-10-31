/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

import type { AppProps } from 'next/app'

const cache = new InMemoryCache()
const uri = 'http://api:4000/graphql'
export const client = new ApolloClient({
  uri,
  cache
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default App
