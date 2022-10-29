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

