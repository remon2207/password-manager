type Message = {
  message: string
}

export type Pw = (
  id: number,
  service: string,
  email: string,
  name: string,
  password: string,
  twoFactor: boolean,
  secret: string
) => Promise<Message>
