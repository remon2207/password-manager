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
