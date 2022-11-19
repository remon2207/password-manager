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

export type ServerFormInput = {
  id: number
  userId: number
  usage: string
  hostname: string
  ip: string
  username: string
  password: string
  device: string
  port: number
  url: string
}

export type Message = {
  pwRegister: {
    message: string
  }
  pwUpdater: {
    message: string
  }
  serverRegister: {
    message: string
  }
  serverUpdater: {
    message: string
  }
}
