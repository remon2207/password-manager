import { getPw, getPws } from './pw'
import { getUser, getUsers, getUserId } from './user'

import type { QueryResolvers } from 'generated/graphql'

export const query: QueryResolvers = {
  getUsers: () => getUsers(),
  getUser: (_, { id }) => getUser(id),
  getUserId: (_, { id }) => getUserId(id),
  getPws: (_, { userId }) => getPws(userId),
  getPw: (_, { id }) => getPw(id)
}
