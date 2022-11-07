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
