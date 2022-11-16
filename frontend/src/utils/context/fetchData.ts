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

export const PwInfoContext = createContext(defaultValue)
