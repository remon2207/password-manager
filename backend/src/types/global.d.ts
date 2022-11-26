declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly ORIGIN_URL: string
    readonly PORT: number
  }
}
