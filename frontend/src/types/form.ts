export type FormInput = {
  id: number
  userId: number
  service: string
  email: string
  name: string
  password: string
  twoFactor: boolean
  secret: string
}

export type Message = {
  pwRegister: {
    message: string
  }
  pwUpdater: {
    message: string
  }
}
