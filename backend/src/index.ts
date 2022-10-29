import 'dotenv/config'
import http from 'http'

import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'

import { resolvers } from 'resolvers'
import { typeDefs } from 'schema'

const port = process.env.PORT

async function startApolloServer() {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ]
  })
  await server.start()
  server.applyMiddleware({ app })
  httpServer.listen(port)
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer().catch((e) => console.error(e))
