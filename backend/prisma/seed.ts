import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.create({
    data: {
      name: 'name',
      email: 'email@gmail.com',
      passwords: {
        create: {
          service: 'Google',
          email: 'email@gmail.com',
          name: 'name',
          password: 'password',
          twoFactor: false,
          secret: ''
        }
      },
      servers: {
        create: {
          usage: 'shell',
          hostname: 'hostname',
          ip: '127.0.0.1',
          username: 'username',
          password: 'password',
          device: 'device',
          port: 0,
          url: ''
        }
      }
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
