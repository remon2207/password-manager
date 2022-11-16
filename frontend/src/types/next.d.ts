import type { Session } from 'next-auth'

declare module 'next/app' {
  type AppProps<P> = {
    Component: NextComponentType<NextPageContext>
    router: Router
    __N_SSG?: boolean | undefined
    __N_SSP?: boolean | undefined
    pageProps: P & {
      session?: Session
    }
  }
}
