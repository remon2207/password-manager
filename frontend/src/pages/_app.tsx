/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'

import { client } from 'utils/apollo-client'

import type { AppProps } from 'next/app'

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
