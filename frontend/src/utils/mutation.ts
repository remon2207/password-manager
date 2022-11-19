import { gql } from '@apollo/client'

export const pwRegister = gql`
  mutation Mutation($pw: NewPwInfoInput!) {
    pwRegister(pw: $pw) {
      message
    }
  }
`

export const pwUpdater = gql`
  mutation Mutation($pw: UpdatePwInfoInput!) {
    pwUpdater(pw: $pw) {
      message
    }
  }
`

export const pwDeleter = gql`
  mutation Mutation($id: Int!) {
    pwDeleter(id: $id) {
      message
    }
  }
`

export const userRegister = gql`
  mutation Mutation($user: NewUserInput!) {
    userRegister(user: $user) {
      message
    }
  }
`

export const serverRegister = gql`
  mutation Mutation($server: NewServerInput!) {
    serverRegister(server: $server) {
      message
    }
  }
`

export const serverUpdater = gql`
  mutation Mutation($server: UpdateServerInput!) {
    serverUpdater(server: $server) {
      message
    }
  }
`
