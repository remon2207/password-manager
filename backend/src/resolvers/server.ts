import { PrismaClient } from '@prisma/client'
import { GraphQLError } from 'graphql'

const prisma = new PrismaClient()

export const getServers = async (userId: number) => {
  const servers = await prisma.server.findMany({
    where: {
      userId
    },
    orderBy: {
      usage: 'asc'
    }
  })

  return servers
}

export const getServer = async (id: number) => {
  const server = await prisma.server.findFirst({
    where: {
      id
    }
  })

  if (!server) {
    throw new GraphQLError('Server not found')
  }

  return server
}
