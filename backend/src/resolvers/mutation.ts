import { addPw, deletePw, pwUpdate } from './pw'
import { addServer, serverUpdate } from './server'
import { addUser, deleteUser } from './user'

import type { MutationResolvers } from 'generated/graphql'

export const mutation: MutationResolvers = {
  userRegister: (_, { user }) => addUser(user.name, user.email),
  userDeleter: (_, { id }) => deleteUser(id),
  pwRegister: (_, { pw }) =>
    addPw(
      pw.userId,
      pw.service,
      pw.email,
      pw.name,
      pw.password,
      pw.twoFactor,
      pw.secret
    ),
  pwUpdater: (_, { pw }) =>
    pwUpdate(
      pw.id,
      pw.service,
      pw.email,
      pw.name,
      pw.password,
      pw.twoFactor,
      pw.secret
    ),
  pwDeleter: (_, { id }) => deletePw(id),
  serverRegister: (_, { server }) =>
    addServer(
      server.userId,
      server.usage,
      server.hostname,
      server.ip,
      server.username,
      server.password,
      server.device,
      server.port,
      server.url
    ),
  serverUpdater: (_, { server }) =>
    serverUpdate(
      server.id,
      server.usage,
      server.hostname,
      server.ip,
      server.username,
      server.password,
      server.device,
      server.port,
      server.url
    )
}
