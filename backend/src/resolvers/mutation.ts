import { addPw, pwUpdate } from './pw'
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
    )
}
