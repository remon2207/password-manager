import { gql } from 'apollo-server-core'

export const typeDefs = gql`
  type Query {
    getUsers: [User]!
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }
`
