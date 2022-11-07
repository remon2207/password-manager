/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { useState } from 'react'

import { client } from 'utils/apollo-client'
import { SetStatusContext, StatusContext } from 'utils/context/status'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  const [status, setStatus] = useState('')

  return (
    <>
      <StatusContext.Provider value={status}>
        <SetStatusContext.Provider value={setStatus}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </SetStatusContext.Provider>
      </StatusContext.Provider>
    </>
  )
}

export default App
