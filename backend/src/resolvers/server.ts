import { PrismaClient } from '@prisma/client'

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
