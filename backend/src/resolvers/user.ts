import { PrismaClient } from '@prisma/client'
import { GraphQLError } from 'graphql'
import validator from 'validator'

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
    // throw new ApolloError('Account not found', 'NOT_FOUND')
    throw new GraphQLError('Account not found')
  }

  return user
}

export const addUser = async (name: string, email: string) => {
  const prisma = new PrismaClient()
  const isEmptyName = validator.isEmpty(name, { ignore_whitespace: true })
  const isEmptyEmail = validator.isEmpty(email, { ignore_whitespace: true })
  const isEmail = validator.isEmail(email)

  if (isEmptyName) {
    // throw new ApolloError('Name not found', 'NOT_FOUND')
    throw new GraphQLError('Name not found')
  }

  if (isEmptyEmail) {
    // throw new ApolloError('Email not found', 'NOT_FOUND')
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
      // throw new ApolloError('Account is already registed')
      throw new GraphQLError('Account is already registed')
    } else {
      const message = {
        message: 'Deleted account successfully'
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
    // throw new ApolloError('Not email')
    throw new GraphQLError('Not email')
  }
}

export const deleteUser = async (id: number) => {
  const prisma = new PrismaClient()
  const message = {
    message: 'Deleted account successfully'
  }
  const deletePws = prisma.password.deleteMany({
    where: {
      id
    }
  })
  const deleteUser = prisma.user.delete({
    where: {
      id
    }
  })

  try {
    await prisma.$transaction([deletePws, deleteUser])
  } catch (e) {
    // throw new ApolloError('Account not found', 'NOT_FOUND')
    throw new GraphQLError('Account not found')
  }

  return message
}
