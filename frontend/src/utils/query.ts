import { gql } from '@apollo/client'

export const getPws = gql`
  query Query($userId: Int!) {
    getPws(userId: $userId) {
      id
      userId
      service
      email
      name
      password
      twoFactor
      secret
    }
  }
`

export const getPw = gql`
  query Query($id: Int!) {
    getPw(id: $id) {
      id
      userId
      service
      email
      name
      password
      twoFactor
      secret
    }
  }
`

export const getUserId = gql`
  query Query($name: String!, $email: String!) {
    getUserId(name: $name, email: $email) {
      id
    }
  }
`
