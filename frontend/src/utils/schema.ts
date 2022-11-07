import { gql } from '@apollo/client'
import * as yup from 'yup'

export const formSchema = yup
  .object({
    service: yup.string().required('Please enter a service name'),
    email: yup.string().email(),
    name: yup.string(),
    password: yup.string(),
    twoFactor: yup.boolean(),
    secret: yup.string()
  })
  .required()

export const typeDefs = gql`
  type Query {
    getUsers: [User]!
    getUser(id: Int!): User!
    getPws(userId: Int!): [PwInfo]!
    getPw(id: Int!): PwInfo!
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
