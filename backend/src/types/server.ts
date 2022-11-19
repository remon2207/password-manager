type Message = {
  message: string
}

export type Server = (
  id: number,
  usage: string,
  hostname: string,
  ip: string,
  username: string,
  password: string,
  device: string,
  port: number,
  url: string
) => Promise<Message>
