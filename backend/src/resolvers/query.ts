import { getUsers } from './user'

import type { QueryResolvers } from 'generated/graphql'

export const query: QueryResolvers = {
  getUsers: () => getUsers()
}
