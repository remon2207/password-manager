import { gql } from 'apollo-server-core'

export const typeDefs = gql`
  type Query {
    getUsers: [User]!
    getUser(id: Int!): User!
  }

  type Mutation {
    userRegister(user: NewUserInput!): Message!
  }

  type Message {
    message: String!
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }

  input NewUserInput {
    name: String!
    email: String!
  }
`
