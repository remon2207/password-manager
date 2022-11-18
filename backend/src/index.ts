import 'dotenv/config'

import http from 'http'

import { ApolloServer, BaseContext } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import cors from 'cors'
import express from 'express'

import { resolvers } from 'resolvers'
import { typeDefs } from 'schema'

const port = Number(process.env.PORT)

const app = express()

const httpServer = http.createServer(app)

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

const startServer = async () => {
  await server.start()
  app.use(
    '/graphql',
    cors({ origin: 'http://localhost:3000' }),
    express.json(),
    expressMiddleware(server)
  )
  httpServer.listen({ port })
}

const nodeEnv = process.env.NODE_ENV

if (nodeEnv === 'development') {
  startServer().finally(() =>
    console.log('🚀  Server ready at: http://localhost:4000/graphql')
  )
}

if (nodeEnv === 'production') {
  startServer().finally(() => {})
}
