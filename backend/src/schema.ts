import { gql } from 'apollo-server-core'

export const typeDefs = gql`
  type Query {
    getUsers: [User]!
    getUser(id: Int!): User!
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }
`
