import { PrismaClient } from '@prisma/client'
import { GraphQLError } from 'graphql'
import validator from 'validator'

const prisma = new PrismaClient()

export const getUsers = async () => {
  const users = await prisma.user.findMany()

  return users
}

export const getUser = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })

  if (!user) {
    throw new GraphQLError('Account not found')
  }

  return user
}

export const getUserId = async (name: string, email: string) => {
  try {
    const userId = await prisma.user.findFirstOrThrow({
      where: {
        name,
        email
      }
    })
    return userId
  } catch (e) {
    throw new GraphQLError('Account not found')
  }
}

export const addUser = async (name: string, email: string) => {
  const isEmptyName = validator.isEmpty(name, { ignore_whitespace: true })
  const isEmptyEmail = validator.isEmpty(email, { ignore_whitespace: true })
  const isEmail = validator.isEmail(email)

  if (isEmptyName) {
    throw new GraphQLError('Name not found')
  }

  if (isEmptyEmail) {
    throw new GraphQLError('Email not found')
  }

  if (isEmail) {
    const isUserExists = await prisma.user.findFirst({
      where: {
        name,
        email
      }
    })

    if (isUserExists) {
      throw new GraphQLError('Account is already registed')
    } else {
      const message = {
        message: 'Created account successfully'
      }

      await prisma.user.create({
        data: {
          name,
          email
        }
      })

      return message
    }
  } else {
    throw new GraphQLError('Not email')
  }
}

export const deleteUser = async (id: number) => {
  const message = {
    message: 'Deleted account successfully'
  }
  const deletePws = prisma.password.deleteMany({
    where: {
      userId: id
    }
  })
  const deleteServers = prisma.server.deleteMany({
    where: {
      userId: id
    }
  })
  const deleteUser = prisma.user.delete({
    where: {
      id
    }
  })

  try {
    await prisma.$transaction([deletePws, deleteServers, deleteUser])
  } catch (e) {
    throw new GraphQLError('Account not found')
  }

  return message
}
