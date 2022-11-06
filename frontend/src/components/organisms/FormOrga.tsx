/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { InputForm } from 'components/molecules/InputForm'

import type { SubmitHandler } from 'react-hook-form'
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
          <InputForm
            error={errors.service?.message}
            htmlFor="service"
            labelName="Service*"
            register={register('service')}
            required
            type="text"
          />
          <InputForm
            error={errors.email?.message}
            htmlFor="email"
            labelName="Email"
            register={register('email')}
            type="email"
          />
          <InputForm
            htmlFor="name"
            labelName="Name"
            register={register('name')}
            type="text"
          />
          <InputForm
            htmlFor="password"
            labelName="Password"
            register={register('password')}
            type="text"
          />
          <InputForm
            htmlFor="two-factor"
            labelName="Two factor"
            register={register('twoFactor')}
            type="checkbox"
          />
          <InputForm
            htmlFor="secret"
            labelName="Secret"
            register={register('secret')}
            type="text"
          />
          <div className="mt-14 flex flex-row items-center justify-center gap-24">
            <input className="page-transition-btn" type="submit" value="Back" />
            <input className="page-transition-btn" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </>
  )
}
