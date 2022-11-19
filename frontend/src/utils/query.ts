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

export const getServers = gql`
  query Query($userId: Int!) {
    getServers(userId: $userId) {
      id
      userId
      usage
      hostname
      ip
      username
      password
      device
      port
      url
    }
  }
`

export const getServer = gql`
  query Query($id: Int!) {
    getServer(id: $id) {
      id
      userId
      usage
      hostname
      ip
      username
      password
      device
      port
      url
    }
  }
`
