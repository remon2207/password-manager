export const typeDefs = `#graphql
  type Query {
    getUsers: [User]!
    getUser(id: Int!): User!
    getUserId(name: String!, email: String!): User!
    getPws(userId: Int!): [PwInfo]!
    getPw(id: Int!): PwInfo!
    getServers(userId: Int!): [Server]!
  }

  type Mutation {
    userRegister(user: NewUserInput!): Message!
    userDeleter(id: Int!): Message!
    pwRegister(pw: NewPwInfoInput!): Message!
    pwUpdater(pw: UpdatePwInfoInput!): Message!
    pwDeleter(id: Int!): Message!
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

  type Server {
    id: Int!
    userId: Int!
    usage: String!
    hostname: String!
    ip: String!
    username: String!
    password: String!
    device: String!
    port: Int!
    url: String!
  }

  input NewUserInput {
    name: String!
    email: String!
  }

  input NewPwInfoInput {
    userId: Int!
    service: String!
    email: String!
    name: String!
    password: String!
    twoFactor: Boolean!
    secret: String!
  }

  input UpdatePwInfoInput {
    id: Int!
    service: String!
    email: String!
    name: String!
    password: String!
    twoFactor: Boolean!
    secret: String!
  }
`
