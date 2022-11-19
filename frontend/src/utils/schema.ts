import * as yup from 'yup'

export const formSchema = yup
  .object({
    service: yup.string().required('Please enter a service name'),
    email: yup.string().email(),
    name: yup.string(),
    password: yup.string(),
    twoFactor: yup.boolean(),
    secret: yup.string()
  })
  .required()

export const serverFormSchema = yup
  .object({
    usage: yup.string(),
    hostname: yup.string(),
    ip: yup.string(),
    username: yup.string(),
    password: yup.string(),
    device: yup.string(),
    port: yup.number(),
    url: yup.string()
  })
  .required()
