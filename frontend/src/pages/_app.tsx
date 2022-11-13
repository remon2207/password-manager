/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { StatusProvider } from 'components/providers/StatusProvider'
import { UserIdProvider } from 'components/providers/UserIdProvider'
import { client } from 'utils/apollo-client'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps<Session>) => {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <UserIdProvider>
          <StatusProvider>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </StatusProvider>
        </UserIdProvider>
      </SessionProvider>
    </>
  )
}

export default App
