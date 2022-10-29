import { PrismaClient } from '@prisma/client'
import { ApolloError } from 'apollo-server-core'

export const getUsers = async () => {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()

  return users
}

export const getUser = async (id: number) => {
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })

  if (!user) {
    throw new ApolloError('Account not found', 'NOT_FOUND')
  }

  return user
}
