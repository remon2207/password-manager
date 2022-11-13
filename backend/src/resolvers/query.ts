import { getPw, getPws } from './pw'
import { getUser, getUsers, getUserId } from './user'

import type { QueryResolvers } from 'generated/graphql'

export const query: QueryResolvers = {
  getUsers: () => getUsers(),
  getUser: (_, { id }) => getUser(id),
  getUserId: (_, { name, email }) => getUserId(name, email),
  getPws: (_, { userId }) => getPws(userId),
  getPw: (_, { id }) => getPw(id)
}
