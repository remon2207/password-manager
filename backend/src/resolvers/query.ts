import { getUser, getUsers } from './user'

import type { QueryResolvers } from 'generated/graphql'

export const query: QueryResolvers = {
  getUsers: () => getUsers(),
  getUser: (_, { id }) => getUser(id)
}
