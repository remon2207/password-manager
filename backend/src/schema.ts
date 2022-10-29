import { gql } from 'apollo-server-core'

export const typeDefs = gql`
  type Query {
    getUsers: [User]!
    getUser(id: Int!): User!
    getPws(userId: Int!): [PwInfo]!
  }

  type Mutation {
    userRegister(user: NewUserInput!): Message!
    userDeleter(id: Int!): Message!
  }

  type Message {
    message: String!
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }

  type PwInfo {
    id: Int!
    userId: Int!
    service: String!
    email: String!
    name: String!
    password: String!
    twoFactor: Boolean!
    secret: String!
  }

  input NewUserInput {
    name: String!
    email: String!
  }
`
