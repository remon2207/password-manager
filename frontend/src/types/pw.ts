export type GetPws = {
  getPws: [
    {
      id: number
      userId: number
      service: string
      email: string
      name: string
      password: string
      twoFactor: boolean
      secret: string
    }
  ]
}

export type GetPw = {
  getPw: {
    id: number
    userId: number
    service: string
    email: string
    name: string
    password: string
    twoFactor: boolean
    secret: string
  }
}
