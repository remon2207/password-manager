/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Description } from 'components/atoms/forms/Description'

import type { FormInput } from 'types/form'

const schema = yup
  .object({
    service: yup.string().required(),
    email: yup.string().email(),
    name: yup.string(),
    password: yup.string(),
    twoFactor: yup.boolean(),
    secret: yup.string()
  })
  .required()

export const FormOrga: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center">
          <Description htmlFor="service">
            Service{errors.service && <span>Please enter a service name</span>}
          </Description>
          <input type="text" {...register('service')} />
          <Description htmlFor="email">Email</Description>
          <input type="email" {...register('email')} />
          <Description htmlFor="name">Name</Description>
          <input type="text" {...register('name')} />
          <Description htmlFor="password">Password</Description>
          <input type="text" {...register('password')} />
          <Description htmlFor="two-factor">Two factor</Description>
          <input type="checkbox" {...register('twoFactor')} />
          <Description htmlFor="Secret">Secret</Description>
          <input type="text" {...register('secret')} />
          <div className="flex flex-row items-center justify-center">
            <input type="submit" value="Back" />
            <input type="submit" value="Send" />
          </div>
        </div>
      </form>
    </>
  )
}
