import { PrismaClient } from '@prisma/client'
// import { ApolloError, UserInputError } from 'apollo-server-core'
import bcrypt from 'bcrypt'
import { GraphQLError } from 'graphql'
import validator from 'validator'

import type { Pw } from 'types'

const prisma = new PrismaClient()

export const getPws = async (userId: number) => {
  const pws = await prisma.password.findMany({
    where: {
      userId
    },
    orderBy: {
      service: 'asc'
    }
  })

  return pws
}

export const getPw = async (id: number) => {
  const pw = await prisma.password.findFirst({
    where: {
      id
    }
  })

  if (!pw) {
    // throw new ApolloError('Password info not found', 'NOT_FOUND')
    throw new GraphQLError('Password info not found')
  }

  return pw
}

export const addPw: Pw = async (
  userId,
  service,
  email,
  name,
  password,
  twoFactor,
  secret
) => {
  const isEmptyService = validator.isEmpty(service, { ignore_whitespace: true })
  const isEmptyEmail = validator.isEmpty(email, { ignore_whitespace: true })
  const isEmptyPw = validator.isEmpty(password, { ignore_whitespace: true })
  const isEmail = validator.isEmail(email)

  const createPwInfo = async (pw: string) => {
    const message = {
      message: 'Created Password info successfully'
    }
    await prisma.password.create({
      data: {
        userId,
        service,
        email,
        name,
        password: pw,
        twoFactor,
        secret
      }
    })

    return message
  }

  if (isEmptyService) {
    // throw new UserInputError('Should input service name')
    throw new GraphQLError('Should input service name')
  }

  if (isEmptyEmail && isEmptyPw) {
    return createPwInfo(password)
  }

  const hashPw = await bcrypt.hash(password, 10)

  if (isEmptyEmail && !isEmptyPw) {
    return createPwInfo(hashPw)
  }
  if (isEmail && isEmptyPw) {
    return createPwInfo(password)
  }
  if (isEmail && !isEmptyPw) {
    return createPwInfo(hashPw)
  }
  // throw new UserInputError('Not email')
  throw new GraphQLError('Not email')
}

export const pwUpdate: Pw = async (
  id,
  service,
  email,
  name,
  password,
  twoFactor,
  secret
) => {
  const isEmptyService = validator.isEmpty(service, { ignore_whitespace: true })
  const isEmptyEmail = validator.isEmpty(email, { ignore_whitespace: true })
  const isEmail = validator.isEmail(email)

  if (isEmptyService) {
    // throw new UserInputError('Should input service name')
    throw new GraphQLError('Should input service name')
  }

  if (isEmptyEmail || isEmail) {
    const message = {
      message: 'Updated password info successfully'
    }
    await prisma.password.update({
      where: {
        id
      },
      data: {
        service,
        email,
        name,
        password,
        twoFactor,
        secret
      }
    })

    return message
  }

  // throw new ApolloError('Not email')
  throw new GraphQLError('Not email')
}

export const deletePw = async (id: number) => {
  try {
    const message = {
      message: 'Deleted password info successfully'
    }

    await prisma.password.delete({
      where: {
        id
      }
    })

    return message
  } catch (e) {
    // throw new ApolloError('Password info not found', 'NOT_FOUND')
    throw new GraphQLError('Password info not found')
  }
}
