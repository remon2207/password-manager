export type GetServers = {
  getServers: [
    {
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
  ]
}

export type GetServer = {
  getServer: {
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
}
