import { PrismaClient } from '@prisma/client'

export const getPws = async (userId: number) => {
  const prisma = new PrismaClient()
  const pws = await prisma.password.findMany({
    where: {
      userId
    }
  })

  return pws
}
