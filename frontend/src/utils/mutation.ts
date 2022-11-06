import { gql } from '@apollo/client'

export const pwRegister = gql`
  mutation Mutation($pw: NewPwInfoInput!) {
    pwRegister(pw: $pw) {
      message
    }
  }
`
