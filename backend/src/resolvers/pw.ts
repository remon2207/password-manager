import { PrismaClient } from '@prisma/client'
import { ApolloError, UserInputError } from 'apollo-server-core'
import bcrypt from 'bcrypt'
import validator from 'validator'

import type { Pw } from 'types/pw'

export const getPws = async (userId: number) => {
  const prisma = new PrismaClient()
  const pws = await prisma.password.findMany({
    where: {
      userId
    }
  })

  return pws
}

export const getPw = async (id: number) => {
  const prisma = new PrismaClient()
  const pw = await prisma.password.findFirst({
    where: {
      id
    }
  })

  if (!pw) {
    throw new ApolloError('Password info not found', 'NOT_FOUND')
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
  const prisma = new PrismaClient()
  const isEmptyService = validator.isEmpty(service, { ignore_whitespace: true })
  const isEmptyEmail = validator.isEmpty(email, { ignore_whitespace: true })
  const isEmptyPw = validator.isEmpty(password, { ignore_whitespace: true })
  const isEmail = validator.isEmail(email)

  const createPwInfo = async (pw: string) => {
    const message = {
      message: 'Password info created successfully'
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
    throw new UserInputError('Should input service name')
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
  throw new UserInputError('Not email')
}
