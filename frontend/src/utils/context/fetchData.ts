import { createContext } from 'react'

const defaultValue = {
  id: 0,
  userId: 0,
  service: '',
  email: '',
  name: '',
  password: '',
  twoFactor: false,
  secret: ''
}

const serverDefaultValue = {
  id: 0,
  userId: 0,
  usage: '',
  hostname: '',
  ip: '',
  username: '',
  password: '',
  device: '',
  port: 0,
  url: ''
}

export const PwInfoContext = createContext(defaultValue)

export const ServerInfoContext = createContext(serverDefaultValue)
