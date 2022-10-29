import { addUser } from './user'

import type { MutationResolvers } from 'generated/graphql'

export const mutation: MutationResolvers = {
  userRegister: (_, { user }) => addUser(user.name, user.email)
}
