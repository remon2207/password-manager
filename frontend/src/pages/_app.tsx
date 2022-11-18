import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { UserIdProvider, StatusProvider } from 'components/providers'
import { client } from 'utils'

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
