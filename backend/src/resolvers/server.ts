import { PrismaClient } from '@prisma/client'
import { GraphQLError } from 'graphql'

import { Server } from 'types/server'

const prisma = new PrismaClient()

export const getServers = async (userId: number) => {
  const servers = await prisma.server.findMany({
    where: {
      userId
    },
    orderBy: [
      {
        usage: 'asc'
      },
      {
        hostname: 'asc'
      },
      {
        username: 'asc'
      },
      {
        password: 'asc'
      }
    ]
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

export const addServer: Server = async (
  userId,
  usage,
  hostname,
  ip,
  username,
  password,
  device,
  port,
  url
) => {
  const message = {
    message: 'Created server successfully'
  }
  await prisma.server.create({
    data: {
      userId,
      usage,
      hostname,
      ip,
      username,
      password,
      device,
      port,
      url
    }
  })

  return message
}

export const serverUpdate: Server = async (
  id,
  usage,
  hostname,
  ip,
  username,
  password,
  device,
  port
) => {
  const message = {
    message: 'Updated server successfully'
  }

  await prisma.server.update({
    where: {
      id
    },
    data: {
      usage,
      hostname,
      ip,
      username,
      password,
      device,
      port
    }
  })

  return message
}

export const serverDelete = async (id: number) => {
  const message = {
    message: 'Deleted server successfully'
  }

  await prisma.server.delete({
    where: {
      id
    }
  })

  return message
}
